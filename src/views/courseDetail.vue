<template>
  <div class="masthead">
    <div id="carouselIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://picsum.photos/1400/900?random=10"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://picsum.photos/1400/900?random=11&grayscale"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://picsum.photos/1400/900?random=12"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <!-- singlePage -->
  <div class="container">
    <section class="page-section" id="courseDetail">
      <div class="row justify-content-center">
        <h1 class="col-12 text-center">{{ pageCourse.courseName }}課程</h1>
        <div class="card col-12 col-md-11 col-lg-10 h-100 mb-4">
          <div class="row justify-content-center align-items-center">
            <div class="col-5 mx-3">
              <img
                src="https://picsum.photos/300/200?random=10"
                class="card-img-top mt-3"
                alt="..."
                tabindex="0"
                v-focus
              />
            </div>
            <div class="col-6 mx-3">
              <div class="my-3">
                <h4>授課教練</h4>
                <div class="row align-items-center">
                  <div class="col-12 col-md-5 col-lg-6">
                    <select class="form-select" id="courseCoach" v-focus>
                      <option selected style="display: none" value="">
                        請選擇
                      </option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div class="col-12 col-md-5 col-lg-6">
                    <button class="btn btn-secondary btn-sm">
                      <i class="bi bi-lightbulb-fill"></i>&nbsp;&nbsp;教練專長
                    </button>
                  </div>
                </div>
              </div>
              <div class="my-3">
                <h4>課程時間:</h4>
                <div class="row">
                  <div class="col-12 col-md-5 col-lg-5">
                    <label for="courseDate" class="mb-1">日期</label>
                    <select class="form-select" id="courseDate">
                      <option selected style="display: none" value="">
                        請選擇
                      </option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div class="col-12 col-md-5 col-lg-5">
                    <label for="courseTime" class="mb-1">時段</label>
                    <select class="form-select" id="courseTime">
                      <option selected style="display: none" value="">
                        請選擇
                      </option>
                      <option value="早上">早上</option>
                      <option value="下午">下午</option>
                      <option value="晚上">晚上</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="ml-2 my-3">
                <h4>課程說明:</h4>
                <p class="fs-6">
                  {{ pageCourse.courseDescription }}
                </p>
              </div>

              <span class="d-flex justify-content-end my-4">
                <button
                  class="btn btn btn-primary mx-2"
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                >
                  <i type="button" class="bi bi-calendar-check"></i
                  >&nbsp;&nbsp;&nbsp;查看課表
                </button>
                <button class="btn btn btn-primary mx-2">
                  <i type="button" class="bi bi-heart-fill"></i
                  >&nbsp;&nbsp;加入願望清單
                </button>
                <button class="btn btn btn-primary mx-2">
                  <i type="button" class="bi bi-cart4"></i
                  >&nbsp;&nbsp;加入購物車
                </button>
                <button class="btn btn btn-primary mx-2">
                  <i type="button" class="bi bi-cart3"></i>&nbsp;&nbsp;直接購買
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <!-- 課表摺疊 -->
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-10">
          <div class="collapse my-4" id="collapseExample">
            I am calendar !!!!!
            <!-- <FullCalendar></FullCalendar> -->
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-10">
          <FullCalendar></FullCalendar>
        </div>
      </div>

      <hr />

      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-10">
          <h2 class="text-center">推薦課程</h2>
          <div
            class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center"
          >
            <courseCard
              v-for="(course, index) in recommendedCourses"
              class="col-3 mx-2 my-3"
              :cardAmount="index"
              :course="course"
              :isLike="isLike"
            >
            </courseCard>
          </div>
        </div>
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

import { ref, onMounted, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";
import axios from "axios";
import courseCard from "../components/course/courseCard.vue";
import FullCalendar from "../components/course/courseCalendar.vue";
import CartIcon from "../components/course/util/icon-cart.vue";
import { vFocus } from "../directives/vFocus";
const URL = import.meta.env.VITE_API_JAVAURL;

/*
  router
*/
const route = useRoute();

/*
  watcher for router
*/

// const pageCourseId = ref(route.params["courseid"]);
watch(
  () => route.params["courseid"],
  async (newUrlCourseId) => {
    // console.log(newUrlCourseId);
    await loadPageCourse();
  }
);

/*
Load datas
*/

// Load single course data
const pageCourse = ref({});
const loadPageCourse = async () => {
  const URLAPI = `${URL}/course/${route.params["courseid"]}`;
  console.log(URLAPI);
  const response = await axios.get(URLAPI).catch((error) => {
    console.log(error.toJSON());
  });
  pageCourse.value = response.data;
  console.log(pageCourse);
};

// Load recommended courses data
const recommendedCourses = ref([]);
let isLike = ref(false); //可拿掉
const loadRecommendedCourses = async () => {
  const URLAPI = `${URL}/course/page`;
  const response = await axios.get(URLAPI, {
    params: {
      p: 1,
      size: 3,
    },
  });

  //取得所有課程放進courses變數
  recommendedCourses.value = response.data;
};

/*
  LifeCycle Hooks
*/
onMounted(() => {
  loadPageCourse();
  loadRecommendedCourses();
});

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
  --bs-btn-bg: #ffc408;
  --bs-btn-border-color: #fff;
  --bs-btn-hover-bg: #e83015;
  --bs-btn-hover-border-color: #c34e2e;
  --bs-btn-active-bg: #c34e2e;
}
p {
  text-align: justify;
  /* padding: 1em; */
  text-indent: 2em;
}
</style>
