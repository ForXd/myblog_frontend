// async actions
// sign in
export const LOGIN_START = Symbol('user login')
export const LOGIN_END = Symbol('user login')
export const LOGIN_FAIL = Symbol('login fail')

// sign up
export const SIGNUP_START = Symbol('sign up')
export const SIGNUP_END = Symbol('sign up')
export const SIGNUP_FAIL = Symbol('sign up fail')

// fetch posts list
export const REQUEST_POSTS = Symbol('request post list')
export const REQUEST_END = Symbol('request post success')
export const REQUEST_FAIL = Symbol('request fail')

// fetch comment list
export const REQUEST_COMMENTS = Symbol('request comment list')
export const REQUEST_COMMENTS_SUCCESS = Symbol('request comment success')
export const REQUEST_COMMENTS_FAIL = Symbol('request comment fail')




// synchronize actions
export const LOGOUT = Symbol('current user logout')
export const APPROVE_POST = Symbol('approve of a post')
export const DISAPPROVE_POST = Symbol('disapprove of a post')
export const EDIT_POST = Symbol('edit a post')
export const EDIT_COMMENT = Symbol('edit a comment')
export const CHANGE_POST_ORDER = Symbol('change the order of post list')
export const CHANGE_COMMENT_ORDER = Symbol('change the order of comment list')

export const SET_PASSWORD = Symbol('current user change password')
export const SET_AVATAR = Symbol('current user change avatar')
export const REDIRECT = Symbol('redirect to')

export const APP_MOUNT = Symbol('mount app')
