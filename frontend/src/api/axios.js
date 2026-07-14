import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9091",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const user = localStorage.getItem("user");

  if (user) {
    config.headers.user = user;
  }

  return config;
});

export default api;