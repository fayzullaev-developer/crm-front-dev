import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";

export const useCreateUser = defineStore(
    'createUser', () => {
        function createUser(data) {
            return new Promise((resolve, reject) => {
                client.post('users/create', data)
                    .then((res) => {
                        console.log('Foydalanuvchi yaratildi')
                        resolve(res);
                    })
                    .catch((err) => {
                        console.log('Foydalanuvchi yaratishda xatolik')
                        reject(err);
                    })
            })
        }

        return { createUser }
    })