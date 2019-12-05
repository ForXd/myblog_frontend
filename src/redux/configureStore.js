import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';

import monitorReducerEnhancer from "./enhancers/monitorReducer";
import { localStorageMiddleware } from './middlewares/middleware';
import rootReducer from './reducers';

export default function configureStore(preloadedState) {
    const middlewares = []
}