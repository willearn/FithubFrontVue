<script setup>
import axios from "axios";
import { ref, reactive, onMounted } from "vue";

const url = import.meta.env.VITE_API_JAVAURL;

const loginData = reactive({
  memberemail: "",
  memberpassword: "",
  memberphoneno: "",
  membername: "",
  membergender: "",
  membercity: "",
  memberzone: "",
  memberaddress: "",
  memberbirthday: "",
});

const register = async () => {
  //  

  if (
    !loginData.memberemail.trim() ||
    !loginData.memberpassword.trim() ||
    !loginData.memberphoneno.trim() ||
    !loginData.membername.trim() ||
    !loginData.membergender.trim() ||
    !loginData.membercity.trim() ||
    !loginData.memberzone.trim() ||
    !loginData.memberaddress.trim() ||
    !loginData.memberbirthday.trim()
  ) {
    alert("請輸入正確資料")
    return;
  }

  const response = await axios.post(`${url}/members`,loginData);

  //   console.log(response.data);
  //   console.log(response.status);
};

const sendVerificationCode = async() => {
    const response = await axios.post(`${url}/members/sendVerificationCode`);
    console.log(response.status);
}


</script>

<template>
  <div class="masthead">
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
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
            src="../assets/index/classroom/攀岩教室.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/index/classroom/有氧大教室.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../assets/index/classroom/空中瑜珈.jpg"
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
  <section class="page-section" id="about">
    <div class="container">
      <div class="col-lg-4 col-md-4">
        <label class="">信箱</label>
        <input
          type="email"
          class="form-control"
          v-model="loginData.memberemail"
          placeholder="name@example.com"
        />
        <input type="button" value="發送驗證碼" @click="sendVerificationCode">
        <input type="text" placeholder="輸入驗證碼">
        <input type="button" value="驗證">
      </div>
      <div class="col-lg-4 col-md-4">
        <label class="">密碼</label>
        <input type="password" class="form-control" v-model="loginData.memberpassword" />
      </div>
      <div class="col-lg-4 col-md-4">
        <label class="">手機號碼</label>
        <input type="email" class="form-control" v-model="loginData.memberphoneno" />
      </div>
      <div class="col-lg-4 col-md-4">
        <label class="">姓名</label>
        <input type="email" class="form-control" v-model="loginData.membername" />
      </div>
      <div class="col-lg-4 col-md-4">
        <label class="">性別</label>
        <input type="radio" name="gender" value="男" v-model="loginData.membergender" />男
        <input type="radio" name="gender" value="女" v-model="loginData.membergender" />女
      </div>
      <div class="col-lg-4 col-md-4">
        <label class="">縣市</label>
        <input type="text" class="form-control" v-model="loginData.membercity" />
      </div>
      <div class="col-lg-4 col-md-4">
        <label class="">地區</label>
        <input type="text" class="form-control" v-model="loginData.memberzone" />
      </div>
      <div class="col-lg-4 col-md-4">
        <label class="">地址</label>
        <input type="text" class="form-control" v-model="loginData.memberaddress" />
      </div>
      <div class="col-lg-4 col-md-4">
        <label class="">生日</label>
        <input type="date" class="form-control" v-model="loginData.memberbirthday" />
      </div>
      <div class="col-lg-4 col-md-4">
        <input type="button" value="註冊" @click="register()" />
      </div>
    </div>
  </section>
</template>
