import React from "react";
import { useQuery } from "@apollo/client";
import { Card } from "react-bootstrap";

import PostList from "../components/PostList/PostList";
import SideBar from "../components/SideBar/SideBar";

import { QUERY_POSTS } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  return (
    <main>
      <div style={{ background: "white" }}>
        <br></br>
        <br></br>
        <br></br>
        <h1
          style={{
            textAlign: "center",
            color: "#293242",
            fontFamily: "Josefin Sans",
          }}
        >
          {" "}
          BARK-COME to The Very Good Dogs Club!
        </h1>
        <br></br>
        <Card style={{ textAlign: "center" }}>
          <Card.Img
            style={{ width: "600x" }}
            variant="top"
            src="../../../doggo.jpg"
          />

          <Card.Body
            style={{
              background: "#293242",
            }}
          >
            <Card.Title
              style={{
                background: "#293242",
                fontSize: "24px",
                color: "#916848",
                fontFamily: "Josefin Sans, cursive",
              }}
            >
              Thanks for stopping by! Please read before going any further
            </Card.Title>
            <Card.Text
              style={{
                fontSize: "20px",
                color: "#916848",
                fontFamily: "Josefin Sans, cursive",
              }}
            >
              This is a safe place for your dog to write their thoughts,
              concerns, happy moments and much, much, more! If you have an
              account please, login to write another post and if you are new
              here, we encourage you to sign up! POWER TO THE PAW!
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <br></br>
      <br></br>

      <div className="container">
        <div
          className="row"
          // style={{
          //   background: "white",
          //   height: "100vh",
          // }}
        >
          {/* <Card.Title
            style={{
              background: "white",
              color: "#293242",
              fontFamily: "Josefin Sans, cursive",
              fontSize: "30px",
              textDecoration: "underline",
            }}
          >
            Blog Posts
          </Card.Title> */}

          <div style={{ color: "#293242" }} className="col-12 col-md-8 mb-3">
            {loading ? <div>Loading...</div> : <PostList posts={posts} />}
          </div>
          <div
            className="col-sm-4"
            // container
            // style={{ display: "inline", justifyContent: "spaceBetween" }}
          >
            <SideBar />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
