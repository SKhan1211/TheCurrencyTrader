import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Route } from 'react-router-dom';
import TestIndex from './tests/TestIndex';

const App = () => (
  <div>
    <h1>App.js Test</h1>
    <Route exact path="/" component={TestIndex} />
  </div>
);

export default App;
