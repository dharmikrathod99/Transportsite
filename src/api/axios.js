// src/api/axios.js
import axios from "axios";

const instance = axios.create({
    baseURL: "https://transportsitebackend.onrender.com/api",
});

// Add token automatically
instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = token; // Bearer token already added in backend
    }
    return config;
});

export default instance;
