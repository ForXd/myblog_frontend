import requests from "./agent";

const limit = (count, p) => `limit=${count}offset=${p ? p * count : 0}`;

const postAgent = {
    all: page =>
        requests.get(`/posts?${limit(10, page)}`),
    byAuthor: author_id =>
        requests.get(`/posts/user_post?user_id=${author_id}`),
    byCategory: category =>
        requests.get(`/posts/category?category=${category}`),
    detail: post_id =>
        requests.get(`/posts/${post_id}`),
    create: post =>
        requests.post(`/posts`, post),
    remove: post_id =>
        requests.delete(`/posts/${post_id}`),
    update: (post, post_id) =>
        requests.put(`/posts/${post_id}`, post)
};

export default { postAgent };
