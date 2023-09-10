import { ref } from "vue";
import { defineStore } from "pinia";

export const useCourseStore = defineStore("course", () => {
  // const courseCategories = ref({})
  const courseCart = ref(null);

  return { courseCart };
});
