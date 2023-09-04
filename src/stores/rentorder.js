import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRentOrderStore = defineStore('rentorder', () => {

  const rentOrder = ref()

  return { rentOrder }
})
