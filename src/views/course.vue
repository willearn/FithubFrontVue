<template>
    <div class="masthead">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../assets/index/classroom/攀岩教室.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../assets/index/classroom/有氧大教室.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../assets/index/classroom/空中瑜珈.jpg" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>


    <section class="page-section" id="course">
        <div class="container">
            <!-- SideBar -->
            <div class="row">
                <div class="col-2">
                    <listGroup></listGroup>
                </div>

                <!-- cards for course -->
                <div class="col-10">
                    <h1 class="text-center" v-autofocus>課程列表</h1>
                    <div class="row justify-content-center">
                        <courseCard v-for="cardAmount in 6" class="col-3 mx-2 my-3" :isLike="isLike"></courseCard>
                    </div>

                    <pagination class="d-flex justify-content-center mt-3"></pagination>
                </div>
            </div>

        </div>
    </section>

    <router-link class="btn btn-secondary mt-6" to="/course/single">課程詳細資訊</router-link>
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

let isLike = ref(false)

/*
  directives
*/
const vAutofocus = {
    mounted: (el) => {
        el.focus()
    }
}

</script>

<style scoped></style>