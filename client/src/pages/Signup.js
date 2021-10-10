import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";


import Auth from "../utils/auth";
import context from "react-bootstrap/esm/AccordionContext";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);
  if (error) {
    console.log(JSON.stringify(error));
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

return (
  <main>
    <Card
      style={{ 
      background: "#293242",
      width: "100%",
      height: "100%"
      }}>
    
      <Card.Img variant="top" src="../../signIn.jpg" 
        class="card" style={{ 
        float: "left",
        display: "inline",
        padding: "45px 125px 10px 15px",
        }}/>

     <Card.Body>
      <Card.Title
      style={{
          color: "whitesmoke",
          fontSize: "65px",
          padding: "45px 25px 50px 920px",
        }}>
        Sign Up</Card.Title>
      
      <Card.Text
        style={{
          padding: "5px 110px 25px 25px",
          fontSize: "25px",
          color: "whitesmoke",
          textAlign: "center"
        }}>
        Very Good Dogs Club<br></br> 
        We are so excited to have you join our journey 
      </Card.Text>
      </Card.Body>
          {data ? (
            <p>
              Success! You may now head{" "}
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
      <form onSubmit={handleFormSubmit}>

    <input
    style={{
      fontSize: "15px",
      textAlign: "center",
      height: "45px",
      width: "200px",
      margin: "75px 15px 15px 145px",
    }}
      className="form-input"
      placeholder="The Name You Respond To"
      name="username"
      type="text"
      value={formState.name}
      onChange={handleChange}
    ></input>

    <input
    style={{
      fontSize: "15px",
      height: "45px",
      width: "200px",
      textAlign: "center",
      margin: "45px 15px 15px 145px",
    }}
      className="form-input"
      placeholder="Your Paw-Mail"
      name="email"
      type="email"
      value={formState.email}
      onChange={handleChange}
      />

    <input
    style={{
      fontSize: "15px",
      height: "45px",
      width: "200px",
      textAlign: "center",
      margin: "45px 15px 400px 145px",
    }}
      className="form-input"
      placeholder="Paw Print"
      name="password"
      type="password"
      value={formState.password}
      onChange={handleChange}
      />
    
      <button
        className="btn btn-block btn-primary"
        style={{ cursor: "pointer" }}
        type="submit"
      >
        Submit
      </button>
      </form>
      )}

     </Card>
   </main>

  );
};

export default Signup;


