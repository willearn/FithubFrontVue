<template>
  <div class="card h-100">
    <img
      :src="`https://picsum.photos/300/200?random=${cardAmount}`"
      class="card-img-top mt-3"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-text">課程名稱: {{ course.courseName }}</h5>
      <div class="card-text mb-1">
        課程分類:{{ course.courseCategories.categoryName }}
      </div>
      <div class="card-text mb-1">NT$ 100 起</div>
      <div class="d-flex justify-content-end">
        <RouterLink
          :to="`/course/detail/${course.courseId}`"
          class="btn btn btn-primary"
        >
          <i type="button" class="bi bi-lightning-fill"></i>&nbsp;前往選課
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
/*
  imports
*/
import { RouterLink } from "vue-router";

/*
  props
*/
const props = defineProps({
  cardAmount: Number,
  course: Object,
});
// console.log(props.cardAmount);
</script>

<style scoped>
.btn-primary {
  --bs-btn-color: #fff;
  --bs-btn-bg: #ffc408;
  --bs-btn-border-color: #fff;
  --bs-btn-hover-bg: #e83015;
  --bs-btn-hover-border-color: #c34e2e;
  --bs-btn-active-bg: #c34e2e;
}

.card {
  --bs-card-spacer-y: 1rem;
  --bs-card-spacer-x: 1rem;
  --bs-card-title-spacer-y: 0.5rem;
  --bs-card-border-width: 1px;
  --bs-card-border-color: var(--bs-border-color-translucent);
  --bs-card-border-radius: 0.375rem;
  --bs-card-box-shadow: ;
  --bs-card-inner-border-radius: calc(0.375rem - 1px);
  --bs-card-cap-padding-y: 0.5rem;
  --bs-card-cap-padding-x: 1rem;
  --bs-card-cap-bg: rgba(0, 0, 0, 0.03);
  --bs-card-cap-color: ;
  --bs-card-height: ;
  --bs-card-color: ;
  --bs-card-bg: #fff;
  --bs-card-img-overlay-padding: 1rem;
  --bs-card-group-margin: 0.75rem;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: var(--bs-card-height);
  word-wrap: break-word;
  background-color: var(--bs-card-bg);
  background-clip: border-box;
  border: var(--bs-card-border-width) solid var(--bs-card-border-color);
  border-radius: var(--bs-card-border-radius);
}
</style>
