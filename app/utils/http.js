const axios = require("axios");

const axiosInstance = axios.create({
  baseURL: process.env.URL_BASE_SWAPI,
  timeout: 5000,
  headers: {
    "X-Custom-Header": "foobar",
  },
});

module.exports = { _http: axiosInstance };
