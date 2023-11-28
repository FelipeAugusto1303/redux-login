import axios from "axios";
import { useSelector } from "react-redux";

export const api = axios.create({
  baseURL: "http://localhost:3001/",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
