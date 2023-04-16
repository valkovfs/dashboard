<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import SignButton from '@/components/button/SignButton.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const user = useUserStore();


const handleRedirect = async () => {
    await user.handleSignInGitHub()
    await router.push({ path: '/' })

}
</script>


<template>
    <main class="login-container">
        <sign-button v-if="!user.isSignedIn" @click="handleRedirect()" :button-text="'Signin with GitHub'"/>
        <sign-button v-else @click="user.handleSignOut()" :button-text="'Signout'"/>

    </main>

</template>

<style scoped>
.login-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
}
</style>
