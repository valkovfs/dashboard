<template>
  <nav class="menu_nav">
    <ul class="menu_ul">
      <li class="menu_nav_link">
        <router-link to="/"
                     class="menu_button"
        >
          <p class="menu_button_text"> Home</p>
        </router-link>
        <router-link to="projects"
                     class="menu_button"
        >
          <p class="menu_button_text"> Projects</p>
        </router-link>
        <router-link to="contacts"
                     class="menu_button"
        >
          <p class="menu_button_text"> Contacts</p>
        </router-link>
        <router-link to="contacts"
                     class="menu_button"
        >
          <p class="menu_button_text"> Chenibud'</p>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.menu_button {
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #838383;
  text-decoration: none;
  border-radius: 5px;
  margin: 50px;
  transition: 1s ease-in;
}

.menu_button:hover {
  transition: 1s ease-in;
  background-color: white;
}

.menu_nav_link {
  text-decoration: none;
}

.menu_ul {
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0;
}

.menu_button_text {
  text-decoration: none;
}

.menu_nav {
  width: 20vh;
  background-color: #404040;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
</style>
