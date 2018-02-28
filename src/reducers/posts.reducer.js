
const initialState = {
  Posts: []
}
export default (state=initialState, action)=> {
  switch (action.type) {
    case "POSTS_LOAD":
      return {...state, Posts: action.payload};
    default:
      return state
  }
};