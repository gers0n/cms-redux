import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import postReducers from './reducers/posts.reducer';

const reducers = combineReducers({
  posts: postReducers
});

export default createStore(
  reducers,
  applyMiddleware(thunk)
);