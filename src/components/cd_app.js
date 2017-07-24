import React, { Component } from 'react';
import Foundation from 'react-foundation';

import CountDownDisplay from '../containers/cd_display'
import CountDownInput from '../containers/cd_input'


//Load Foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

export default class CDApp extends Component {
  render() {
    return (
      <div className="container">
        <CountDownDisplay />
        <CountDownInput />
      </div>
    )

  }
}
