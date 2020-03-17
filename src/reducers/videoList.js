import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  if(action.type ==='changeVideoList') {
    return  action.payload;
}
  return state;
  //TODO: define a reducer for the videoList field of our state.
}; 

export default videoListReducer;
