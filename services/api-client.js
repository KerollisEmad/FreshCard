import axios from "axios";
import { API_CONFIG } from "../confic/confic";

export const apiClient = axios.create({
  baseURL: API_CONFIG.apiBaseUrl,
  timeout: 10000,
});

apiClient.interceptors.request.use((config) => {
  const token =
    sessionStorage.getItem("token") || localStorage.getItem("token");

  if (token) {
    config.headers.token = token;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => {
    return Promise.resolve({
      success: true,
      data: response.data,
    });
  },
  (error) => {
    return Promise.reject({
      success: false,
      error: error,
      message: error.response?.data?.message || "Unknown error",
    });
  },
);
