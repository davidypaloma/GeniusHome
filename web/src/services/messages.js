import http from './base-api';

const list = () => http.get('/messages');

const create = (message) => http.post('/messages', message)

// TODO: const create const delete y const update

export default {
  list,
  create
}