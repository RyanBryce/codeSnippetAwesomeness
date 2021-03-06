import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {MyProvider} from './MyContext.js';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Forgot from './pages/Forgot';
import ResetPassword from './pages/ResetPassword';
import Cart from './pages/Cart';
import Order from './pages/Order';
import Products from './pages/Products';
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

              <Route exact path="/" component={Home}></Route>

              <Route exact path="/login" component={Login}></Route>
              
              <Route exact path="/signup" component={SignUp}></Route>

              <Route exact path="/profile/:username" component={Profile}></Route>

              <Route exact path="/cart" component={Cart}></Route>
              <Route exact path="/products" component={Products}></Route>

              {/* routes below are not assotiatied with nav specific functionality */}
              <Route exact path="/order/:orderId" component={Order}></Route>
              
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
