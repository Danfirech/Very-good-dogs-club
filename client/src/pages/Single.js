import React from "react";
import { Card } from "react-bootstrap";

import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import CommentList from "../components/CommentList/CommentList";
import CommentForm from "../components/CommentForm/CommentForm";

import { QUERY_SINGLE } from "../utils/queries";

const Single = () => {
  const { postId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE, {
    variables: { postId: postId },
  });

  const post = data?.post || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
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
};

export default Single;
