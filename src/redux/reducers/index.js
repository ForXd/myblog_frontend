import auth from './auth';
import posts from './posts';
import comments from "./comments";
import { combineReducers } from 'redux';

export default combineReducers(
    { auth, posts, comments }
);