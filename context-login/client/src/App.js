import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    id: "",
    username: "",
    email: "",
    loggedIn: ""
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

export default contextProvider;
class App extends Component {
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
