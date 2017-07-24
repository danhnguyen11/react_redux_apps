import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const VideoList =({videos,onVideoClick}) => {
    
    return (
        <div>
            {videos.map((video)=>{
                return (
                <li onClick={() => onVideoClick(video)} className="list-group-item" key={video.etag} video={video}>
            <div className="video-list media">
                <div> 
                <img className="media-object" src={video.snippet.thumbnails.default.url} />
                <p className="text-right">{video.snippet.title}</p>
                </div>
             </div>
             </li>
            )
            })}
        </div>
        
    );

    }


export default VideoList;