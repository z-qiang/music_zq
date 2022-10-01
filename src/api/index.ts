import axios from 'axios';
let service = axios.create({
    baseURL: "/api",
    // baseURL: "120.48.157.121:3000/",
    timeout: 3000,
});
export default service;