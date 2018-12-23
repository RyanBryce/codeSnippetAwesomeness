import React, { Component } from 'react';
import API from './utils/API';

export const MyContext = React.createContext();

export class MyProvider extends Component {
  state = {
    id: "",
    username: "",
    email: "",
    password: "",
    loggedIn: false
  }
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        login: () =>{

        },
        logout: ()=>{

        },
        signUp: (userData, cb) => {
          API.signup(userData)
          .then((signedUpUser)=>{
            console.log(signedUpUser.data)
            this.setState({
              _id: signedUpUser.data._id,
              email: signedUpUser.data.email,
              loggedIn: signedUpUser.data.loggedIn,
              username: signedUpUser.data.username,
              profilePic: signedUpUser.data.profilePic
            })
            if(cb){
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