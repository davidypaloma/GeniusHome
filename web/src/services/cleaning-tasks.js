import http from './base-api';

const list = () => http.get('/assigned-tasks')

const deleteTask = (id) => http.delete(`/assigned-tasks/${id}`)


// TODO: const create const delete y const update


export default {
  list,
  deleteTask,
}