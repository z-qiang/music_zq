import axios from 'axios';
let service = axios.create({
    // baseURL: "http://120.48.157.121:3000/",
    baseURL: "http://127.0.0.1:3000/",
    // baseURL: "/api",
    timeout: 3000,
    // proxy:{
    //     host: '120.48.157.121',
    //     port: 3000,
    // }
});
export default service;