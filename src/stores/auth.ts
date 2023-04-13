
import { defineStore } from 'pinia';
import { initializeApp } from 'firebase/app';
import { getAuth, GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import firebaseConfig from "@/utils/firebaseConfig";

// Get Firebase Auth instance
const app = initializeApp(firebaseConfig)
const auth = getAuth(app);

// Define auth store
export const useAuthStore = defineStore('auth', {
  state: () => ({
    // Define state properties
    user: null,
  }),
  actions: {
    async loginWithGithub() {
      try {
        const provider = new GithubAuthProvider();
        await signInWithPopup(auth, provider);
        // Handle successful login
      } catch (error) {
        // Handle login error
      }
    },
    async logout() {
      try {
        await signOut(auth);
        // Handle successful logout
      } catch (error) {
        // Handle logout error
      }
    },
  },
});
