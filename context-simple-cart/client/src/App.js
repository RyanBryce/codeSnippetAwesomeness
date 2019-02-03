import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {MyProvider} from './MyContext.js';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Forgot from './pages/Forgot';
import ResetPassword from './pages/ResetPassword';
import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <MyProvider>
          <div className="container-fluid">
            <Nav></Nav>
            <Switch>

              <Route exact path="/" component={Login}></Route>
              
              <Route exact path="/signup" component={SignUp}></Route>
              <Route exact path="/profile/:username" component={Profile}></Route>

               <Route exact path="/forgot" component={Forgot}></Route>

              <Route exact path="/password/reset/:token" component={ResetPassword}></Route>

            </Switch>
          </div>
        </MyProvider>
      </div>
      </Router>
    );
  }
}

export default App;
