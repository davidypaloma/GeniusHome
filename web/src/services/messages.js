import http from './base-api';

const list = () => http.get('/messages');

const create = (message) => http.post('/messages', message)

const deleteMessage = (id) => http.delete(`/messages/${id}`)

// TODO:  const update

export default {
  list,
  create,
  deleteMessage
}