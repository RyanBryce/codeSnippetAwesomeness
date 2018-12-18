import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {MyProvider} from './MyContext.js';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Profile from './pages/Profile';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <MyProvider>
          <div>
            <Link to="/signin">signin</Link> {"    "}
            <Link to="/signup">signup</Link> {"    "}
            <Link to="/profile">profile</Link> {"    "}
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
