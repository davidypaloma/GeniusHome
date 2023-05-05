import http from "./base-api";

const create = (home) => http.post('/homes', home);

const detail = () => http.get('/home-profile');

// TODO?: const invite, const delete, const update

export default {
  create,
  detail
}