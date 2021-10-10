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
        <Card style={{ width: "100", height: "50px" }}>
          <Card.Body
            style={{
              background: "#9da2ae",
              color: "white",
              fontFamily: "Josefin Sans, sans-serif",
            }}
          >
            <Card.Title
              style={{
                background: "white",
                color: "#293242",
                fontFamily: "Josefin Sans, sans-serif",
              }}
            >
              Viewing {Auth.getProfile().data.username}'s profile
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
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
            >
              Get your paws on a new post
            </Card.Title>
            {/* <Card.Text
              style={{
                background: "#a53860",
                color: "white",
                fontFamily: "Josefin Sans, sans-serif",
              }}
            >
              Please, share your thoughts
            </Card.Text>
            <input
              style={{
                background: "white",
                color: "black",
                fontFamily: "Josefin Sans, sans-serif",
                minHeight: "200px",
                width: "1650px",
              }}
            ></input>
            <br></br>
            <Button style={{ background: "#E5989B" }}>Share</Button>{" "} */}
            <PostForm />
          </Card.Body>
        </Card>
      </div>
      <br></br>
      <br></br>

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
          >
            Update or Delete a Post
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
          <input
            style={{
              background: "white",
              color: "black",
              fontFamily: "Josefin Sans, sans-serif",
              minHeight: "200px",
              width: "1650px",
            }}
          ></input>
          <br></br>
          <ButtonGroup aria-label="Basic example">
            <Button style={{ background: "#E5989B" }}>Update</Button>
            <Button style={{ background: "#E5989B" }}>Delete</Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
      <br></br>
      <br></br>
    </div>
  );
};

export default Profile;
