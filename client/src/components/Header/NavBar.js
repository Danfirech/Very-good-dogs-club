//DANS NAVBAR
import React from "react";
// import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Auth from "../../utils/auth";
import "./NavBar.css";

const navbar = () => {
  // const logout = (event) => {
  //   event.preventDefault();
  //   Auth.logout();
  // };

  return (
    <div className="top">
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link class="nav-link1 topListItem" to="/">
              Home
            </Link>
            <Link class="nav-link1 topListItem" to="/me">
              Profile
            </Link>
            <Link class="nav-link1 topListItem" to="/signup">
              Sign Up
            </Link>
            <Link class="nav-link1 topListItem" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
