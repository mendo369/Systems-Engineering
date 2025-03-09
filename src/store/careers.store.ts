import { defineStore } from "pinia"
import type { Career, Subject } from "../models/subject.model"
import CareersData from '../data/careers.json' // Import estático

export const useCareersStore = defineStore("careers", {
    state: () => ({
        careers: [] as Array<{name:string, url:string}>
    }),
    actions: {
        // Opción 1: Usar el import estático (más simple)
        async loadCareers() {
            await this.fetchCareers()
            return
        },

        // Opción 2: Usar fetch (si necesitas cargar datos dinámicamente)
        async fetchCareers() {
            try {
               const careers = CareersData.map(career=>{
                return {name:career.name, url:career.url}
               })

               this.careers = careers

               return 
            } catch (error) {
                console.error('Error al cargar careers:', error)
                this.careers = []
                return []
            }
        }
    },
    getters: {
        getAllCareers: (state) => state.careers
    }
})