<template>
    <div class="hello">
        <div id="GitHubSignIn" v-if="!user.isSignedIn">
            <h3>GitHub Signin</h3>
            <button @click="user.handleSignInGitHub()">login</button>
        </div>
        <div id="GitHubSignOut" v-if="user.isSignedIn">
            <h3>GitHub Signout</h3>
            <button @click="user.handleSignOut()">Logout</button>
        </div>
    </div>

</template>

<script setup>
    import {useUserStore} from "@/stores/user";
    const user = useUserStore()
</script>