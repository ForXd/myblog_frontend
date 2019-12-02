// async actions
// sign in
export const LOGIN_START = Symbol('user login')
export const LOGIN_END = Symbol('user login')
// sign up
export const SIGNUP_START = Symbol('sign up')
export const SIGNUP_END = Symbol('sign up')


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
