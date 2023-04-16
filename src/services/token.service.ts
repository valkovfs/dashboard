import { reactive } from "vue";
import { useCookies } from "vue3-cookies";
import { useUserStore } from "@/stores/user";
const user = useUserStore()
const {cookies} = useCookies()

export const isAuth = () => user.isSignedIn
