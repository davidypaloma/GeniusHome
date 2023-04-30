import http from './base-api';

const list = () => http.get('/assigned-tasks')

const addProduct = () => http.post('/shopping-list-items')

const deleteProduct = (product) => http.delete('/shopping-list-items', product)

const updateProduct = (product) => http.path('/shopping-list-items', product)

export default {
  list,
  addProduct,
  deleteProduct,
  updateProduct
}