import {defineStore} from "pinia";
import {reactive} from "vue";
import {client} from "@/plugins/axios.js";

export const useFetchClients = defineStore(
    'fetchClients', () => {
        const state = reactive({
            clients: [],
            count: 0,
        })
        function clientsGet(url = '') {
            return new Promise((resolve, reject) => {
                client.get('clients' + url)
                    .then((res) => {
                        console.log('Mijozlar olindi');
                        state.clients = res.data.member;
                        state.count = res.data.totalItems;
                        resolve();
                    })
                    .catch((err) => {
                        console.log('Mijozlarni olishda xatolik');
                        reject(err);
                    })
            })
        }

        return {clientsGet, state}
    })