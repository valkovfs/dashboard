<template>
    <main class="login-container">
        <sign-button v-if="!isAuth()" @click="user.handleSignInGitHub()" :button-text="'Signin with GitHub'"/>
        <sign-button v-else @click="user.handleSignOut()" :button-text="'Signout'"/>

    </main>

</template>

<script setup>
    import {useUserStore} from "@/stores/user";
    import SignButton from '@/components/button/SignButton.vue';
    const user = useUserStore()
    import { isAuth } from '@/services/token.service';
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
