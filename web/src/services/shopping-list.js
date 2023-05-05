import http from "./base-api";

const list = () => http.get('/shopping-list-items');

const addProduct = (product) => http.post('/shopping-list-items', product)

const deleteProduct = (id) => http.delete(`/shopping-list-items/${id}`)

const updateProduct = (product, id) => http.patch(`/shopping-list-items/${id}`, product)



export default {
  list,
  addProduct,
  deleteProduct,
  updateProduct
}