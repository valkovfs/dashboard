<script setup>
import { ref } from 'vue'
import { useProjectsStore } from '@/stores/projects';
import { onMounted } from 'vue';

const projects = useProjectsStore();
const show = ref(false)
onMounted(() => {
  projects.fetchProjects()
})

const handleFetch = () => {
  projects.fetchProjects()
  show.value = !show.value
}
</script>


<template>
  <main>
    <button @click="handleFetch"></button>
    <TransitionGroup name="list" v-if="show">
    <div v-for="project of projects.projects" v-bind:key="project.id">


        <h1>{{ project.name }}</h1>
        <p>{{ project.description }}</p>


    </div>
    </TransitionGroup>


  </main>
</template>

<style scoped>
.v-enter-from {
  opacity: 0
}
.v-enter-to {
  opacity: 1
}
.v-enter-active {
  transition: opacity 2s ease
}


</style>
