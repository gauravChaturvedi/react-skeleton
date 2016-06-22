import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './Skeleton.scss';

export default class Skeleton extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="skeleton-component">
        This is the skeleton component
      </div>
    );
  }
}
