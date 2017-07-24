import React, { Component } from 'react';
import Foundation from 'react-foundation';
import { Link,IndexLink } from 'react-router';


//Load Foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu" data-dropdown-menu>
              <li className="menu-text">React-Redux</li>
              <li ><IndexLink to="/" activeClassName="active-link">Youtube API</IndexLink></li>
              <li ><Link to="/timer" activeClassName="active-link">Timer</Link></li>
              <li ><Link to="/countdown" activeClassName="active-link">Countdown</Link></li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li className="menu-text-right">A React-Redux Portfolio</li>
            </ul>
          </div>
          </div>
      </div>
    );
  }
}
