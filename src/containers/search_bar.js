import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVideo } from '../actions/index';


class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state= {term: ''};

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e){
    this.setState({term: e.target.value });
    this.props.fetchVideo(this.state.term);
    
  }
 
  render() {
       return (
  <form>
    <label>Video Search
        <input 
        type="text" 
        placeholder="Search"
        value={this.state.term}
        onChange={this.onInputChange}
        />
    </label>
  </form>
       )
   }
}

export default connect(null, {fetchVideo})(SearchBar);