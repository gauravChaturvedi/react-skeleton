import React, { Component } from 'react';
import { Router, Route, IndexRoute, Redirect } from 'react-router';
import { hashHistory } from 'react-router'

// Import Component
import Main from './Main.js';
import Skeleton from './components/skeleton/Skeleton.js';
import Skeleton2 from './components/skeleton2/Skeleton2.js';

export default class Routes extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Redirect from="/" to="comp1" />
        <Route path="/comp1" component={Skeleton} />
        <Route path="/comp2" component={Skeleton2} />
      </Router>
    );
  }
}
