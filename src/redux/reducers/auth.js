import {
    LOGIN_START,
    LOGIN_END,
    LOGOUT,
    SIGNUP_START,
    SIGNUP_END
} from '../actions/actionTypes';

export default (state = {
    current_user: null,
    is_waiting: false
}, action) => {
    switch (action.type) {
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
