import React, {Fragment}from 'react';
import {Link} from 'react-router-dom';
import { MyContext } from "../MyContext";

const Nav = () => {
  return (
    <MyContext.Consumer>  
      {(context)=> {
        return(
          <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
            {
              !context.state.loggedIn ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
              ):(
                <li className="nav-item">
                  <Link className="nav-link" to="/" onClick={context.logout}>Logout</Link>
                </li>
              )
            }
            {
              !context.state.loggedIn ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Signup</Link>
                </li>
              ):(
                <Fragment></Fragment>
              )
            }
            {
              !context.state.loggedIn ? (
                <Fragment></Fragment>
              ) : (
                
                <li className="nav-item">
                  <Link className="nav-link" to={`/profile/${context.state.username}`}>Profile</Link>
                </li>
              )
            }
            <li className="nav-item">
              <Link 
              className="nav-link" 
              to="/products"
              >Products</Link>
            </li>
    
            <li className="nav-link">
            <Link to="/cart">
              <i className="fa-fw fa fa-shopping-cart"></i><span className="badge badge-success">{context.state.cart.length}</span>
              {/* used only for  screen readers*/}
              <span className="sr-only">Your Cart</span>
            </Link>

            </li>
          </ul>
        )
      }}
    </MyContext.Consumer>
  );
};

export default Nav;