import axios from "axios";
import { API_TOKEN } from "constants/index";

const API = axios.create({
  baseURL: "http://localhost:8080/api/u/",
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
    "Content-Type": "application/json",
  },
});

Object.defineProperty(API.defaults.headers.common, "Authorization", {
  value: `Bearer ${API_TOKEN}`,
  writable: false,
  configurable: false,
});

API.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized access - redirecting to login.");
    }
    console.error("Response Interceptor Error:", error);
    return Promise.reject(error);
  }
);

export default API;
