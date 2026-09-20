import {defineStore} from "pinia";
import axios from "axios";

const host = import.meta.env.VITE_API_DOMEN;

export const useAuthorization = defineStore(
    'authorization', () => {
        function userAuth(data) {
            return new Promise((resolve, reject) => {
                axios.post(host + '/api/users/auth', data)
                    .then((res) => {
                        console.log('token olindi');
                        localStorage.setItem("token", res.data.token);
                        resolve();
                    })
                    .catch((err) => {
                        console.log('token olishda xatolik');
                        reject(err);
                    })
            })
        }
        return { userAuth }
    }
)