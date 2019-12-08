import {REQUEST_END, REQUEST_FAIL, REQUEST_POSTS} from "../actions/actionTypes";

export default (state={
    is_waiting: false,
    page: 1,
    count: 0,
    items: []
}, action) => {
    switch (action.type) {
        case REQUEST_POSTS:
            return {
                ...state,
                is_waiting: true,
                page: action.payload.page
            }
        case REQUEST_FAIL:
            return {
                ...state,
                is_waiting: false
            }
        case REQUEST_END:
            return {
                ...state,
                is_waiting: false,
                page: action.payload.page,
                items: action.payload.data
            }
        default:
            return state;
    }
}