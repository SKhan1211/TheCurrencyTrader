import gql from "graphql-tag";

export default {
  FETCH_USERS: gql`
    {
      users {
        id
        username
      }
    }
  `,
}
 
