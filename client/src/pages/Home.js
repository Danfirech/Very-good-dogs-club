import React from "react";
import { useQuery } from "@apollo/client";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// import PostList from "../components/PostList/PostList";
// import PostForm from "../components/PostForm/PostForm";

// import { QUERY_POSTS } from "../utils/queries";

const Home = () => {
  // const { loading, data } = useQuery(QUERY_POSTS);
  // const posts = data?.posts || [];
  // {loading ? (
  //           <div>Loading...</div>
  //         ) : (
  //           <PostList posts={posts} title="DOG..." />
  //         )}

  return (
    <div style={{ background: "#a53860" }}>
      <Link to="/home"></Link>

      <br></br>
      <br></br>
      <br></br>
      <h1
        style={{
          textAlign: "center",
          color: "white",
          fontFamily: "Patrick Hand, cursive",
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
          <Card.Title
            style={{ color: "white", fontFamily: "Patrick Hand, cursive" }}
          >
            Thanks for stopping by!
          </Card.Title>
          <Card.Text
            style={{ color: "white", fontFamily: "Patrick Hand, cursive" }}
          >
            This is a safe place for your dog to write their thoughts, concerns,
            happy moments and much, much, more! If you have an account please,
            login to write another post and if you are new here, we encourage
            you to sign up! POWER TO THE PAW!
          </Card.Text>
        </Card.Body>

        <Card.Body>
          <Button
            href="/Login"
            style={{ background: "#a53860", color: "white" }}
          >
            Login
          </Button>{" "}
          <Button
            href="/Signup"
            style={{ background: "#a53860", color: "white" }}
          >
            Sign up
          </Button>
        </Card.Body>
      </Card>
      <br></br>
      <br></br>
    </div>
  );
};

export default Home;
