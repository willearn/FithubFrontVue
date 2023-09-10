import { ref } from "vue";
import { defineStore } from "pinia";

export const useCourseStore = defineStore("course", () => {
  // const courseCategories = ref({})
  const courseCartStore = ref(null);

  return { courseCartStore };
});
