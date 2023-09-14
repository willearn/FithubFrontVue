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
        <div class="col-11 col-md-9 col-lg-8">
          <div class="p-2 bg-light border">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <button
                  class="nav-link"
                  :class="{
                    active: pageState.isActiveOrDisableCart,
                    disabled: pageState.isActiveOrDisableCart,
                  }"
                  @click="changePage('cart')"
                >
                  購物車
                </button>
              </li>
              <li class="nav-item">
                <button
                  class="nav-link"
                  :class="{
                    active: pageState.isActiveOrDisableWishlist,
                    disabled: pageState.isActiveOrDisableWishlist,
                  }"
                  @click="changePage('wishlist')"
                >
                  我的願望清單
                </button>
              </li>
              <li class="nav-item">
                <button
                  class="nav-link"
                  :class="{
                    active: pageState.isActiveOrDisableCoupon,
                    disabled: pageState.isActiveOrDisableCoupon,
                  }"
                  @click="changePage('coupon')"
                >
                  折價券
                </button>
              </li>
            </ul>
          </div>

          <div class="p-2 bg-light border">
            <table
              v-if="cartOrWishListOrCoupon == 'cart'"
              class="table align-middle text-center"
            >
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
                    <div
                      type="button"
                      class="bi bi-heart-fill"
                      @click="addToWishlist(item.classId)"
                    ></div>
                    <div
                      type="button"
                      class="bi bi-trash-fill"
                      @click="deleteCartItem(item.classId)"
                    ></div>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- wishlist -->
            <courseWishlist
              v-else-if="cartOrWishListOrCoupon == 'wishlist'"
            ></courseWishlist>
          </div>
          <!-- Coupon page start -->
          <div class="p-2 bg-light border">
            <div
              class="rol-12 rol-md-9 row-lg-8"
              v-if="cartOrWishListOrCoupon == 'coupon'"
            >
              <memberCoupon></memberCoupon>
            </div>
          </div>
          <!-- Coupon page End -->
        </div>
        <!-- 結帳 card start -->
        <div
          v-if="cartOrWishListOrCoupon == 'cart'"
          class="col-12 col-md-3 col-lg-2"
        >
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">總價:</h4>
              <p class="card-text">NT$&nbsp;{{ totalPrice }}</p>
              <div class="d-grid gap-3 col-12 mx-auto">
                <router-link
                  class="btn btn-primary"
                  :class="{
                    disabled: isCheckoutButtonActive,
                  }"
                  to="/checkout"
                  >結帳</router-link
                >
              </div>
            </div>
          </div>
        </div>
        <!-- 結帳 card end -->
      </div>
    </div>
  </section>
</template>

<script setup>
/*
  imports
 */
import { ref, reactive, onMounted, computed, watch, onUpdated } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import { useDialog } from "naive-ui";
import { useCartStore, useWishlistStore } from "../stores/courseStore.js";
import { storeToRefs } from "pinia";
import ProgressBar from "../components/checkout/util/progressbar.vue";
import courseWishlist from "../components/checkout/courseWishlist.vue";
import memberCoupon from "../components/checkout/memberCoupon.vue";
const URL = import.meta.env.VITE_API_JAVAURL;

/*
  Decide which page to render
*/
const cartOrWishListOrCoupon = ref("cart");
const pageState = reactive({
  isActiveOrDisableCart: true,
  isActiveOrDisableWishlist: false,
  isActiveOrDisableCoupon: false,
});
const changePage = (pageName) => {
  if (pageName == "cart") {
    cartOrWishListOrCoupon.value = "cart";
    pageState.isActiveOrDisableCart = true;
    pageState.isActiveOrDisableWishlist = false;
    pageState.isActiveOrDisableCoupon = false;
  } else if (pageName == "wishlist") {
    cartOrWishListOrCoupon.value = "wishlist";
    pageState.isActiveOrDisableCart = false;
    pageState.isActiveOrDisableWishlist = true;
    pageState.isActiveOrDisableCoupon = false;
  } else {
    cartOrWishListOrCoupon.value = "coupon";
    pageState.isActiveOrDisableCart = false;
    pageState.isActiveOrDisableWishlist = false;
    pageState.isActiveOrDisableCoupon = true;
  }
};

/*
  watcher for page change
*/
watch(cartOrWishListOrCoupon, (newPageName) => {
  if (newPageName == "cart") {
    loadPageClasses();
  }
});

/*
  Store and relative responsive datas and local storage
*/
const cartStore = useCartStore();
const { courseCartStore } = storeToRefs(cartStore);
const wishlistStore = useWishlistStore();
const { courseWishlistStore } = storeToRefs(wishlistStore);

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
  Methods for delete cart items
*/

// Delete single cart items throuth deleting in store
const deleteCartItem = (classId) => {
  courseCartStore.value.splice(courseCartStore.value.indexOf(classId), 1);
};

// Delete cart items throuth deleting in store
// Not use yet
const deleteCartItems = (itemsIds) => {
  for (let i = 0; i < itemsIds.length; i++) {
    let index = courseCartStore.value.indexOf(itemsIds[i]);
    let deleteId = courseCartStore.value.splice(index, 1);
    console.log(deleteId);
  }
};

/*
  watcher for cart items in store
*/
watch(courseCartStore.value, () => {
  loadPageClasses();
});

/*
  method for add and delete item to wishlish DB
*/
// add item to wishlish DB
const AddWishlistItemToDB = async (classId, e) => {
  const reswishlist = await axios
    .post(`${URL}/wishlist`, {
      memberId: localStorage.getItem("memberid"),
      classId: classId,
    })
    .catch((error) => {
      console.log(error.toJSON());
    });
};

/*
  Add classes to courseWishlistStore and local storage
*/
const addToWishlist = (classId) => {
  // Delete utem from cart ,then add to wishlist and DB
  if (!courseWishlistStore.value.includes(classId)) {
    deleteCartItem(classId);
    courseWishlistStore.value.push(classId);
    AddWishlistItemToDB(classId);
    console.log(courseWishlistStore.value);

    // Use Naive UI Dialog
    handleSuccess("課程已成功加入願望清單");
  } else {
    handleSuccess("課程已存在您的願望清單");
  }
};

/*
  checkout button active verification
*/
const isCheckoutButtonActive = ref(null);
const CheckoutButtonActive = () => {
  if (totalPrice.value == 0 || localStorage.getItem("memberid") == null) {
    isCheckoutButtonActive.value = true;
  } else {
    isCheckoutButtonActive.value = false;
  }
};

/*
  Naive UI
*/
const dialog = useDialog();
const handleSuccess = (contentText) => {
  dialog.success({
    title: "Success",
    content: contentText,
    positiveText: "確定",
  });
};

/*
  LifeCycle Hooks
*/
onMounted(() => {
  loadPageClasses();
  CheckoutButtonActive();
});

onUpdated(() => {
  CheckoutButtonActive();
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
