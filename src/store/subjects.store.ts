import { defineStore } from "pinia"
import SubjectsData from '../data/subjects.json' // Import estático

export const useSubjectsStore = defineStore("subjects", {
    state: () => ({
        subjects: [] as Array<{name:string, url:string}>
    }),
    actions: {
        async loadSubjects() {
            await this.fetchSubjects()
            return
        },
        async fetchSubjects() {
            try {
               const subjects = SubjectsData.map(subject=>{
                return {name:subject.name, url:subject.url}
               })

               this.subjects = subjects

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