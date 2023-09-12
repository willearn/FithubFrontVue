import { ref } from "vue";
import { defineStore } from "pinia";

export const useCourseStore = defineStore(
  "course",
  () => {
    // 用setup的方式定義
    const courseCartStore = ref([]);
    return { courseCartStore };
  },
  {
    persist: [
      {
        paths: ["courseCartStore"],
        storage: localStorage,
      },
    ],
  }
);
