<template>
    <MenuNav/>
    <RouterView/>
</template>

<script setup>
import { RouterView } from 'vue-router'
import MenuNav from '@/components/Menu/MenuNav.vue';
</script>


<style scoped>
  main {
    margin-right: auto; /* 1 */
    margin-left:  auto; /* 1 */

    max-width: 960px; /* 2 */

    padding-right: 10px; /* 3 */
    padding-left:  10px; /* 3 */
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
