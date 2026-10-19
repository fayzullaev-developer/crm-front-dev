import axios from "axios";

axios.interceptors.request.use(config => {
    if (localStorage.getItem("token") !== null) {
        config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
    } else {
        config.headers.Authorization = '';
    }

    config.baseURL = import.meta.env.VITE_API_DOMEN + '/api/';

    if (config.method.toLowerCase() === "patch") {
        config.headers["Content-Type"] = "application/merge-patch+json";
    } else {
        config.headers["Content-Type"] = "application/ld+json";
    }

    return config;
}, error => {
    return Promise.reject(error)
});

axios.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem("token")
        }
        return Promise.reject(error);
    }
);

export {axios as client}