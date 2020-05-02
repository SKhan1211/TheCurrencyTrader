import React from 'react';
import logo from './logo.svg';
import './App.css';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const FETCH_USERS = gql`
  {
    users {
      id
      username
    }
  }
`;

const App = () => (
  <Query query={FETCH_USERS}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;
      
      return (
        <ul>
          {data.users.map(user => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      );
    }}
  </Query>
);

export default App;
