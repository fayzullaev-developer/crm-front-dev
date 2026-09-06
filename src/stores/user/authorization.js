import {defineStore} from "pinia";
import axios from "axios";

export const useAuthorization = defineStore(
    'authorization', () => {
        function userAuth(data) {
            return new Promise((resolve, reject) => {
                axios.post('http://localhost:8505/api/users/auth', data)
                    .then((res) => {
                        console.log('token olindi');
                        localStorage.setItem("token", res.data.token);
                        resolve();
                    })
                    .catch(() => {
                        console.log('token olishda xatolik');
                        reject();
                    })
            })
        }
        return { userAuth }
    }
)