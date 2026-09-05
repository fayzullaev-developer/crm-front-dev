import {defineStore} from "pinia";
import {reactive} from "vue";
import {client} from "@/plugins/axios.js";

export const useFetchUsers = defineStore(
    'fetchUsers', () => {
        const state = reactive({
            users: [],
            count: 0,
        })
        function usersGet() {
            return new Promise((resolve, reject) => {
                client.get('users')
                    .then((res) => {
                        console.log('Foydalanuvchilar olindi')
                        state.users = res.data.member;
                        state.count = res.data.totalItems;
                        resolve();
                    })
                    .catch(() => {
                        console.log('Foydalanuvchilarni olishda xatolik');
                        reject();
                    })
            })
        }

        return {usersGet, state}
    })