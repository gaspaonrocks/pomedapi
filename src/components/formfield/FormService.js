let axios = require("axios");

let DB_URL = "http://localhost:12345";

module.exports = {
  users: {
    get: () => {},
    post: user => {
      return axios.post(`${DB_URL}/users`, user);
    }
  },
  posts: {
    get: () => {},
    post: post => {
      return axios
        .post(`${DB_URL}/posts`, post)
    }
  }
};
