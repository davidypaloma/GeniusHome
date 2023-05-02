import http from "./base-api";

const create = (home) => http.post('/homes', home);

// TODO?: const homeProfile, const invite, const delete, const update

export default {
  create,
}