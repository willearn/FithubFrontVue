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

  <section class="page-section" id="courseView">
    <div class="container">
      <!-- SideBar -->
      <div class="row">
        <div class="col-2">
          <listGroup
            class="d-flex justify-content-center"
            :allCourseCategories="allCourseCategories"
            :pageCourseCategoryId="pageCourseCategoryId"
            tabindex="0"
            v-focus
          ></listGroup>
        </div>

        <!-- cards for course -->
        <div class="col-10">
          <h1 v-if="pageCourseCategoryId != 0" class="text-center mb-4">
            {{
              allCourseCategories.find((item) => {
                return item.categoryId == pageCourseCategoryId;
              }).categoryName
            }}課程列表
          </h1>
          <h1 v-else class="text-center mb-4">全部課程列表</h1>
          <!-- <input type="text" v-focus> -->
          <div
            class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center"
          >
            <courseCard
              v-for="(course, index) in pageCourses"
              class="col-3 mx-2 my-3"
              :cardAmount="index"
              :course="course"
              :isLike="isLike"
            ></courseCard>
          </div>

          <pagination
            v-if="paginationData.showPagination"
            :totalPages="paginationData.totalPages"
            :page="paginationData.page"
            class="d-flex justify-content-center mt-3"
            @clickNaborCoursePage-emit="changePage"
            @clickAnyCoursePage-emit="changePage"
          >
          </pagination>
        </div>
      </div>
    </div>
  </section>

  <router-link class="btn btn-secondary mt-6" to="/course/detail"
    >課程詳細資訊</router-link
  >
</template>

<script setup>
/*
  docs
*/

/*
  1.Whole course data / 單一 Course category data
   - 利用 watcher 監控 url，url 中的 pageCourseCategoryId 決定 pageCourses 是那些 course data
     進而決定要 render 那些資料

  2.Pagination 分頁
   - loadPageCourses() 或 loadPageCoursesOfSingleCategory() 在 Server 端取得的 response header，
     totalPages、numberOfCourses 會決定 bootstrap pagination 元件要分成幾頁
   - 點按 bootstrap pagination 元件，會透過emit 回傳 nextOrLast, pageChoose 兩個變數， 決定 page 在第幾頁
     只要 page 數值改變 watcher 會決定要呼叫哪隻 Ajax ， 該 Ajax 會透過 page 決定要回傳哪一頁的資料，並重複
     之前敘述的 render 動作
*/

/*
  imports
*/
import { ref, reactive, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import courseCard from "../components/course/courseCard.vue";
import pagination from "../components/util/pagination.vue";
import listGroup from "../components/util/listGroup.vue";
import { vFocus } from "../directives/vFocus";
const URL = import.meta.env.VITE_API_JAVAURL;

/*
  watcher for router
*/

const route = useRoute();
const pageCourseCategoryId = ref(0);
watch(
  () => route.params["categoryid"],
  async (newUrlCategoryId) => {
    // console.log(newUrlCategoryId);
    if (newUrlCategoryId == undefined) {
      paginationData.page = 1; //每次換Category時 顯示所有資料的第一頁
      pageCourseCategoryId.value = 0;
      await loadPageCourses();
    } else {
      paginationData.page = 1; //每次換Category時 顯示所有資料的第一頁
      pageCourseCategoryId.value = newUrlCategoryId;
      await loadPageCoursesOfSingleCategory();
    }
  }
);

/*
Load Datas
*/

// Load courseCategories data
const allCourseCategories = ref([]);
const loadAllCourseCategories = async () => {
  const URLAPI = `${URL}/coursecategories/findAll`;
  const response = await axios.get(URLAPI);

  //取得所有分類放進allCourseCategories變數
  allCourseCategories.value = response.data;
};

// Load course data of all categories
const pageCourses = ref([]);
let isLike = ref(false); //可拿掉
const paginationData = reactive({
  page: 1,
  totalPages: 1,
  numberOfCourses: 6,
  showPagination: false,
});

const loadPageCourses = async () => {
  const URLAPI = `${URL}/course/page`;
  const response = await axios.get(URLAPI, {
    params: {
      p: paginationData.page,
    },
  });

  //取得所有課程放進courses變數
  pageCourses.value = response.data;

  //取得所有課程頁數及單頁資料數放進courses變數
  paginationData.totalPages = parseInt(response.headers["total-pages"]);
  paginationData.numberOfCourses = parseInt(
    response.headers["number-of-elements"]
  );
  paginationData.showPagination = true; // loadPageCourses後，v-if顯示pagination
};

// Load course data of single category
const loadPageCoursesOfSingleCategory = async () => {
  if (pageCourseCategoryId != 0) {
    console.log(pageCourseCategoryId);
    const URLAPI = `${URL}/course/page/${pageCourseCategoryId.value}`;
    const response = await axios.get(URLAPI, {
      params: {
        p: paginationData.page,
      },
    });

    //取得所有課程放進courses變數
    pageCourses.value = response.data;

    //取得所有課程頁數及單頁資料數放進courses變數
    paginationData.totalPages = parseInt(response.headers["total-pages"]);
    paginationData.numberOfCourses = parseInt(
      response.headers["number-of-elements"]
    );
    paginationData.showPagination = true; // loadPageCourses後，v-if顯示pagination
  }
};

/*
  Pagination
*/

//trigger @click pagination後換頁
const changePage = (nextOrLast, pageChoose) => {
  console.log(
    "In Main Page, arg1 is: " + nextOrLast + " ,arg2 is: " + pageChoose
  );
  if (nextOrLast == 0 && paginationData.page != pageChoose) {
    paginationData.page = pageChoose;
  } else if (
    pageChoose == 0 &&
    paginationData.page * nextOrLast != -1 &&
    paginationData.page + nextOrLast <= paginationData.totalPages
  ) {
    paginationData.page += nextOrLast;
  } else {
    console.log("do nothing");
  }
};

/*
  watcher for Pagination
*/
watch(
  () => paginationData.page,
  async () => {
    // console.log(newUrlCategoryId);
    if (route.params["categoryid"] == undefined) {
      await loadPageCourses();
    } else {
      await loadPageCoursesOfSingleCategory();
    }
  }
);

/*
  LifeCycle Hooks
*/
onMounted(() => {
  loadAllCourseCategories();
  loadPageCourses();
});
</script>

<style scoped></style>
