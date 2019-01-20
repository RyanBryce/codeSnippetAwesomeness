import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link className="nav-link" to="/">login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/signup">signup</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/profile">profile</Link>
      </li>
    </ul>
  );
};

export default Nav;