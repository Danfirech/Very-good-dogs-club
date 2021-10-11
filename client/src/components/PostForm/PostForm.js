import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_POST } from "../../utils/mutations";
import { QUERY_POSTS, QUERY_ME } from "../../utils/queries";

import Auth from "../../utils/auth";

const PostForm = () => {
  const [postText, setPostText] = useState("");

  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      try {
        const { posts } = cache.readQuery({ query: QUERY_POSTS });

        cache.writeQuery({
          query: QUERY_POSTS,
          data: { post: [addPost, ...posts] },
        });
      } catch (e) {
        console.error(e);
      }

      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, posts: [...me.posts, addPost] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPost({
        variables: {
          postText,
          postAuthor: Auth.getProfile().data.username,
        },
      });

      setPostText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "postText" && value.length <= 280) {
      setPostText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h2
        style={{
          color: "#916848",
          fontFamily: "Josefin Sans, cursive",
          font: "200px",
        }}
      >
        BARK AT ME
      </h2>
      <h3>Add a post below</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? "text-danger" : ""
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <input
                name="postText"
                value={postText}
                className="form-input w-100"
                style={{
                  background: "white",
                  color: "black",
                  fontFamily: "Josefin Sans, sans-serif",
                  fontSize: "20px",
                  minHeight: "200px",
                  width: "1650px",
                }}
                onChange={handleChange}
              ></input>
            </div>
            <br></br>
            <div className="col-12 col-lg-3">
              <button className="btn btn-outline-dark" type="submit">
                Add Your Post
              </button>
            </div>
            {/* {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )} */}
          </form>
        </>
      ) : (
        <p style={{ color: "white", fontFamily: "Patrick Hand, cursive" }}>
          You need to be logged in to share!{" "}
          <Link
            to="/login"
            style={{ color: "white", fontFamily: "Patrick Hand, cursive" }}
          >
            login
          </Link>{" "}
          or{" "}
          <Link
            to="/signup"
            style={{ color: "white", fontFamily: "Patrick Hand, cursive" }}
          >
            signup.
          </Link>
        </p>
      )}
    </div>
  );
};

export default PostForm;
