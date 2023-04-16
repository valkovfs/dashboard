import { defineStore } from "pinia";
import { useCookies } from "vue3-cookies";
import firebaseConfig from '../firebaseConfig';
import { getAuth, signInWithPopup, signOut, GithubAuthProvider } from "firebase/auth";
import { useRouter } from "vue-router";

const providerGithub = new GithubAuthProvider();
const auth = getAuth();
const router = useRouter()

export const useUserStore = defineStore('user',{
    state: () => {
        return {
            user: [],
            isSignedIn: false,
        }
    },
    getters: {
        getUser(state) {
            return state.user
        }
    },
    actions: {
        async handleSignInGitHub() {
           await signInWithPopup(auth, providerGithub)
                .then((result: any) => {
                    const { cookies } = useCookies()
                    this.user = result.user;
                    cookies.set('auth.token', result.user.uid, '30m')
                    this.isSignedIn = true;
                    window.location.reload()
                }).catch((error) => {
                console.log(error);
            });
        },
        handleSignOut() {
            signOut(auth).then(() => {
                this.user = []
                const { cookies } = useCookies()
                cookies.remove('auth.token')
                this.isSignedIn = false;
                window.location.reload()
            }).catch((error) => {
                console.log(error);
            });
        }
    },
})
