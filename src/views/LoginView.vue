<template>
  <div>
    <button @click="loginWithGithub">Login with GitHub</button>
  </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth';

export default {
  methods: {
    async loginWithGithub() {
      // Access the auth store
      const authStore = useAuthStore();

      // Call the loginWithGithub action from the auth store
      await authStore.loginWithGithub();
    },
  },
};
</script>
