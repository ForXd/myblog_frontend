import {
    LOGIN_END,
    SIGNUP_END,
    LOGOUT,
} from "../redux/actions/actionTypes";
import { setToken } from '../agents/agent';

const localStorageMiddleware = store => next => action => {
    if (action.type === LOGIN_END || action.type === SIGNUP_END) {
        if (!action.error) {
            window.localStorage.setItem('jwt', action.payload.token);
            setToken(action.payload.token);
        }
    } else if (action.type === LOGOUT) {
        window.localStorage.setItem('jwt', '');
        setToken(null);
    }
    next(action);
};

export { localStorageMiddleware };