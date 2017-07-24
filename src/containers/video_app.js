import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoDetail from '../components/video_detail';
import { bindActionCreators } from 'redux';
import VideoList from '../components/video_list'



class VideoApp extends Component {
   constructor(props){
    super(props);

    this.state = {selectedVideo: null};

  }
   onVideoClick(selectedVideo){
       this.setState({selectedVideo: selectedVideo});
       console.log(this.state);
   }

    componentWillReceiveProps(nextProps) {
    this.setState({selectedVideo: nextProps.selectedVideo});
  }

   render (){
    if(!this.props.videos && !this.props.selectedVideo){
        return(
            <div>
                <p>Search is empty or invalid!!!</p>
            </div>
        )
    }
    return (
        
        <div className="row">
            <div className="col-md-8">
                <VideoDetail selectedVideo={this.state.selectedVideo}/>
            </div>
            <div className="col-md-4">
                <ul>
                <VideoList 
                videos={this.props.videos}
                onVideoClick={(selectedVideo) => this.onVideoClick(selectedVideo)}
                />
                </ul>
            </div>
        </div>
    );

    }
}

function mapStateToProps(state) {
    if(state.youtube.videos.length > 0 ){
    var item = state.youtube.videos;
    return {videos : item, selectedVideo: item[0] };
    } else return {videos: "",selectedVideo: ""}
}


export default connect(mapStateToProps,null)(VideoApp);

