import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            {/* <Link className="link" to="/posts?cat=Best park to torment squirrels"> */}
            Best park to torment squirrels
            {/* </Link> */}
          </li>
          <li className="sidebarListItem">
            {/* <Link className="link" to="/posts?cat=Why are humans annoying sometimes...?"> */}
            Why are humans annoying sometimes...?
            {/* </Link> */}
          </li>
          <li className="sidebarListItem">
            {/* <Link className="link" to="/posts?cat=Garbage is good change my mind"> */}
            Garbage is good change my mind
            {/* </Link> */}
          </li>
          <li className="sidebarListItem">
            {/* <Link className="link" to="/posts?cat=How to deal with your loud roommate"> */}
            How to deal with your loud roommate
            {/* </Link> */}
          </li>
          <li className="sidebarListItem">
            {/* <Link className="link" to="/posts?cat=Bones that changed your life"> */}
            Bones that changed your life
            {/* </Link> */}
          </li>
          <li className="sidebarListItem">
            {/* <Link className="link" to="/posts?cat=How to get out of your crate"> */}
            How to get out of your crate
            {/* </Link> */}
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
