import {defineStore} from "pinia";
import {reactive} from "vue";
import {client} from "@/plugins/axios.js";

export const useFetchClients = defineStore(
    'fetchClients', () => {
        const state = reactive({
            clients: [],
            count: 0,
        })
        function clientsGet() {
            return new Promise((resolve, reject) => {
                client.get('clients')
                    .then((res) => {
                        console.log('Mijozlar olindi');
                        state.clients = res.data.member;
                        state.count = res.data.totalItems;
                        resolve();
                    })
                    .catch(() => {
                        console.log('Mijozlarni olishda xatolik');
                        reject();
                    })
            })
        }

        return {clientsGet, state}
    })