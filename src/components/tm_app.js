import React, { Component } from 'react';
import Foundation from 'react-foundation';

import TimerDisplay from '../containers/tm_display'
import TimerControl from '../containers/tm_control'


//Load Foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

export default class TMApp extends Component {
  render() {
    return (
      <div className="container">
       <TimerDisplay />
       <TimerControl />
      </div>
    )

  }
}
