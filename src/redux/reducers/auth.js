import {
    LOGIN_START,
    LOGIN_END,
    LOGOUT,
    SIGNUP_START,
    SIGNUP_END,
    APP_MOUNT
} from '../actions/actionTypes';
import jwt from 'jwt-decode';

export default (state = {
    current_user: null,
    is_waiting: false
}, action) => {
    switch (action.type) {
        case APP_MOUNT:
            let user = null;
            if (window.localStorage.getItem('jwt')) {
                user = jwt(window.localStorage.getItem('jwt')).user.username;
            }
            return {
                ...state,
                current_user: user
            }
        case LOGIN_START:
            return {
                ...state,
                is_waiting: true,
            };
        case LOGIN_END:
            return {
                ...state,
                is_waiting: false,
                current_user: action.payload.username
            };
        case SIGNUP_START:
            return {
                ...state,
                is_waiting: true,
            };
        case SIGNUP_END:
            return {
                ...state,
                is_waiting: false,
                current_user: action.payload.username
            };
        case LOGOUT:
            return {
                ...state,
                current_user: null
            };
        default:
            return state;
    }
};
