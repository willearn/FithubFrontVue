<template>
    <div class="list-group d-flex justify-content-center my-5">
        <RouterLink to="#" class="list-group-item list-group-item-action">全部課程</RouterLink>
        <RouterLink v-for="index in 6" to="#" class="list-group-item list-group-item-action">{{ index }}課程</RouterLink>
    </div>
</template>
    
<script setup>
import { RouterLink } from 'vue-router';


</script>
    
<style scoped></style>