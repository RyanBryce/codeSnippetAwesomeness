import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {MyProvider} from './MyContext.js';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <MyProvider>
          <div className="container-fluid">
            <Nav></Nav>
            <div>
              <Route path="/signup" component={SignUp}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/profile" component={Profile}></Route>
            </div>
          </div>
        </MyProvider>
      </div>
      </Router>
    );
  }
}

export default App;
