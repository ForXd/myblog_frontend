import {REQUEST_END, REQUEST_FAIL, REQUEST_POSTS} from "./actionTypes";
import postAgent from "../../agents/postAgent";

function requestPosts(page) {
    return {
        type: REQUEST_POSTS,
        payload: {
            page: page,
        }
    }
}

function receivePosts(page, data) {
    return {
        type: REQUEST_END,
        payload: {
            page: page,
            data: data
        }
    }
}

function receiveFail(error, page) {
    return {
        type: REQUEST_FAIL,
        payload: {
            page: page,
            error: error
        }
    }

}

export function fetchPosts(page) {
    // return a function
    return function (dispatch) {
        dispatch(requestPosts(page))

        return postAgent.posts(page).then(
            res => {
                dispatch(receivePosts(page, res.results))
            }
        ).catch(
            err => {
                dispatch(receiveFail(err, page))
            }
        )
    }
}