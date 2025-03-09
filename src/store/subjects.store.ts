import { defineStore } from "pinia"
import type {  Subject } from "../models/subject.model"
import CareersData from '../data/careers.json' // Import estático

export const useSubjectsStore = defineStore("subjects", {
    state: () => ({
        subjects: [] as Array<{name:string, url:string}>
    }),
    actions: {
        // Opción 1: Usar el import estático (más simple)
        async loadSubjects() {
            await this.fetchSubjects()
            return
        },

        // Opción 2: Usar fetch (si necesitas cargar datos dinámicamente)
        async fetchSubjects() {
            try {
               const careers = CareersData.map(career=>{
                return {name:career.name, url:career.url}
               })

               this.subjects = careers

               return 
            } catch (error) {
                console.error('Error al cargar las asignaturas:', error)
                this.subjects = []
                return []
            }
        }
    },
    getters: {
        getAllSubjects: (state) => state.subjects
    }
})