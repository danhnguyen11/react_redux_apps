import React, { Component } from 'react';
import { connect } from 'react-redux';

const VideoDetail =(props) => {
   
    const videoId = props.selectedVideo.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    
    return (

<div className="video-detail">
        <div className="embed-responsive embed-responsive-16by9">
           <iframe className="embed-responsive-item" src={url}></iframe> 
        </div>
        <div className="details">
            <div><h4>{props.selectedVideo.snippet.title}</h4></div>
            <div>{props.selectedVideo.snippet.description}</div>
        </div>
</div>

    );
}



export default VideoDetail;