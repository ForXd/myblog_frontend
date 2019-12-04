import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import Cookie from 'js-cookie';

const superagent = superagentPromise(_superagent, Promise);

const API_ROOT = '/api';
const encode = encodeURIComponent;
const responseBody = res => res.body;
let token = null;
const tokenPlugin = req => {
    if (token) {
        req.set('authorization', `Token ${token}`);
    }
};


const csrfPlugin = req => {
    req.set('X-CSRFToken', Cookie.get('csrftoken'))
}

export const requests = {
    del: url =>
        superagent.del(`${API_ROOT}${url}`).use(csrfPlugin).then(responseBody),
    get: url =>
        superagent.get(`${API_ROOT}${url}`).use(csrfPlugin).then(responseBody),
    put: (url, body) =>
        superagent.put(`${API_ROOT}${url}`, body).use(csrfPlugin).then(responseBody),
    post: (url, body) =>
        superagent.post(`${API_ROOT}${url}`, body).use(csrfPlugin).then(responseBody)
};


export const setToken = _token => {token = _token};
