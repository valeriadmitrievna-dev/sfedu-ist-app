import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API,
  responseType: "json",
  crossorigin: true,
});

instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("access token");
  config.headers.Authorization = `Bearer ${token}`;
  config.headers["Access-Control-Allow-Origin"] = process.env.REACT_APP_API;
  config.headers["Access-Control-Allow-Methods"] =
    "PUT,POST,GET,DELETE,OPTIONS";
  return config;
});

// axios.interceptors.response.use(
//   response => response,
//   error => Promise.reject(error)
// );

export default instance;
