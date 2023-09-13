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
                <div class="row align-items-center">
                  <div class="rol">
                    <div>課程時間:</div>
                  </div>
                  <div>
                    <span>{{ displayClasses.classDate }}</span
                    >&nbsp;&nbsp;
                    <span>{{ displayClasses.classTime }}</span>
                  </div>
                </div>
              </div>

              <div class="my-3">
                <div>授課教練:</div>
                <div>{{ displayClasses.employeename }}</div>
              </div>

              <div class="my-3">
                <div>地點:</div>
                <div>{{ displayClasses.classroomName }}</div>
              </div>

              <div class="my-3">
                <div>價格:</div>
                <div>NT$&nbsp;{{ displayClasses.price }}</div>
              </div>

              <div class="ml-2 my-3">
                <div>課程說明:</div>
                <p class="fs-6">
                  {{ pageCourse.courseDescription }}
                </p>
              </div>

              <div class="row justify-content-end my-4">
                <div class="col-12 col-md-6 col-lg-4">
                  <button class="btn btn btn-primary mx-2">
                    <i type="button" class="bi bi-heart-fill"></i
                    >&nbsp;&nbsp;加入願望清單
                  </button>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <button
                    class="btn btn btn-primary mx-2"
                    @click="saveCourseCartToLocalStorage('stay')"
                  >
                    <i type="button" class="bi bi-cart4"></i
                    >&nbsp;&nbsp;加入購物車
                  </button>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <button
                    class="btn btn btn-primary mx-2"
                    @click="saveCourseCartToLocalStorage('forward')"
                  >
                    <i type="button" class="bi bi-cart3"></i
                    >&nbsp;&nbsp;直接購買
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-10">
          <FullCalendar
            :courseName="pageCourse.courseName"
            :calendarEvents="calendarEvents"
            @click-calendar-class-emit="onClickedClass"
          ></FullCalendar>
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
  </div>

  <CartIcon></CartIcon>
</template>

<script setup>
/*
  imports
*/

import { ref, reactive, onMounted, onBeforeUnmount, watch } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import axios from "axios";
import courseCard from "../components/course/courseCard.vue";
import FullCalendar from "../components/course/courseCalendar.vue";
import CartIcon from "../components/course/util/icon-cart.vue";
import { vFocus } from "../directives/vFocus";
import { useCartStore } from "../stores/courseStore.js";
import { storeToRefs } from "pinia";
const URL = import.meta.env.VITE_API_JAVAURL;

/*
  router
*/
const route = useRoute();
const router = useRouter();

/*
  watcher for router
*/

// const pageCourseId = ref(route.params["courseid"]);
watch(
  () => route.params["courseid"],
  async (newUrlCourseId) => {
    // console.log(newUrlCourseId);
    await loadPageCourse();
    await loadPageClasses();
  }
);

/*
  Store and relative responsive datas and local storage
*/
const cartStore = useCartStore();
const { courseCartStore } = storeToRefs(cartStore);
const selectedClasses = ref([]);

/*
  Display Data
*/
const displayClasses = reactive({
  classId: 0,
  classDate: "",
  classTime: "",
  employeename: "",
  classroomName: "",
  price: "",
});

/*
  Calendar
*/
const calendarEvents = ref([]);

/*
Load datas
*/

// Load single course data
const pageCourse = ref([]);
const loadPageCourse = async () => {
  const URLAPI = `${URL}/course/${route.params["courseid"]}`;
  const response = await axios.get(URLAPI).catch((error) => {
    console.log(error.toJSON());
  });
  pageCourse.value = response.data;
  // console.log(pageCourse);
};

// Load Classes data
const pageClasses = ref([]);
const loadPageClasses = async () => {
  const URLAPI = `${URL}/classes/findAllClassesInMonthRange/${route.params["courseid"]}`;
  const response = await axios
    .get(URLAPI, {
      params: {
        monthBefore: 1,
        monthAfter: 1,
      },
    })
    .catch((error) => {
      console.log(error.toJSON());
    });
  // console.log(response.data);

  pageClasses.value = response.data;
  // console.log(pageClasses);

  // imitial diaplay data
  displayClasses.classId = pageClasses.value[0]["classId"];
  displayClasses.classDate = pageClasses.value[0]["classDate"];
  displayClasses.classTime = pageClasses.value[0]["classTime"];
  displayClasses.employeename = pageClasses.value[0]["employeename"];
  displayClasses.classroomName = pageClasses.value[0]["classroomName"];
  displayClasses.price = pageClasses.value[0]["price"];

  // put all classes data in calendar
  calendarEvents.value = pageClasses.value.map((item) => {
    return {
      id: item["classId"],
      title: item["classTime"],
      start: item["classDate"],
    };
  });
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
  Event obj. method
*/

const onClickedClass = (classId) => {
  console.log("get emit: " + classId);

  // update diaplay data
  let clickedCLass = pageClasses.value.find((item) => {
    return item.classId == classId;
  });
  displayClasses.classId = clickedCLass["classId"];
  displayClasses.classDate = clickedCLass["classDate"];
  displayClasses.classTime = clickedCLass["classTime"];
  displayClasses.employeename = clickedCLass["employeename"];
  displayClasses.classroomName = clickedCLass["classroomName"];
  displayClasses.price = clickedCLass["price"];
};

const saveCourseCartToLocalStorage = (forwardOrStay) => {
  console.log("saveCartToLocalStorage");
  console.log(courseCartStore.value);
  if (
    // check classId have value and not repeat in LocalStorage
    displayClasses.classId != 0 &&
    !courseCartStore.value.includes(displayClasses.classId)
  ) {
    courseCartStore.value.push(displayClasses.classId);
  }
  if (forwardOrStay == "forward") {
    console.log("forward");

    router.push("/cart");
  } else {
    console.log("stay");
  }
};

const saveCourseCartToDB = () => {
  console.log("saveCartToDB");
};

/*
  LifeCycle Hooks
*/

onMounted(() => {
  loadPageCourse();
  loadPageClasses();
  loadRecommendedCourses();
});

onBeforeUnmount(() => {
  saveCourseCartToDB();
});
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
