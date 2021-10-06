import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      post {
        _id
      }
    }
  }
`;

export const QUERY_POSTS = gql`
  query getPosts {
    posts {
      _id
      postText
      username
    }
  }
`;

export const QUERY_SINGLE_POST = gql`
  query getSingleThought($Profile: ID!) {
    post(ProfileId: $ProfileId) {
      _id
      postText
     postName
      createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      posts {
        _id
        postText
        postName
        createdAt
      }
    }
  }
`;
