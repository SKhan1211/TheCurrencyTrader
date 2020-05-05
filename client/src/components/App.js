import React from 'react';
import '../App.css';
import { Route, Switch } from 'react-router-dom';
import Splash from './splash/splash';

import TestIndex from './tests/TestIndex';

const App = () => (
  <div>
    <h1>App.js Test</h1>
    <Switch>
      <Route exact path="/" component={Splash} />
      <Route exact path="/dashboard" component={TestIndex} />
    </Switch>
  </div>
);

export default App;
