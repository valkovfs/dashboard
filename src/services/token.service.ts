import { useCookies } from "vue3-cookies";
const {cookies} = useCookies()

export const isAuth = () => cookies.get('auth.token')
