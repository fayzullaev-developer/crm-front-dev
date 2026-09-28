import {defineStore} from "pinia";
import {client} from "@/plugins/axios.js";

export const useDeleteUser = defineStore(
    'deleteUser', () => {
        function userDelete(id) {
            return new Promise((resolve, reject) => {
                client.delete('users/' + id)
                    .then((res) => {
                        console.log('Foydalanuvchi o\'chirildi')
                        resolve(res);
                    })
                    .catch((err) => {
                        console.log('Foydalanuvchini o\'chirishda xatolik')
                        reject(err);
                    })
            })
        }

        return {userDelete}
    })