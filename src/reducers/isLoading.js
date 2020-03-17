var isLoading = (state = true , action) => {
    if(action.type === 'isLoading') {
      return  action.payload
    }
    return state;
  };
  
  export default isLoading;