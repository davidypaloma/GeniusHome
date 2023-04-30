import http from "./base-api";

const list = () => http.get('/shopping-list-items');



export default {
  list
}