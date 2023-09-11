<template>
  <div class="masthead">
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
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
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <!-- 購物車 -->
  <section class="page-section">
    <div class="container">
      <div class="row justify-content-center mb-5">
        <div class="col-12 col-md-6 col-lg-6">
          <ProgressBar :percent="25"></ProgressBar>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-11 col-md-9 col-lg-9">
          <div class="p-2 bg-light border">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <button
                  class="nav-link active disabled"
                  aria-current="page"
                  href="#"
                >
                  購物車
                </button>
              </li>
              <li class="nav-item">
                <button class="nav-link" href="#">我的願望清單</button>
              </li>
              <li class="nav-item">
                <button class="nav-link" href="#">我的折價券</button>
              </li>
            </ul>
          </div>

          <div class="p-2 bg-light border">
            <table class="table align-middle text-center">
              <thead class="table-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">課程圖片</th>
                  <th scope="col">課程名稱</th>
                  <th scope="col">課程教練</th>
                  <th scope="col">課程時間</th>
                  <th scope="col">單價</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody v-for="(item, index) in pageClasses">
                <tr>
                  <th scope="row">{{ index + 1 }}</th>
                  <td><img src=https://picsum.photos/id/17/200 alt="..." /></td>
                  <td>{{ item.courseName }}</td>
                  <td>{{ item.employeename }}</td>
                  <td>{{ item.classDate }}&nbsp;{{ item.classTime }}</td>
                  <td>$NT &nbsp;{{ item.price }}</td>
                  <td>
                    <div type="button" class="bi bi-heart-fill"></div>
                    <div type="button" class="bi bi-trash-fill"></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- 結帳 card -->
        <div class="col-12 col-md-3 col-lg-3">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">總價:</h4>
              <p class="card-text">NT$&nbsp;{{ totalPrice }}</p>
              <div class="d-grid gap-3 col-12 mx-auto">
                <router-link class="btn btn-primary" to="/checkout"
                  >結帳</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
/*
  imports
 */
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import ProgressBar from "../components/checkout/util/progressbar.vue";
const URL = import.meta.env.VITE_API_JAVAURL;

/*
  Load datas
*/
// Load Classes data
const pageClasses = ref([]);
const loadPageClasses = async () => {
  const URLAPI = `${URL}/classes/findClassesByIds`;
  let courseCart = JSON.parse(localStorage.getItem("courseCart"));
  const response = await axios.post(URLAPI, courseCart).catch((error) => {
    console.log(error.toJSON());
  });
  // console.log(response);

  pageClasses.value = response.data;
  // console.log(pageClasses);
};

/*
  computed total price
*/

const totalPrice = computed(() => {
  let sum = 0;
  for (let i = 0; i < pageClasses.value.length; i++) {
    sum += pageClasses.value[i].price;
  }
  return sum;
});

/*
  LifeCycle Hooks
*/
onMounted(() => {
  loadPageClasses();
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
</style>
