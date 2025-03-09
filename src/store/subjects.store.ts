import { defineStore } from "pinia"
import type { Subject } from "../models/subject.model"

export const subjectStore =  defineStore("subjects",{
    state:()=>({
        subjects : [] as Array<Subject>
    }),
    actions:{
        async getSubjects(){
            
        }
    },
    getters:{

    }
})