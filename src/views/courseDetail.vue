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

    <!-- singlePage -->
    <div class="container">
        <section class="page-section" id="courseDetail">
            <div class="row justify-content-center">
                <div class="col-4 mx-3">
                    <img src="https://picsum.photos/300/200?random=10" class="card-img-top mt-3" alt="..." tabindex="0"
                        v-focus />
                </div>
                <div class="col-6 mx-3">
                    <h2>課程名稱</h2>
                    <div>授課教練（教練資訊查看）</div>
                    <div class="my-3">
                        <label for="courseDescription" class="form-label">課程說明</label>
                        <textarea class="form-control" id="courseDescription" cols="30" rows="5">課程說明文字</textarea>
                    </div>
                    <div class="my-3">
                        <label for="courseTime" class="form-label">課程時間</label>
                        <select class="form-select" id="courseTime" aria-label="Default select example">
                            <option selected style="display: none;" value="">請選擇</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <span class="d-flex justify-content-end my-4 ">
                        <button class="btn btn btn-primary mx-2 " data-bs-toggle="collapse" href="#collapseExample"
                            role="button"><i type="button" class="bi bi-calendar-check"></i>&nbsp;&nbsp;&nbsp;查看課表</button>
                        <button class="btn btn btn-primary mx-2"><i type="button"
                                class="bi bi-cart4"></i>&nbsp;&nbsp;加入購物車</button>
                        <button class="btn btn btn-primary mx-2"><i type="button"
                                class="bi bi-cart3"></i>&nbsp;&nbsp;直接購買</button>
                    </span>

                </div>
            </div>




            <!-- 課表摺疊 -->
            <div class="collapse my-4" id="collapseExample">
                <div class="card card-body">
                    I am a Calendar
                    <!-- <div id="calendar" class="calendar text-center mt-5">
                    </div> -->
                    <!-- <FullCalendar></FullCalendar> -->
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <FullCalendar></FullCalendar>
                </div>
            </div>
            <hr>

            <h2>推薦課程</h2>
            <div class="row justify-content-center">
                <courseCard v-for="cardAmount in 3" class="col-3 mx-2 my-3" :cardAmount="cardAmount" :isLike="isLike">
                </courseCard>
            </div>

        </section>
        <router-link class="btn btn-secondary" to="/cart">購物車</router-link>
    </div>

    <CartIcon></CartIcon>
</template>

<script setup>
/*
  imports
*/
import { ref } from 'vue';
import { Axios } from 'axios';
import courseCard from '../components/course/courseCard.vue'
import FullCalendar from '../components/course/courseCalendar.vue'
import CartIcon from '../components/util/icon-cart.vue'
import { vFocus } from '../directives/vFocus';

let isLike = ref(false)

/*
  Build Calendar
*/
// // 取得下個月1號為日曆初始日期
// const today = new Date()
// const nextMonth = new Date(today.getFullYear(), today.getMonth() + 2, 1)
// let year = nextMonth.getFullYear()
// let month = String(nextMonth.getMonth()).padStart(2, '0')
// let day = String(nextMonth.getDate()).padStart(2, '0')

// // 如果月份為 01，年份加 1
// if (month === '01') {
//     year++
// }
// const nextMonthFormatted = `${year}-${month}-${day}`

// const calendarEl = document.getElementById('calendar')
// const calendar = new Calendar(calendarEl, {
//     plugins: [dayGridPlugin],
//     // headerToolbar: {
//     //     left: '',
//     //     center: 'title',
//     //     right: '',
//     // },
//     initialView: 'dayGridMonth',
//     initialDate: nextMonthFormatted,
//     timeZone: 'UTC',
//     locale: 'zh-tw',
//     height: 700,
//     events: [],

// })
// calendar.render()

</script>

<style scoped>
.btn-primary {
    --bs-btn-color: #fff;
    --bs-btn-bg: #FFC408;
    --bs-btn-border-color: #fff;
    --bs-btn-hover-bg: #E83015;
    --bs-btn-hover-border-color: #c34e2e;
    --bs-btn-active-bg: #c34e2e;
}
</style>