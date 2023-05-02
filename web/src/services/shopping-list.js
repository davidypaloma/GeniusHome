import http from "./base-api";

const list = () => http.get('/shopping-list-items');

const addProduct = () => http.post('/shopping-list-items')

const deleteProduct = (product, id) => http.delete(`/shopping-list-items/${id}`, product)

const updateProduct = (product, id) => http.path(`/shopping-list-items/${id}`, product)



export default {
  list,
  addProduct,
  deleteProduct,
  updateProduct
}