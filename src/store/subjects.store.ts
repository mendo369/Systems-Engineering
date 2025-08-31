import { defineStore } from "pinia"
import SubjectsData from '../data/subjects.json' // Import estático

// Estructura de un ejemplo
interface Example {
  id: number
  title: string
  text: string
  code: string
  language: string
  showSolutionButton: boolean
}

// Estructura del syllabus
interface SyllabusItem {
  name: string
  url: string
  examples: Example[]
}

// Estructura de una materia
interface Subject {
  name: string
  url: string
  syllabus: SyllabusItem[]
}

export const useSubjectsStore = defineStore("subjects", {
    state: () => ({
        subjects: [] as Subject[]
    }),
    actions: {
        async loadSubjects() {
            await this.fetchSubjects()
            return
        },
        async fetchSubjects() {
            try {
               const subjects = SubjectsData.map(subject => {
                return {
                    name: subject.name,
                    url: subject.url,
                    syllabus: subject.syllabus.map((item: any) => ({
                        name: item.name,
                        url: item.url,
                        examples: item.examples || []
                    }))
                }
               })

               this.subjects = subjects

               return 
            } catch (error) {
                console.error('Error al cargar las asignaturas:', error)
                this.subjects = []
                return []
            }
        },
        // Método para obtener ejemplos por materia y tema
        getExamples(subjectUrl: string, syllabusUrl: string): Example[] {
            const subject = this.subjects.find(s => s.url === subjectUrl)
            if (!subject) {
                console.warn(`Materia no encontrada: ${subjectUrl}`)
                return []
            }

            const syllabusItem = subject.syllabus.find(s => s.url === syllabusUrl)
            if (!syllabusItem) {
                console.warn(`Tema no encontrado: ${syllabusUrl} en materia: ${subjectUrl}`)
                return []
            }

            return syllabusItem.examples
        },
        // Método para obtener todos los ejemplos de una materia
        getExamplesBySubject(subjectUrl: string): Example[] {
            const subject = this.subjects.find(s => s.url === subjectUrl)
            if (!subject) {
                console.warn(`Materia no encontrada: ${subjectUrl}`)
                return []
            }

            return subject.syllabus.flatMap(syllabusItem => syllabusItem.examples)
        }
    },
    getters: {
        getAllSubjects: (state) => state.subjects,
        // Getter para obtener una materia específica
        getSubjectByUrl: (state) => (url: string) => {
            return state.subjects.find(subject => subject.url === url)
        }
    }
})