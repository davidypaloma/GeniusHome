import http from './base-api';

// TODO: const create = (user) => http.post('/signup', {name: user.name, el resto})
const create = (user) => http.post('/signup', user)

const login = (user) => http.post('/login', user)

const logout = () => http.post('/logout')

const profile = () => http.get('/profile')

// TODO: const delete y const update

export default {
  create,
  login,
  logout,
  profile
}