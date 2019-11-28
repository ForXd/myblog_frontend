import { requests } from './agent';

const authAgent = {
    login: (username, password) =>
        requests.post('/users/login/', {username, password}),
    register: (username, password) =>
        requests.post('/users/register/', {username, password}),
    logout: user_id =>
        requests.get(`/users/logout/`)
};

export default authAgent;