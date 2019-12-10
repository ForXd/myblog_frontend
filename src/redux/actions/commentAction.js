import {REQUEST_COMMENTS, REQUEST_COMMENTS_FAIL, REQUEST_COMMENTS_SUCCESS} from "./actionTypes";
import commentAgent from "../../agents/commentAgent";

function requestComments(id_list) {
    return {
        type: REQUEST_COMMENTS,
        payload: {
            id_list: id_list
        }
    }
}

function receiveComments(data) {
    return {
        type: REQUEST_COMMENTS_SUCCESS,
        payload: {
            data: data
        }
    }
}

function receiveFail(error, id_list) {
    return {
        type: REQUEST_COMMENTS_FAIL,
        payload: {
            error: error,
            id_list: id_list
        }
    }
}

export function fetchComments(id_list) {
    return function (dispatch) {
        dispatch(requestComments(id_list))
        return commentAgent.listComment(id_list).then(
            res => {
                dispatch(receiveComments(res.results))
            }
        ).catch(
            error => {
                dispatch(receiveFail(error, id_list))
            }
        )
    }
}