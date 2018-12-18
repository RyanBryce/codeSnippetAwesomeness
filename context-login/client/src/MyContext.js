import React, { Component } from 'react';

export const MyContext = React.createContext();

export class MyProvider extends Component {
  state = {
    id: "",
    username: "ryan",
    email: "ryan@ryan.com",
    loggedIn: true
  }
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        login: () =>{

        },
        logout: ()=>{

        }
      }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}