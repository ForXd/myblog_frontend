import reducer from './reducers';
import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from "redux-logger";
import { localStorageMiddleware } from './middlewares/middleware';
import thunkMiddleware from 'redux-thunk';


export const history = createHistory();
const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
    if (process.env.NODE_ENV === 'production') {
        return applyMiddleware(myRouterMiddleware, localStorageMiddleware, thunkMiddleware);
    } else {
        return applyMiddleware(myRouterMiddleware, localStorageMiddleware, thunkMiddleware, createLogger());
    }
}
export const store = createStore(
    reducer, composeWithDevTools(getMiddleware())
);