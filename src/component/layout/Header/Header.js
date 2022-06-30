import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar">
      <li className="logoName">
        <a href="#" className="logoName">
          <span className="icon"></span>
          <p>SCRUMVERSE</p>
        </a>
      </li>
      <div className="menu">
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">COURSES</a>
        <a href="#">BLOGS</a>
      </div>
      <div className="loginSignup">
        <a href="#" id="login">
          LOGIN
        </a>
        <a href="#" className="borders">
          SIGN UP
        </a>
      </div>
    </div>
  );
};

export default Header;
