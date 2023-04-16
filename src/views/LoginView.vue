<template>
    <main class="login-container">
        <sign-button v-if="!user.isSignedIn" @click="handleRedirect()" :button-text="'Signin with GitHub'"/>
        <sign-button v-else @click="user.handleSignOut()" :button-text="'Signout'"/>

    </main>

</template>

<script setup>
import { useUserStore } from '@/stores/user';
import SignButton from '@/components/button/SignButton.vue';

const user = useUserStore()
import { isAuth } from '@/services/token.service';
import { useRouter } from 'vue-router';

const router = useRouter()
const handleRedirect = async () => {
  await user.handleSignInGitHub()
  await router.push({ path: '/' })

}
</script>

<style scoped>
.login-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
}
</style>
