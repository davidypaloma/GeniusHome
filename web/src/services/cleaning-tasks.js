import http from './base-api';

const list = () => http.get('/assigned-tasks')

// TODO: const create const delete y const update


export default {
  list,
}