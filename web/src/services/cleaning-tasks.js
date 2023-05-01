import http from './base-api';

const list = () => http.get('/assigned-tasks')

export default {
  list,
}