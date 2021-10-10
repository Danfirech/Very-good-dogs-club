import React from "react";
import "./SideBar.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Best park to torment squirrels</li>
          <li className="sidebarListItem">Garbage is good change my mind</li>
          <li className="sidebarListItem">Bones that changed your life</li>
          <li className="sidebarListItem">How to get out of your crate</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Top Dogs</span>
        <div className="sidebarSocial">
          <li className="sidebarListItem">Leo</li>
          <li className="sidebarListItem">Olive</li>
          <li className="sidebarListItem">Lucy</li>
          <li className="sidebarListItem">Wile</li>
          <li className="sidebarListItem">Rusty</li>
          <li className="sidebarListItem">Pumpkin</li>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="sidebarItem">
        <span className="sidebarTitle">Top Dogs</span>
        <div className="sidebarSocial">
          <li className="sidebarListItem">Leo</li>
          <li className="sidebarListItem">Olive</li>
          <li className="sidebarListItem">Lucy</li>
          <li className="sidebarListItem">Wile</li>
          <li className="sidebarListItem">Rusty</li>
          <li className="sidebarListItem">Pumpkin</li>
        </div>
      </div>
    </div>
  );
}
