import { defineStore } from "pinia";
import axios from "axios";

 export const useProjectsStore = defineStore('projects', {
   state: () => {
     return {
       projects: []
     }
   },
   getters: {
     getProjects(state) {
       return state.projects
     }
   },
   actions: {
     async fetchProjects() {
       try {
         const data = await axios.get("http://localhost:3000/api/projects");
          this.projects = data.data
       } catch (error) {
         alert(error)
         console.log(error)
       }
     },
   },
 })

