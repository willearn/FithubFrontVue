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


    <section class="page-section">
        <div class="container text-center">
            <h1>訂單確認</h1>
            <hr class="divider" />
            <div class="col-lg-12 col-md-12">
            </div>
            <div class="col-lg-12 col-md-12">
                <table class="table table-bordered align-middle">
                    <thead class="table-success">
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">圖片</th>
                            <th scope="col">場地</th>
                            <th scope="col">日期</th>
                            <th scope="col">時段</th>
                            <th scope="col">金額</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <img :src="rentOrder.classroomPic" style="width: 400px;height: 400px;">
                            </td>
                            <td>{{ rentOrder.classroomName }}</td>
                            <td>{{ rentOrder.rentdate }}</td>
                            <td>{{ rentOrder.renttime }}</td>
                            <td>{{ rentOrder.classroomPrice }}</td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit" class="btn btn-primary btn-lg" @click="sendRentOrder">送出訂單</button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router'
import { useRentOrderStore } from "../stores/rentorder.js"
import { storeToRefs } from 'pinia'

const URL = import.meta.env.VITE_API_JAVAURL

const rentOrderStore = useRentOrderStore();
const { rentOrder } = storeToRefs(rentOrderStore);
console.log(rentOrder.value)



// 測試:使用query接值
// const id = router.currentRoute.value.query.id;
// const name = router.currentRoute.value.query.name;


onMounted(() => {

});
</script>