import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';


// TODO:  Create your redux store, apply thunk as a middleware, and export it!
// console.log(exampleVideoData);
export default createStore(
  rootReducer,
  { videoList: exampleVideoData,
    currentVideo: null}, // state is always an object,
  applyMiddleware(thunk)
);
