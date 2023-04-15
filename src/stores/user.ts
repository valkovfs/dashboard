import { defineStore } from "pinia";
import {useCookies} from "vue3-cookies";
import firebaseConfig from '../firebaseConfig';
import { getAuth, signInWithPopup, signOut, GithubAuthProvider } from "firebase/auth";

const providerGithub = new GithubAuthProvider();
const auth = getAuth();

export const useUserStore = defineStore('user',{
    state: () => {
        return {
            user: [],
            isSignedIn: null,
        }
    },
    getters: {
        getUser(state) {
            return state.user
        }
    },
    actions: {
        handleSignInGitHub() {
            signInWithPopup(auth, providerGithub)
                .then((result: any) => {
                    const { cookies } = useCookies()
                    this.user = result.user;
                    cookies.set('auth.token', result.user.uid, '30m')
                    // @ts-ignore
                    this.isSignedIn = true;
                }).catch((error) => {
                console.log(error);
            });
        },
        handleSignOut() {
            signOut(auth).then(() => {
                // @ts-ignore
                this.user = ''
                const { cookies } = useCookies()
                cookies.remove('auth.token')
                // @ts-ignore
                this.isSignedIn = false;

            }).catch((error) => {
                console.log(error);
            });
        }
    },
})
