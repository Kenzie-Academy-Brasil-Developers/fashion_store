import axios from "axios";

const api = axios.create({
    baseURL: "https://fashion-store-api.onrender.com",
    timeout: 10 * 1000,
});

export default api;