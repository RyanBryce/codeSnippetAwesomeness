import React, {Fragment}from 'react';
import {Link} from 'react-router-dom';
import { MyContext } from "../MyContext";

const Nav = () => {
  return (
    <MyContext.Consumer>  
      {(context)=> {
        return(
          <ul className="nav justify-content-center">
            {
              !context.state.loggedIn ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/">Login</Link>
                </li>
              ):(
                <li className="nav-item">
                  <Link className="nav-link" to="/">Logout</Link>
                </li>
              )
            }
            {
              !context.state.loggedIn ? (
                 <li className="nav-item">
                  <Link className="nav-link" to="/signup">signup</Link>
                </li>
              ):(
                <Fragment></Fragment>
              )
            }
            <li className="nav-item">
              <Link className="nav-link" to={`/profile/${context.state.username}`}>profile</Link>
            </li>
          </ul>
        )
      }}
    </MyContext.Consumer>
  );
};

export default Nav;