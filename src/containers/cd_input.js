import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchClockDisplay } from '../actions/index';
import { sendControl } from '../actions/index';

class CountDownInput extends Component {
  constructor(props){
    super(props);

    this.state= {
      seconds: "",
      status: "stopped"
    };

    this.onNumberSubmit = this.onNumberSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event){
      this.setState({seconds: event.target.value});
    }
  
    
  
  onNumberSubmit(e){
    e.preventDefault();
    
    if(!(this.state.seconds == "")){
    this.setState({status: "started"}, () => {
      this.props.fetchClockDisplay(this.state.seconds);
      this.props.sendControl(this.state.status);
      this.setState({seconds: ""});
    });
    }
  }

  onStatusChange(status){
    //status.preventDefault();

    //console.log(status);
   
    this.setState({status: status}, () => {
      this.props.sendControl(this.state.status);
    })
  } 
  
  componentWillReceiveProps(nextProps){
      nextProps.status == "stopped" ? this.setState({status: nextProps.status}) : ""
  }

  render() {
    if(this.state.status == 'stopped'){
       return (
         
  
  <form className="countdown-form" onSubmit={this.onNumberSubmit}>
    <div className="form-group">
        <input 
        type="number" 
        placeholder="Please enter time in seconds"
        className="form-control"
        onChange={this.onInputChange}
        value={this.state.seconds}
        />
        <input type="submit" value="Submit" className="btn btn-success form-control"/>
    </div>
  </form>
)
} else if (this.state.status == 'started'){
    return (
  <div className="control-form">
    <button className="btn btn-info" onClick={() => this.onStatusChange('paused')}>Pause</button>
    <button className="btn btn-danger" onClick={() => this.onStatusChange('stopped')}>Clear</button>
  </div>
)
} else return (
  <div className="control-form">
    <button className="btn btn-success" onClick={() => this.onStatusChange('started')}>Start</button>
    <button className="btn btn-danger" onClick={() => this.onStatusChange('stopped')}>Clear</button>
  </div>
)

   }
}

function mapStateToProps(state) {
    //console.log(state);
    return {
        //count: state.countdown.seconds,
        status: state.sendcontrol.status
    };
}

export default connect(mapStateToProps, {fetchClockDisplay, sendControl})(CountDownInput);