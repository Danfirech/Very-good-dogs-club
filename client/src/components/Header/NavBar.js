import React from "react";
// import { Card, Container, Nav, Navbar } from "react-bootstrap";
// import { Link } from "react-router-dom";

// import Auth from "../../utils/auth";
// import React from "react";

import { Nav, Navbar, Container } from "react-bootstrap";

export const navbar = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg py-3"
        bg="#FFCDB2"
        variant="dark"
        style={{
          background: "#FFCDB2",
          color: "white",
          fontFamily: "Patrick Hand, cursive",
        }}
      >
        <Container>
          <Navbar.Brand href="#home">Very Good Dog Club</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Home">Home</Nav.Link>
              <Nav.Link href="/Profile">Profile</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/Login">Login</Nav.Link>
              <Nav.Link href="/Signup">Sign up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default navbar;

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
