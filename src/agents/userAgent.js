import requests from './agent';

const userAgent = {
    set_password: (user_id, password) =>
        requests.post(`/users/${user_id}/set_password`, password),
    set_email: (user_id, email) =>
        requests.post(`/users/${user_id}/set_email`, email),
    set_avatar: (user_id, avatar) =>
        requests.post(`/users/${user_id}/set_avatar`, avatar)
};

export default { userAgent };