import React, { Component } from 'react';

const Clock =(props) => {
//console.log(props);
var element={
    second: ((props.count % 60) >= 10) ?  (props.count % 60) : ("0" + (props.count % 60)),
    minute: Math.floor((props.count < 3600 ? props.count : (props.count % 3600)) /60) >= 10 ?  Math.floor((props.count < 3600 ? props.count : (props.count % 3600)) /60) : ("0" + Math.floor((props.count < 3600 ? props.count : (props.count % 3600)) /60)),
    hour:  Math.floor(props.count/3600) >= 10 ?  Math.floor(props.count/3600) : ("0" + Math.floor(props.count/3600)),
    //seond: props.count % 60,
    //minute:  Math.floor((props.count < 3600 ? props.count : (props.count % 3600)) /60),
    //hour: Math.floor(props.count/3600)

}
//console.log(element);
return (

<div className="circle">
    <div className="clock-display">
    <span className="clock-text">{ element.hour + ":" + element.minute + ":" + element.second }</span>    
    </div>
</div>

    );
}
export default Clock;
