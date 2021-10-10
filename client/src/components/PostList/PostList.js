import React from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { REMOVE_POST } from "../../utils/mutations";
import Auth from "../../utils/auth";

const PostList = ({ posts, title, showTitle = true, showUsername = true }) => {
  const [removePost, { data, error }] = useMutation(REMOVE_POST);
  if (!posts.length) {
    return (
      <h3 style={{ color: "white", fontFamily: "Patrick Hand, cursive" }}>
        No Post Yet
      </h3>
    );
  }
  const username = Auth.loggedIn() ? Auth.getProfile().data.username : null;
  console.log(data);
  const handleDelete = async (id) => {
    console.log(id);
    const { loading, data } = await removePost({
      variables: { postId: id },
    });
  };

  return (
    <div>
      {error && <p>error</p>}
      {showTitle && <h3>{title}</h3>}
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {username !== post.postAuthor ? (
                <Link
                  className="text-light"
                  to={`/profiles/${post.postAuthor}`}
                >
                  {post.postAuthor} <br />
                  <span style={{ fontSize: "1rem" }}>
                    barked about this {post.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: "1rem" }}>
                    You barked this on {post.createdAt}
                  </span>
                  <button onClick={() => handleDelete(post._id)}>
                    Delete Post
                  </button>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{post.postText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/posts/${post._id}`}
            >
              Join the discussion on this post.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default PostList;
