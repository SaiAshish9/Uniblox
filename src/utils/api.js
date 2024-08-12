import axios from "axios";

const API = axios.create({
  baseURL: "https://raw.githubusercontent.com/SaiAshish9/Uniblox_Assets/main/",
  headers: {
    "Content-Type": "application/json",
  },
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
