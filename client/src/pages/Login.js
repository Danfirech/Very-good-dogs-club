import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";

import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <main>
      <Card
        style={{
          background: "#293242",
          width: "100%",
          height: "100%",
        }}
      >
        <Card.Img
          style={{
            width: "300px",
            // boxShadow: "5px 5px 5px black",
          }}
          variant="top"
          src="../../login2.jpg"
          class="card"
          style={{
            float: "right",
            padding: "42px 35px 10px 30px",
          }}
        />

        <Card.Body>
          <Card.Title
            style={{
              color: "whitesmoke",
              float: "left",
              fontSize: "65px",
              padding: "45px 45px 50px 290px",
              fontFamily: "Josefin Sans, sans-serif",
            }}
          >
            Login
          </Card.Title>
        </Card.Body>
        {data ? (
          <p>
            Success! You may now head <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <input
              style={{
                fontSize: "15px",
                height: "45px",
                width: "200px",
                textAlign: "center",
                margin: "45px 15px 15px 260px",
                fontFamily: "Josefin Sans, sans-serif",
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
                margin: "25px 15px 155px 260px",
                fontFamily: "Josefin Sans, sans-serif",
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

export default Login;
