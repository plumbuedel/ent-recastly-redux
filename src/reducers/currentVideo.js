var currentVideoReducer = (state = {}, action) => {
  console.log(action);
  if(action.type === 'changeVideo') {
     return action.payload;
  }
  return state;
  //TODO: define a reducer for the currentVideo field of our state.
};

export default currentVideoReducer;
