import useAuthStore from "../stores/store";
import axios from "axios";

const apiBaseUrl = "";

const api = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    config.headers.Authorization = "Bearer " + localStorage.getItem("token");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.request.status == 401) {
      useAuthStore.getState().logout();
    }
  }
);

export default api;
