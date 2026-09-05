import axios from "axios";

axios.interceptors.request.use(config => {
    if (localStorage.getItem("token") !== null) {
        config.headers.Authorization = 'Bearer ' +  localStorage.getItem('token');
    } else {
        config.headers.Authorization = '';
    }

    config.baseURL = 'http://localhost:8505/api/';

    return config;
})

export {axios as client}