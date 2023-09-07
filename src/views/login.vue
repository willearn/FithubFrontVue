<script setup>
import axios from "axios";
import { login , googleLogin} from "@/api/login"
import router from "@/router"
import { ref, reactive, onMounted } from "vue";
import { GoogleLogin, decodeCredential } from 'vue3-google-login'
import { googleAuthCodeLogin } from "vue3-google-login"
import { googleTokenLogin } from "vue3-google-login"

const url = import.meta.env.VITE_API_JAVAURL

const data = ref()

// const callback = (response) => {
//   data.value = response
// }

const loginData = reactive({
  memberemail: "",
  memberpassword: "",
});

const submit = async () => {
  let res = await login(loginData.memberemail, loginData.memberpassword)
  if (res.status == 0) {
    router.push({ name: "home" })
  }
}

// const loginq = () => {
//   googleAuthCodeLogin().then((response) => {
//     console.log("Handle the response", response)
//   })
// }

// const loginq = () => {
//   googleTokenLogin().then((response) => {
//     console.log("Handle the response", response)
//   })
// }

const callback = async (response) => {
  // This callback will be triggered when the user selects or login to
  // his Google account from the popup
  console.log("Handle the response", response)

  const userData = decodeCredential(response.credential)
  console.log("Handle the userData", userData.email)
  console.log("Handle the userData", userData.name)

  let res = await googleLogin(userData.email , userData.name)
  if(res.status == 0){
    router.push({ name: "home" })
  }
}


</script>

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
          <img src="../assets/index/classroom/攀岩教室.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/index/classroom/有氧大教室.jpg" class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src="../assets/index/classroom/空中瑜珈.jpg" class="d-block w-100" alt="..." />
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
  <section class="page-section" id="about">
    <div class="container">
      <div class="col-lg-4 col-md-4">
        <label class="">Email address</label>
        <input type="email" class="form-control" v-model="loginData.memberemail" placeholder="name@example.com" />
      </div>
      <div class="col-lg-4 col-md-4">
        <label class="">password</label>
        <input type="password" class="form-control" v-model="loginData.memberpassword" />
      </div>
      <div class="col-lg-4 col-md-4">
        <input type="button" value="登入" @click="submit()" />
        <router-link to="/register">註冊</router-link>
        <GoogleLogin :callback="callback" />
        <!-- <button @click="loginq">Login Using Google</button> -->
      </div>  
    </div>
  </section>
  
</template>

<style scoped>
p {
  margin-top: 12px;
  word-break: break-all;
}
</style>
