// const Header = () => {
//   const logout = (event) => {
//     event.preventDefault();
//     Auth.logout();
//   };
//   return (
//     <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
//       <div className="container flex-row justify-space-between-lg justify-center align-center">
//         <div>
//           <Link className="text-light" to="/">
//             <h1 className="m-0">Tech Thoughts</h1>
//           </Link>
//           <p className="m-0">Get into the mind of a programmer.</p>
//         </div>
//         <div>
//           {Auth.loggedIn() ? (
//             <>
//               <Link className="btn btn-lg btn-info m-2" to="/me">
//                 {Auth.getProfile().data.username}'s profile
//               </Link>
//               <button className="btn btn-lg btn-light m-2" onClick={logout}>
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link className="btn btn-lg btn-info m-2" to="/login">
//                 Login
//               </Link>
//               <Link className="btn btn-lg btn-light m-2" to="/signup">
//                 Signup
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from "react";
// import { Card, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Single from "../../pages/Single";
import Auth from "../../utils/auth";
// import { Nav, Navbar, Container } from "react-bootstrap";
import "./NavBar.css";

const navbar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div>
      <nav className="navAllign">
        <Link class="nav-link1" to="/verygooddogsclub">
          Very Good Dog Club
        </Link>
        <Link class="nav-link1" to="/profile">
          Profile
        </Link>
        <Link class="nav-link1" to="/home">
          Home
        </Link>
        <Link className="nav-link1" to="/signup">
          Sign Up
        </Link>
        <Link className="nav-link1" to="/login">
          Login
        </Link>
        <Link className="nav-link1" to="/single">
          Single
        </Link>
      </nav>
    </div>
  );
};

export default navbar;
