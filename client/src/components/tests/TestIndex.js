import React from "react";

import { Query } from "react-apollo";
import Queries from '../../graphql/queries';
const { FETCH_USERS } = Queries;

const TestIndex = () => (
  <Query query={FETCH_USERS}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      return (
        <ul>
          {data.users.map((user) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      );
    }}
  </Query>
);

export default TestIndex;
