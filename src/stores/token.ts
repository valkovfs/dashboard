import {defineStore} from "pinia";
export const useTokenStore = defineStore('token', {
    state: () => {
        return {
            token: 'string'
        }
    },
    actions: {
        saveToken(token: any) {
            this.token = token
        }
    },
})