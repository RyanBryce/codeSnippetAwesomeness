import React, { Component } from 'react';

export const MyContext = React.createContext();

export class MyProvider extends Component {
  state = {
    id: "",
    username: "",
    email: "",
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
        signUp: (userData) => {
          this.setState({
            email: userData.email,
            loggedIn: true,
            username: userData.username
          })
        }
      }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}