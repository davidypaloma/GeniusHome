import http from './base-api';

// const create = (user) => http.post('/signup', {name: user.name, el resto})
const create = (user) => http.post('/signup', user)

const login = (user) => http.post('/login', user)

const logout = () => http.post('/logout')

export default {
  create,
  login,
  logout
}