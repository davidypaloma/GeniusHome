import http from './base-api';

// const create = (user) => http.post('/signup', {name: user.name, el resto})
const create = (user) => http.post('/signup', user)
.then((res) => res.data);

const login = (user) => http.post('/login', user)
  .then((res) => res.data);

const logout = () => http.post('/logout')
  .then((res) => res.data);

export default {
  create,
  login,
  logout
}