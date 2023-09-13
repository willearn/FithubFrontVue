<template>
  <!-- 結帳頁面 -->
  <section class="page-section">
    <div class="container">
      <div class="row justify-content-center mb-5 mt-5">
        <div class="col-12 col-md-6 col-lg-6">
          <ProgressBar :percent="50"></ProgressBar>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-11 col-md-9 col-lg-8">
          <div class="p-2 bg-light border">
            <table class="table align-middle text-center">
              <thead class="table-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">圖片</th>
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
                  <td>
                    <img
                      :src="`https://picsum.photos/300?random=${index + 15}`"
                      style="width: 200px"
                    />
                  </td>
                  <td>{{ item.courseName }}</td>
                  <td>{{ item.employeename }}</td>
                  <td>{{ item.classDate }}&nbsp;{{ item.classTime }}</td>
                  <td>$NT &nbsp;{{ item.price }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="p-2 bg-light border">
            <div class="form-floating">
              <select
                class="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
                required
              >
                <option selected>選擇付款方式</option>
                <option value="1">綠界金流</option>
              </select>
              <label for="floatingSelect">Pay with selects</label>
            </div>
          </div>
        </div>
        <!-- 結帳 card -->
        <div class="col-12 col-md-3 col-lg-2">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">總價:</h4>
              <p class="card-text">
                NT$&nbsp;{{ totalPrice - couponDiscount }}
              </p>
              <div v-if="error">{{ error }}</div>
              <!-- 顯示折扣金額 -->
              <div v-else-if="couponDiscount">折扣$ {{ couponDiscount }}</div>
              <div class="d-grid gap-3 col-12 mx-auto">
                <router-link class="btn btn-primary" to="/ordercheck"
                  >結帳</router-link
                >
              </div>
            </div>
            <hr />
            <div class="row mx-auto">
              <h5>優惠券</h5>
              <div class="col-12">
                <label for="inputPassword2" class="visually-hidden"
                  >促銷代碼</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="couponCode"
                  id="inputPassword2"
                  placeholder="促銷代碼"
                />
              </div>
              <div class="col-12 my-2">
                <div class="row d-grid justify-content-end">
                  <div class="col-12">
                    <button
                      type="submit"
                      class="btn btn-primary mb-3"
                      @click="submitCoupon"
                    >
                      輸入
                    </button>
                  </div>
                </div>
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
import { useCartStore } from "../stores/courseStore.js";
import { storeToRefs } from "pinia";
import axios from "axios";
import ProgressBar from "../components/checkout/util/progressbar.vue";
const URL = import.meta.env.VITE_API_JAVAURL;

/*
  Store and relative responsive datas and local storage
*/
const cartStore = useCartStore();
const { courseCartStore } = storeToRefs(cartStore);

/*
  Load datas
*/
// Load Classes data
const pageClasses = ref([]);
const loadPageClasses = async () => {
  const URLAPI = `${URL}/classes/findClassesByIds`;
  const response = await axios
    .post(URLAPI, courseCartStore.value)
    .catch((error) => {
      console.log(error.toJSON());
    });
  // console.log(response);

  pageClasses.value = response.data;
  // console.log(pageClasses);
};

/*
  Submit Coupon Data
*/
const couponCode = ref("");
const couponDiscount = ref("");
const error = ref("");

const submitCoupon = async () => {
  try {
    console.log(couponCode.value);
    const response = await axios.post(`${URL}/coupons/api/coupon`, {
      couponcode: couponCode.value,
    });

    if (response.status === 200) {
      couponDiscount.value = response.data;
      var dis = couponDiscount.value;
      localStorage.setItem("dis", dis);
      error.value = "";
    } else {
      error.value = "發生錯誤"; // 处理后端返回的错误
      couponDiscount.value = "";
    }
  } catch (err) {
    console.error(err);
    error.value = "發生錯誤";
    couponDiscount.value = "";
  }
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
