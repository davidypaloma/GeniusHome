import http from './base-api';

const list = () => http.get('/assigned-tasks')

const addTask = (task) => http.post('/assigned-tasks', task)

const deleteTask = (id) => http.delete(`/assigned-tasks/${id}`)

const updateTask = (task, id) => http.patch(`/assigned-tasks/${id}`, task)


// TODO: const create const delete y const update


export default {
  list,
  addTask,
  deleteTask,
  updateTask
}