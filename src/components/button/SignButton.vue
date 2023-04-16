<template>
    <div id="GitHubSignIn">
        <button class="auth-button" @click="handleButton">
            <img src="@/assets/github.svg" class="auth-button_logo" alt="Github logo" />
            <p class="auth-button_text">{{ buttonText }}</p>
        </button>
    </div>
</template>
<script setup lang="ts">
 defineProps(['handleButton', 'buttonText'])
</script>

<style scoped>
    .auth-button {
        width: 160px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        outline: none;
        background-color: #404040;
        border: none;
        cursor: pointer;
        transition: 0.4s ease-in-out;
    }
    .auth-button * {
        margin: 5px;
    }
    .auth-button:hover {
        background-color: #838383;
    }
    .auth-button_logo {
        width: 30px;
        height: 300px;
    }
    .auth-button_text {
        font-size: 18px;
        color: #838383;
        font-family: Anybody, sans-serif;
    }
    .auth-button_text:hover {
        color: #404040
    }
</style>
