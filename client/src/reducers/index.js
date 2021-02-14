import {combineReducers} from "redux";
import words from './words.js';
import auth from './auth.js'

export default combineReducers({words, auth});