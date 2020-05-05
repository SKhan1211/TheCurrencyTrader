import React, { useState } from 'react';
import { Mutation } from 'react-apollo';

import LOGIN_USER from '../../graphql/mutations';

const Splash = () => {
  const [{ username, password }, setState] = useState({ username: '', password: '' });

  const update = field => {
    return e => setState(prevState => ({ ...prevState, [field]: e.target.value }));
  };

  return (
    <Mutation 
      mutation={LOGIN_USER}
      onCompleted={data => {
        const { token } = data.login;
        localStorage.setItem("auth-token", token);
        this.props.history.push("/dashboard");
      }}
    >
      {loginUser => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              loginUser({
                variables: {
                  username: this.state.username,
                  password: this.state.password
                }
              });
            }}
          >
            <input 
              value={this.state.username}
              onChange={this.update('username')}
              placeholder="Username"
            />
            <input
              value={this.state.password}
              onChange={this.update("password")}
              type="password"
              placeholder="Password"
            />
            <button type="submit">Log In</button>
          </form>
        </div>
      )}
    </Mutation>
  );
};

export default Splash;