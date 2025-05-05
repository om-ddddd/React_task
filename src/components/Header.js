import React from "react";
import { BrowserRouter, Link } from "react-router-dom"; // BrowserRouter should be in App.js or index.js

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <ul className="navbar-list">
         
          <li>
            <Link to="/" className="navbar-link">
              <div className="header-contents">Home</div>
            </Link>
          </li>
          <li>
            <Link to="/schedule" className="navbar-link">
              <div className="header-contents">Schedule</div>
            </Link>
          </li>
          <li>
            <Link to="/login" className="navbar-link">
              <div className="header-contents">Login</div>
            </Link>
          </li>
          <li>
            <Link to="/profile" className="navbar-link">
              <div className="header-contents">Profile</div>
            </Link>
          </li>
          <li>
            <Link to="/teams" className="navbar-link">
              <div className="header-contents">Teams</div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
