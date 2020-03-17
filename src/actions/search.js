import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import isLoading from './isLoading.js';


var handleVideoSearch = (query) => {
  return (dispatch) => {
    var options = {
      key: YOUTUBE_API_KEY,
      query: query
    };

    dispatch(isLoading(true));
    searchYouTube(options, (videos) => {
      dispatch(changeVideo(videos[0]));
      dispatch(changeVideoList(videos));
      console.log(videos);
    });
    dispatch(isLoading(false));
  }
};

//TODO:  Write an asynchronous action to handle a video search;

export default handleVideoSearch;
