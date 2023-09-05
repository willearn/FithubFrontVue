<template>
    <div class="list-group d-flex justify-content-center my-5">
        <RouterLink to="#" class="list-group-item list-group-item-action">全部課程</RouterLink>
        <RouterLink v-for="{ categoryId, categoryName, index } in  allCourseCategories " to="#"
            class="list-group-item list-group-item-action">{{ categoryName }}</RouterLink>
    </div>
</template>
    
<script setup>
import { RouterLink } from 'vue-router';
const props = defineProps({
    urlPattern: String,
    allCourseCategories: Object,
})


</script>
    
<style scoped></style>