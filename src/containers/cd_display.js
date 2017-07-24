import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Clock from '../components/clock';
import { sendControl } from '../actions/index';



class CountDownDisplay extends Component {
    constructor(props){
    super(props);

    this.state= {
        status: 'stopped',
        count: 0
    };
  }

componentWillReceiveProps(nextProps) {
this.setState({
    status: nextProps.status,
    count: this.state.count != 0 ? this.state.count : nextProps.count,
}, () => {
    switch (this.state.status){
    case "started":
        this.startTime();
        break;
    case "stopped":
        this.setState({count: 0});
    case "paused":
        clearInterval(this.timer);
        this.timer = undefined;
        break;
}
});
}



startTime() {
    this.timer = undefined;
    this.timer = setInterval(() =>{
        var newCount = this.state.count - 1;
        this.setState({
            count: newCount > 0 ? newCount : 0
        })
        if(newCount <= 0){
            clearInterval(this.timer);
            this.timer = undefined;
            this.setState({status: "stopped"},() => {
               this.props.sendControl(this.state.status);
            });
        } 
    },1000)
}


    
render(){
    
    return (

<div>
    <Clock count={this.state.count} />
</div>

    

);

}

}
function mapStateToProps(state) {
    //console.log(state);
    return {
        count: state.countdown.seconds,
        status: state.sendcontrol.status
    };
}


export default connect(mapStateToProps,{ sendControl })(CountDownDisplay);