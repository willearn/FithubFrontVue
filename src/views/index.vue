<template>
  <!-- banner-->
  <header class="masthead">
    <div class="container px-4 px-lg-5 h-100 w-75">
      <div data-aos="slide-right" class="row gx-4 gx-lg-5 h-75 align-items-center justify-content-center">
        <div class="col-lg-10 align-self-end">
          <h3 class="text-white">KEEP&emsp;YOUR&emsp;BODY</h3>
          <h1 class="text-white ">FIT & STRONG</h1>
        </div>
        <div class="col-lg-10 align-self-baseline">
          <RouterLink class="btn btn-primary btn-xl" to="course">Join Us</RouterLink>
        </div>
      </div>
    </div>
  </header>

  <!-- About-->
  <section class="page-section px-sm-3">
    <div class="container">
      <div class="row" data-aos="slide-left">
        <div class="col-lg-4" style="padding: 0px;">
          <img src="../assets/index/other/2.jpg" class="myimg-full" alt="維修中">
        </div>
        <div class="col-lg-8" style="background-color: #FFBF3C;">
          <div class="ms-5">
            <h1>Fithub 健身房</h1>
            <h3 class="mt-5">
              成立這個健身房的理念源於對健康和幸福的承諾。我們相信每個人都應該擁有實現健康目標的機會，無論年齡或健身水平如何。
            </h3>
            <h3 class="mt-5">
              我們的健身房致力於營造一個充滿正能量和支持的環境，讓會員能夠自信地追求他們的健身和健康目標。我們提供專業的設施、優質的教練團隊和多元化的課程，以確保每個人都能找到適合自己的運動方式。我們相信，健康不僅僅是身體的狀態，更是心靈的寧靜。通過運動，我們可以擁有更健康、更充實的生活，這正是我們健身房存在的意義所在。
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Team-->
  <section class="page-section px-sm-3">
    <div class="container mybg-light">
      <div class="text-center pt-1">
        <h2>專業團隊</h2>
        <hr class="divider" />
      </div>
      <Carousel v-bind="settings" :breakpoints="breakpoints">
        <Slide :id="'carousel' + coach.employeeid" v-for=" coach in coachPics" :key="coach.employeeid"
          class="carousel slide col-lg-3 px-sm-4" data-bs-touch="false" data-bs-interval="false">
          <div class="carousel-inner" style="height: 360px">
            <div class="carousel-item" style="" v-for="(  pic, index  ) in   coach.coachpic  " :key="index"
              :class="{ active: index === 0 }">
              <img style="width: 90%;height: 300px;" :src="`data:image/jpeg;base64,${pic.cpicfile}`" alt="維修中" />
              <h4 style="margin: 0;">{{ coach.employeenamne }}</h4>
              <p class="text-muted">專長:{{ coach.specialtyname }}<i class="bi bi-envelope m-2"
                  :title="coach.employeeemail"></i><i class="bi bi-telephone" :title="coach.emploueephone"></i></p>
            </div>
          </div>
          <button class="carousel-control-prev m-5" type="button" :data-bs-target="'#carousel' + coach.employeeid"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next m-5" type="button" :data-bs-target="'#carousel' + coach.employeeid"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
          <!-- 左右按鈕 -->
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </section>

  <!-- classroom -->
  <section class="page-section text-center px-sm-3">
    <div id="portfolio">
      <div class="container-fluid p-0">
        <div class="text-center pt-1">
          <h2>場地設備</h2>
          <hr class="divider" />
        </div>
        <div class="row g-0">
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="src/assets/index/classroom/攀岩教室.jpg" @click="handleLinkClick" title="攀岩教室">
              <img class="img-fluid" src="../assets/index/classroom/攀岩教室.jpg" alt="攀岩教室" />
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">Category</div>
                <div class="project-name">攀岩教室</div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="src/assets/index/classroom/有氧大教室.jpg" title="有氧大教室">
              <img class="img-fluid" src="../assets/index/classroom/有氧大教室.jpg" alt="有氧大教室" />
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">Category</div>
                <div class="project-name">有氧大教室</div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="src/assets/index/classroom/有氧小教室.jpg" title="有氧小教室">
              <img class="img-fluid" src="../assets/index/classroom/有氧小教室.jpg" alt="有氧小教室" />
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">Category</div>
                <div class="project-name">有氧小教室</div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="src/assets/index/classroom/格鬥教室.jpg" title="格鬥教室">
              <img class="img-fluid" src="../assets/index/classroom/格鬥教室.jpg" alt="格鬥教室" />
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">Category</div>
                <div class="project-name">格鬥教室</div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="src/assets/index/classroom/空中瑜珈.jpg" title="空中瑜珈">
              <img class="img-fluid" src="../assets/index/classroom/空中瑜珈.jpg" alt="空中瑜珈" />
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">Category</div>
                <div class="project-name">空中瑜珈</div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-sm-6">
            <a class="portfolio-box" href="src/assets/index/classroom/飛輪教室.jpg" title="飛輪教室">
              <img class="img-fluid" src="../assets/index/classroom/飛輪教室.jpg" alt="飛輪教室" />
              <div class="portfolio-box-caption p-3">
                <div class="project-category text-white-50">Category</div>
                <div class="project-name">飛輪教室</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- activity-->
  <section class="page-section px-sm-3">
    <div class="container px-4 text-center mybg-light">
      <div class="text-center pt-1">
        <h2>活動消息</h2>
        <hr class="divider" />
      </div>
      <div class="row gx-4 gx-lg-5">
        <div class="col-lg-3 col-md-3" v-for="(  activity, activityindex  ) in   activitys  " :key="activityindex">
          <img :src="activity.activitypic" style="width: 80%;height: 300px;; cursor: pointer;" alt="維修中"
            @click="handleImageClick(activity)">
          <div>
            <h3>{{ activity.activityname }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section class="page-section">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-lg-6 col-xl-6">
          <!-- GoogleMap -->
          <GoogleMap api-key="AIzaSyB3Hjtldwb3Ep_QOvoCs1UZAtkmWNDCJyA" style="width: 100%; height: 100%" :center="center"
            :zoom="15">
            <Marker :options="{ position: center }">
              <InfoWindow>
                <div id="contet" class="fs-5">
                  <h4 class="text-center">Fithub健身房</h4>
                  <p><i class="bi bi-telephone-inbound-fill"></i> 02-2468-0666</p>
                  <p><i class="bi bi-clock-fill"></i>周一至周六 06:00~24:00周日 08:00~24:00</p>
                  <p><i class="bi bi-geo-alt-fill"></i>基隆市信義區東明路177號3F</p>
                </div>
              </InfoWindow>
            </Marker>
          </GoogleMap>
        </div>
        <div class="col-lg-6 col-xl-6 text-center">
          <div class="pt-1">
            <h2 class="mt-0">聯絡我們</h2>
            <hr class="divider" />
          </div>
          <div class="row gx-4 gx-lg-5 justify-content-center mb-5">
            <div>
              <!-- Name input -->
              <div class="form-floating mb-4">
                <input class="form-control" id="name" type="text" v-model="formData.name" />
                <label for="name">Full Name</label>
              </div>
              <!-- Email address input -->
              <div class="form-floating mb-4">
                <input class="form-control" id="email" type="email" v-model="formData.email" />
                <label for="email">Email</label>
              </div>
              <!-- Phone number input -->
              <div class="form-floating mb-4">
                <input class="form-control" id="phone" type="tel" v-model="formData.phone" />
                <label for="phone">Phone number</label>
              </div>
              <!-- subject input -->
              <div class="form-floating mb-4">
                <select v-model="formData.subject" id="subject" class="form-control">
                  <option>訂單疑問</option>
                  <option>場地租借</option>
                  <option>課程相關</option>
                  <option>廠商洽談</option>
                  <option>其他</option>
                </select>
                <label for="subject">subject</label>
              </div>
              <!-- Message input -->
              <div class="form-floating mb-4">
                <textarea class="form-control" id="message" type="text" style="height: 10rem"
                  v-model="formData.message"></textarea>
                <label for="message">Message</label>
              </div>
              <!-- Submit Button -->
              <div><button class="btn btn-primary btn-xl" id="submitButton" type="submit"
                  @click="submitForm">Submit</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <button ref="mybutton" class="btn btn-primary " id="btn-back-to-top">TOP</button>
</template>


<script setup>
import axios from 'axios'
import { ref, onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";
// 橫向卷軸
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

// 滾動動畫
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

// 動態ALERT
import Swal from 'sweetalert2'

const url = import.meta.env.VITE_API_JAVAURL


const settings = {
  itemsToShow: 1,
  snapAlign: 'center',
};

const breakpoints = {
  700: {
    itemsToShow: 3.5,
    snapAlign: 'center',
  },
  1024: {
    itemsToShow: 5,
    snapAlign: 'start',
  },
};



// 設定GoogleMap
const center = { lat: 22.62808625882824, lng: 120.29252321578828 };

// 取得路由物件
const router = useRouter();

// Top按鈕
const mybutton = ref(null);

// 儲存活動資訊
const activitys = ref([])

// 儲存教練資訊
const coachPics = ref([])

//取得表單內容
const formData = reactive({
  name: '',
  email: '',
  phone: '',
  message: '',
  subject: ''
})


// 取得教練資料
const getCoachPics = async () => {
  try {
    const response = await axios.get(`${url}/employees/findCoachDataPicSpecialty`);
    coachPics.value = response.data;
    console.log(coachPics.value);

  } catch (error) {
    console.error('Error:', error);
  }
};

// 取得活動資料並排序和篩選是否顯示
const getActivitys = async () => {
  try {
    const response = await axios.get(`${url}/activity/filteredAndSortedActivities`);
    activitys.value = response.data;
    console.log(activitys.value);

  } catch (error) {
    console.error('Error:', error);
  }
};


// 寄信聯絡我們
const submitForm = async () => {
  try {

    if (
      formData.name === '' ||
      formData.email === '' ||
      formData.phone === '' ||
      formData.message === '' ||
      formData.subject === ''
    ) {
      // 如果有任何一個字段為空，執行錯誤處理邏輯
      Swal.fire({
        title: '請填寫全部欄位。',
        // text: '請填寫全部欄位。',
        icon: 'warning',
        confirmButtonText: '確定'
      })
      return
    }

    const response = await axios.post(`${url}/index/sendEmail`, formData);

    if (response.status === 200) {
      Swal.fire({
        title: '送出成功',
        icon: 'success',
        confirmButtonText: '確定'
      })
    } else {
      Swal.fire({
        title: '送出成功',
        icon: 'error',
        confirmButtonText: '確定'
      })
    }

  } catch (error) {
    console.error('Error:', error);
  }
};

// 點圖片轉到活動頁面
const handleImageClick = (activity) => {
  console.log(activity.activityid);
  try {
    router.push({
      path: "/activity",
      query: {
        activityid: activity.activityid,
      },
    });
  }
  catch (error) {
    console.error('Error:', error);
  }
};


// 返回頁頂
function backToTop() {
  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
}

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    mybutton.value.style.display = 'block';
  } else {
    mybutton.value.style.display = 'none';
  }
}

onMounted(() => {
  AOS.init({
    once: true // 動畫只執行一次
  });
  getActivitys();
  getCoachPics();
  // mybutton.value.addEventListener('click', backToTop);
  // mybutton.value.style.display = 'block';
  // window.addEventListener('scroll', scrollFunction);
  // scrollFunction(); // 初始化時檢查滾動位置以設置按鈕的初始狀態
});

</script>

<style scoped>
#btn-back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: none;
  /* 初始時隱藏按鈕 */
}
</style>