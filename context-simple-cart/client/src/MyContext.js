import React, { Component } from 'react';
import API from './utils/API';

export const MyContext = React.createContext();

export class MyProvider extends Component {
  state = {
    _id: "",
    username: "",
    email: "",
    password: "",
    loggedIn: false,
    cart: [],
    address: [],
    // orders: [] not sure if i'm going to do this yet, for now i know if your not logged in i'll send you an email about your order, but could be usefull for populate all logged in users orders on site load to disable repeated API calls
  }
  componentDidMount (){
    API.session().then((user) => {
      this.setState(
        user.data
      )
    })
  }
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        login: (userData, cb) =>{
          API.login(userData)
          .then((loggedInUser)=> {
            this.setState(loggedInUser.data)
            if (cb) {
              cb(this.state.username)
            }
          })
        },
        logout: () => {
          API.logout().then((user)=>{
            this.setState(
              user.data
            )
          })
        },
        signUp: (userData, cb) => {
          API.signup(userData)
          .then((signedUpUser)=>{
            this.setState(signedUpUser.data)
            if(cb){
              cb(this.state.username)
            }
          })
        },
        update: (userData, cb)=>{
          userData._id = this.state._id;
          API.update(userData)
            .then((updatedUser) => {
              this.setState(updatedUser.data)
              if (cb) {
                cb(this.state.username)
              }
            })
        },
        session: () => {
          API.session().then((user) => {
            this.setState(
              user.data
            )
          })
        },
        forgotPassword: (email, cb) => {
          API.forgotPassword(email).then((res)=>{
            if (cb) {
              cb(this.state.username)
            }
          })
        },
        resetPassword:(resetData, cb) => {
          API.resetPassword(resetData).then((res) => {
            if (cb) {
              cb()
            }
          })
        }
      }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}