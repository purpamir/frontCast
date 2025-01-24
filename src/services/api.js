import axios from "axios";
const BASE_URL = "http://localhost:5000/api/";

const api = axios.create({
  baseURL: BASE_URL,
});
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
api.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const res = error.response;
    const originalRequest = error.config;
    if (res.status === 401 && !originalRequest._retry) {
      localStorage.removeItem("token");
    } else {
    }
    return Promise.reject(error);
  }
);
export default api;
