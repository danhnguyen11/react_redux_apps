import React, { Component } from 'react';

import Navbar from '../components/navbar'


export default class Main extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}
