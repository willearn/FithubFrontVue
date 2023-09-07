import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRentOrderStore = defineStore('rentorder', () => {

  const selectedClassroom = ref(null);
  const checkOrder = ref(false);

  return { selectedClassroom , checkOrder}
})
