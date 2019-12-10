import {REQUEST_COMMENTS, REQUEST_COMMENTS_FAIL, REQUEST_COMMENTS_SUCCESS} from "../actions/actionTypes";


export default (state={
    is_waiting: false,
    page: 1,
    items: []
}, action) => {
    switch (action.type) {
        case REQUEST_COMMENTS:
            return {
                ...state,
                is_waiting: true,
                id_list: action.payload.id_list
            }
        case REQUEST_COMMENTS_SUCCESS:
            return {
                ...state,
                is_waiting: false,
                items: action.payload.data
            }
        case REQUEST_COMMENTS_FAIL:
            return {
                ...state,
                is_waiting: false
            }
        default:
            return state
    }
}
