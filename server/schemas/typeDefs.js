const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    post: [Post]!
  }

  type Post {
    _id: ID
    postText: String
    postAuthor: String
    createdAt: String
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentText: String!
    commentAuthor: String!
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User!
  }

  type Query {
    users: [User]!
    user(username: String!): User
    posts: [Post]
    post(postId: ID!): Post
    me(username: String!): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(postText: String!, postAuthor: String!): Post
    addComment(commentid: ID!, commentText: String!): Post
    removePost(postId: ID!): Post
    removeComment(commentId: ID!, commentId: ID!): Post
  }
`;

module.exports = typeDefs;
