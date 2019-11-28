import requests from './agent';

const commentAgent = {
    create: comment =>
        requests.post('/comments', comment),
    remove: comment_id =>
        requests.delete(`/comments/${comment_id}`),
    byPost: post_id =>
        requests.get(`/comments/post_comment?post_id=${[post_id]}`),
    byComment: comment_id =>
        requests.get(`/comments/reply_comment?comment_id=${comment_id}`),
    byUser: user_id =>
        requests.get(`/comments/user_comment?user_id=${user_id}`),
    detail: comment_id =>
        requests.get(`/comments/${comment_id}`)
}

export default { commentAgent };