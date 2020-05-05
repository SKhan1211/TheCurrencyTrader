import gql from "graphql-tag";

export default {
  LOGIN_USER: gql`
    mutation: loginUser($username: String!, $password: String!) {
      login(username: $username, password: $password) {
        token
        loggedIn
      }
    }
  `
};