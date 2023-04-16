
import {useCookies} from "vue3-cookies";
export const guard = function() {
    const { cookies } = useCookies();
    return cookies.get('auth.token') === import.meta.env.VITE_DASHBOARD_ADMIN;
};