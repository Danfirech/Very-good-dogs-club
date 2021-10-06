import { gql } from '@apollo/client'; 

export const LOGIN_USER =gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_USER =gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        breed
        birthday 
      }
    }
  }
`;
export const ADD_POST =gql`
  mutation addThought($thoughtText: String!) {
    addThought(thoughtText: $thoughtText) {
      _id
      postText
      username
      createdAt
      
      }
    }
  }
`;
export const REMOVE_POST 
export const UPDATE_POST 