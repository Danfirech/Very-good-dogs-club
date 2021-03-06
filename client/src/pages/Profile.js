import React, { useEffect } from "react";

import { Redirect, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Card, Button, ButtonGroup } from "react-bootstrap";

import PostForm from "../components/PostForm/PostForm";

import { QUERY_USER, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

const Profile = () => {
  const { loading, data } = useQuery(QUERY_USER, {
    variables: { username: Auth.getProfile().data.username },
  });
  const history = useHistory();
  useEffect(() => {
    if (!Auth.loggedIn()) {
      history.push("/");
    }
  }, []);

  const user = data?.me || data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        background: "white",
      }}
    >
      <div container>
        {/* <Card style={{ width: "100", height: "50px" }}> */}
        <Card.Body
          style={{
            background: "white",
            color: "white",
            fontFamily: "Josefin Sans, sans-serif",
          }}
        >
          <br></br>
          <br></br>
          <br></br>

          <Card.Title
            style={{
              background: "white",
              color: "#293242",
              fontFamily: "Josefin Sans, sans-serif",
              fontSize: "30px",
            }}
          >
            Viewing {Auth.getProfile().data.username}'s profile
          </Card.Title>
        </Card.Body>
        {/* </Card> */}
      </div>
      <br></br>
      <br></br>

      <div container>
        <Card style={{ width: "100", height: "300px" }}>
          <Card.Body
            style={{
              background: "white",
              color: "#916848",
              fontFamily: "Josefin Sans, sans-serif",
            }}
          >
            <Card.Title
              style={{
                background: "white",
                color: "#916848",
                fontFamily: "Josefin Sans, sans-serif",
                textDecoration: "underline",
              }}
            ></Card.Title>
            <PostForm />
          </Card.Body>
        </Card>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Card style={{ width: "100", height: "300px" }}>
        <Card.Body
          style={{
            background: "white",
            color: "#916848",
            fontFamily: "Josefin Sans, sans-serif",
            fontSize: "20px",
          }}
        >
          <Card.Title
            style={{
              background: "white",
              color: "#916848",
              fontFamily: "Josefin Sans, sans-serif",
            }}
          >
            Previous Posts
          </Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle> */}
          <Card.Text
            style={{
              background: "white",
              color: "#916848",
              fontFamily: "Josefin Sans, sans-serif",
            }}
          >
            Want to make a change or delete a post? Do it below:
          </Card.Text>

          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <button type="button" class="btn btn-outline-dark">
            Delete
          </button>
        </Card.Body>
      </Card>
      <br></br>
      <br></br>
    </div>
  );
};

export default Profile;
