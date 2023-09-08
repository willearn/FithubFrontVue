import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usecourseStore = defineStore('course', () => {
    const courseCategories = ref({})
    const courses = ref({})

    return { courseCategories, courses }
})
