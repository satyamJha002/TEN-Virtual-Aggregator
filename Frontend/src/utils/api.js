import axios from "axios";

const api = axios.create({
  baseURL: "https://ten-virtual-aggregator-dcxj.onrender.com/api",
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("adminToken");
      window.location.href = "/admin/login";
    }
    return Promise.reject(error);
  }
);

export default api;
