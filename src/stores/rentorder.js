import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRentOrderStore = defineStore('rentorder', () => {

  const selectedClassroom = ref(null);

  return { selectedClassroom }
})
