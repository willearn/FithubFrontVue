<template>
    <!-- 輪播圖 -->
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

    <section class="page-section" id="team">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2 mybg-light text-center">
                    <h1>活動名稱</h1>
                    <h2>活動日期</h2>
                    <hr />
                    <div class="col-lg-8 offset-md-2" id="activitydescription">
                    </div>
                    <hr />
                    <button class="btn btn-primary ">返回首頁</button>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script setup>
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted } from 'vue';
const url = import.meta.env.VITE_API_JAVAURL

// 測試:使用query接值
const router = useRouter();
const activityid = router.currentRoute.value.query.activityid;
console.log(activityid);

const getActivitydescription = async () => {
    try {
        const response = await axios.get(`${url}/activity/findActivitydescriptionById/${activityid}`);
        const activityDescription = response.data;

        // 取得activitydescription的div
        const activityDescriptionDiv = document.getElementById('activitydescription');

        // 將activityDescription的内容設置為<div>的innerHTML
        activityDescriptionDiv.innerHTML = activityDescription;
    } catch (error) {
        console.error('Error:', error);
    }
};

onMounted(() => {
    getActivitydescription();
});
</script>

<style scoped></style>