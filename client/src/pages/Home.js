import React from "react";
import { useQuery } from "@apollo/client";
import { Card } from "react-bootstrap";

import PostList from "../components/PostList/PostList";
import PostForm from "../components/PostForm/PostForm";

import { QUERY_POSTS } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  return (
    <main>
      <div style={{ background: "#a53860" }}>
        <br></br>
        <br></br>
        <br></br>
        <h1
          style={{
            textAlign: "center",
            color: "white",
            fontFamily: "Patrick Hand",
          }}
        >
          {" "}
          BARK-COME to the very good dogs club!
        </h1>
        <br></br>
        <Card
          style={{
            height: "500px",
            width: "600px",
            textAlign: "center",
            margin: "auto",
            background: "#9A879d",
          }}
        >
          <Card.Img
            style={{ width: "500px" }}
            variant="top"
            src="../../../doggo.jpg"
          />

          <Card.Body>
            <Card.Title style={{ color: "white", fontFamily: "Patrick Hand" }}>
              Thanks for stopping by!
            </Card.Title>
            <Card.Text style={{ color: "white", fontFamily: "Patrick Hand" }}>
              This is a safe place for your dog to write their thoughts,
              concerns, happy moments and much, much, more! If you have an
              account please, login to write another post and if you are new
              here, we encourage you to sign up! POWER TO THE PAW!
            </Card.Text>
          </Card.Body>
        </Card>

        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        >
          <PostForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList posts={posts} title="Post..." />
          )}
        </div>
      </div>
      <div
        style={{
          background: "#a53860",
          height: "100vh",
        }}
      >
        <br></br>
        <div
          container
          style={{ display: "inline", justifyContent: "spaceBetween" }}
        >
          <Card
            style={{
              width: "100",
              height: "300px",
              float: "right",
              left: "15px",
            }}
          >
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
                Top Dawgs of the Month:
              </Card.Title>
              {/* <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle> */}

              <input
                style={{
                  background: "white",
                  color: "black",
                  fontFamily: "Patrick Hand, cursive",
                  minHeight: "200px",
                  width: "400px",
                }}
              ></input>
              <br></br>
            </Card.Body>
          </Card>
          <br></br>
        </div>
        <br></br>{" "}
        <Card style={{ width: "900px", height: "400px", border: "none" }}>
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
              Top blog posts
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
              Here are our Top Posts of the Month:
            </Card.Text>

            <input
              style={{
                background: "white",
                color: "black",
                fontFamily: "Patrick Hand, cursive",
                minHeight: "600px",
                width: "800px",
              }}
            ></input>
          </Card.Body>
        </Card>
      </div>
      );
    </main>
  );
};

export default Home;
