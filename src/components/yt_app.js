import React, { Component } from 'react';
import Foundation from 'react-foundation';

import SearchBar from '../containers/search_bar'
import VideoApp from '../containers/video_app'

//Load Foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

export default class YTApp extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
        <VideoApp />
      </div>
    )

  }
}
