import React from 'react';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import Nav from './Nav.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import changeVideo from '../actions/currentVideo.js';
import changeVideoList from '../actions/videoList.js';
import exampleVideoData from '../data/exampleVideoData.js';
import store from '../store/store.js';
import { connect } from 'react-redux';
import handleVideoSearch from '../actions/search.js';

class App extends React.Component {

  componentDidMount() {
    this.props.getYouTubeVideos('react tutorials');
  }

  handleVideoListEntryTitleClick(video) {
   console.log(video);
   console.log(this.props.changeVideo);
  this.props.changeVideo(video);
  }

   //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.

  render() {
    console.log("store ", this.props.changeVideo);
    if (this.props.isLoading) {
      return <div>IS LOADING!!! EIWABÜBSCH NOCHEMA</div>
    } else {
      return (
        <div>
          <Nav handleSearchInputChange={this.props.getYouTubeVideos} />
          <div className="row">
            <div className="col-md-7">
              <VideoPlayer video={this.props.currentVideo} />
            </div>
            <div className="col-md-5">
              <VideoList
                handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)}
                videos={this.props.videoList}
              />
            </div>
          </div>
        </div>
      );
    }
  }
}


const mapStateToProps = state => {
  return {
    currentVideo: state.currentVideo,
    videoList: state.videoList,
    isLoading: state.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getYouTubeVideos: (query) => dispatch(handleVideoSearch(query)),
    changeVideo: (video) => dispatch(changeVideo(video))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

