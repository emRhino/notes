import { combineReducers } from "redux";
import postsReducer from './postsReducer';
import userMetaReducer from './userMetaReducer';

export default combineReducers({
    posts: postsReducer,
    user: userMetaReducer
});