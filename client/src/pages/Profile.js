import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Card, Button, ButtonGroup } from "react-bootstrap";

import PostForm from "../components/PostForm/PostForm";
import PostList from "../components/PostList/PostList";

import { QUERY_USER, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return <h4>Please log in with your pawdentials!</h4>;
  }

  return (
    <div
      style={{
        background: "#a53860",
      }}
    >
      <br></br>
      <div container>
        <Card style={{ width: "100", height: "200px" }}>
          <Card.Body
            style={{
              background: "#a53860",
              color: "white",
              fontFamily: "Patrick Hand, cursive",
            }}
          >
            <Card.Title
              style={{
                background: "#a53860",
                color: "white",
                fontFamily: "Patrick Hand, cursive",
                textDecoration: "underline",
              }}
            >
              Viewing {userParam ? `${user.username}'s` : "your"} profile.
            </Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle> */}

            <Card.Text
              style={{
                background: "#a53860",
                color: "white",
                fontFamily: "Patrick Hand, cursive",
              }}
            >
              Viewing {userParam ? `${user.username}'s` : "your"} profile.
            </Card.Text>
            <input
              style={{
                background: "white",
                color: "black",
                fontFamily: "Patrick Hand, cursive",
                minHeight: "100px",
                width: "1650px",
              }}
            ></input>
          </Card.Body>
        </Card>
      </div>

      <br></br>
      <br></br>
      <div container>
        <Card style={{ width: "100", height: "300px" }}>
          <Card.Body
            style={{
              background: "#a53860",
              color: "white",
              fontFamily: "Patrick Hand, cursive",
            }}
          >
            <Card.Title
              style={{
                background: "#a53860",
                color: "white",
                fontFamily: "Patrick Hand, cursive",
                textDecoration: "underline",
              }}
            >
              Get your paws on a new post
            </Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle> */}
            <Card.Text
              style={{
                background: "#a53860",
                color: "white",
                fontFamily: "Patrick Hand, cursive",
              }}
            >
              Please, share your thoughts
            </Card.Text>
            <input
              style={{
                background: "white",
                color: "black",
                fontFamily: "Patrick Hand, cursive",
                minHeight: "200px",
                width: "1650px",
              }}
            ></input>
            <br></br>
            <Button style={{ background: "#E5989B" }}>Share</Button>{" "}
          </Card.Body>
        </Card>
      </div>
      <br></br>
      <br></br>

      <Card style={{ width: "100", height: "300px" }}>
        <Card.Body
          style={{
            background: "#a53860",
            color: "white",
            fontFamily: "Patrick Hand, cursive",
          }}
        >
          <Card.Title
            style={{
              background: "#a53860",
              color: "white",
              fontFamily: "Patrick Hand, cursive",
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
              background: "#a53860",
              color: "white",
              fontFamily: "Patrick Hand, cursive",
            }}
          >
            Want to make a change or delete a post? Do it below:
          </Card.Text>
          <input
            style={{
              background: "white",
              color: "black",
              fontFamily: "Patrick Hand, cursive",
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
