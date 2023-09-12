import { ref } from "vue";
import { defineStore } from "pinia";

export const useCourseStore = defineStore(
  "course",
  () => {
    // 用setup的方式定義
    const courseCartStore = ref([]);
    const courseWishlistStore = ref([]);
    return { courseCartStore, courseWishlistStore };
  },
  {
    persist: [
      {
        paths: ["courseCartStore"],
        storage: localStorage,
      },
      {
        paths: ["courseWishlistStore"],
        storage: sessionStorage,
      },
    ],
  }
);
