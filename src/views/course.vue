<template>
    <div class="masthead">
        <div id="carouselIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://picsum.photos/300/200?random=10" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://picsum.photos/300/200?random=11" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="https://picsum.photos/300/200?random=12" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>


    <section class="page-section" id="course">
        <div class="container">
            <!-- SideBar -->
            <div class="row">
                <div class="col-2 ">
                    <listGroup class="d-flex justify-content-center" tabindex="0" v-focus></listGroup>
                </div>

                <!-- cards for course -->
                <div class="col-10">
                    <h1 class="text-center">課程列表</h1>
                    <!-- <input type="text" v-focus> -->
                    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center">
                        <courseCard v-for="cardAmount in 6" class="col-3 mx-2 my-3" :cardAmount="cardAmount"
                            :isLike="isLike"></courseCard>
                    </div>

                    <pagination class="d-flex justify-content-center mt-3"></pagination>
                </div>
            </div>

        </div>
    </section>

    <router-link class="btn btn-secondary mt-6" to="/course/detail">課程詳細資訊</router-link>
</template>

<script setup>
/*
  imports
*/
import { ref } from 'vue';
import { Axios } from 'axios';
import courseCard from '../components/course/courseCard.vue'
import pagination from '../components/util/pagination.vue'
import listGroup from '../components/util/listGroup.vue'
import { vFocus } from '../directives/vFocus'

let isLike = ref(false)


</script>

<style scoped></style>