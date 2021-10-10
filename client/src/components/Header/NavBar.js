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
            <Link className="nav-link1 topListItem" to="/">
              Home
            </Link>
            <Link className="nav-link1 topListItem" to="/me">
              Profile
            </Link>
            <Link className="nav-link1 topListItem" to="/signup">
              Sign Up
            </Link>
            <Link className="nav-link1 topListItem" to="/login">
              Login
            </Link>
            <Link className="nav-link1 topListItem" to="/">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default navbar;
