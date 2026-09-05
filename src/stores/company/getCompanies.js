import {defineStore} from "pinia";
import {reactive} from "vue";
import {client} from "@/plugins/axios.js";

export const useFetchCompanies = defineStore(
    'fetchCompanies', () => {
        const state = reactive({
            companies: [],
            count: 0,
        })
        function companiesGet() {
            return new Promise((resolve, reject) => {
                client.get('companies')
                    .then((res) => {
                        console.log('kompaniyalar olindi')
                        state.companies = res.data.member;
                        state.count = res.data.totalItems;
                        resolve();
                    })
                    .catch(() => {
                        console.log('kompaniyalarni olishda xatolik')
                        reject();
                    })
            })
        }

        return {companiesGet, state}
    })