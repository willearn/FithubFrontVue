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



const verify = reactive({
  email: "",
  verificationcode: "",
});

const verifystatus = ref()

const countdown = ref(0);
let timer;

const verifybutton = reactive({
  button: "發送驗證碼",
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

  if (!verifystatus) {
    alert("請驗證信箱")
    return;
  }

  try {
    const response = await axios.post(`${url}/members`, loginData);
  } catch (error) {

  }
};

const sendVerificationCode = async () => {
  if (!loginData.memberemail.trim()) {
    alert("請輸入email");
    return;
  }
  verify.email = loginData.memberemail;

  try {
    const response = await axios.post(`${url}/verificationcode`, verify);
    startCountdown();
  } catch (error) {
    alert("請輸入正確email")
  }
}

const checkVerificationCode = async () => {
  if (!loginData.memberemail.trim() ||
    !verify.verificationcode.trim()) {
    alert("請輸入email及驗證碼");
    return;
  }
  verify.email = loginData.memberemail;

  try {
    const response = await axios.post(`${url}/verificationcode/check`, verify);
    console.log(response.status);
    verifystatus.value = true;
    console.log("test typeof")
    console.log(typeof verifystatus.value)
  } catch (error) {
    verifystatus.value = false;
  }

}

const startCountdown = () => {

  countdown.value = 60; // 设置倒计时秒数
  timer = setInterval(() => {
    var verifybtn = document.getElementById('verifybtn')
    if (countdown.value > 0) {
      verifybtn.disabled = true;
      verifybutton.button = "重新發送驗證碼(" + countdown.value + ")"
      countdown.value -= 1;

    } else {
      clearInterval(timer); // 倒计时结束时清除定时器
      verifybutton.button = "發送驗證碼"
      verifybtn.disabled = false;
    }
  }, 1000); // 每秒减少1秒
};
</script>

<template>
  <section class="vh-100" style="background-color: #E8E1D4;">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
          <div class="card" style="border-radius: 1rem;">
            <div class="row g-0">
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">
                  <!-- 信箱 -->
                  <div>
                    <label class="form-label mb-1">信箱</label><span v-if="!loginData.memberemail"
                      class="text-danger">*</span><input type="email" class="form-control form-control-lg"
                      v-model="loginData.memberemail" placeholder="abc123456@example.com" />
                    <div class="my-lg-1">
                      <input type="button" v-model="verifybutton.button" @click="sendVerificationCode" id="verifybtn">
                    </div>
                    <input type="text" placeholder="輸入驗證碼" v-model="verify.verificationcode">
                    <input type="button" value="驗證" @click="checkVerificationCode">
                    <label v-if="verifystatus">驗證成功</label>
                  </div>

                  <!-- 密碼 -->
                  <div class="mb-1">
                    <label class="form-label">密碼</label>
                    <span v-if="!loginData.memberpassword" class="text-danger">*</span>
                    <input type="password" class="form-control" v-model="loginData.memberpassword" />
                  </div>

                  <!-- 手機號碼 -->
                  <div class="mb-1">
                    <label class="form-label">手機號碼</label>
                    <span v-if="!loginData.memberphoneno" class="text-danger">*</span>
                    <input type="email" class="form-control" v-model="loginData.memberphoneno" />
                  </div>

                  <!-- 姓名 -->
                  <div class="mb-1">
                    <label class="form-label">姓名</label>
                    <span v-if="!loginData.membername" class="text-danger">*</span>
                    <input type="email" class="form-control" v-model="loginData.membername" />
                  </div>

                  <!-- 性別 -->
                  <div class="mb-1">
                    <label class="form-label">性別</label>
                    <span v-if="!loginData.membergender" class="text-danger">*</span>
                    <input style="width: 1em;" type="radio" name="gender" value="男" v-model="loginData.membergender" />男
                    <input style="width: 1em;" type="radio" name="gender" value="女" v-model="loginData.membergender" />女
                  </div>

                  <!-- 縣市 -->
                  <div class="mb-1">
                    <label class="form-label">縣市</label>
                    <span v-if="!loginData.membercity" class="text-danger">*</span>
                    <input type="text" class="form-control" v-model="loginData.membercity" />
                  </div>

                  <!-- 地區 -->
                  <div class="mb-1">
                    <label class="form-label">地區</label>
                    <span v-if="!loginData.memberzone" class="text-danger">*</span>
                    <input type="text" class="form-control" v-model="loginData.memberzone" />
                  </div>

                  <!-- 地址 -->
                  <div class="mb-1">
                    <label class="form-label">地址</label>
                    <span v-if="!loginData.memberaddress" class="text-danger">*</span>
                    <input type="text" class="form-control" v-model="loginData.memberaddress" />
                  </div>

                  <!-- 生日 -->
                  <div class="mb-1">
                    <label class="form-label">生日</label>
                    <span v-if="!loginData.memberbirthday" class="text-danger">*</span>
                    <input type="date" class="form-control" v-model="loginData.memberbirthday" />
                  </div>

                  <div class="pt-1 mb-1">
                    <button class="btn btn-dark btn-lg btn-block" type="button" @click="submit()">註冊</button>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-5 d-none d-md-block">
                <img src="../assets/index/other/4.jpg" alt="login form" class="img-fluid"
                  style="border-radius: 0 1rem 1rem 0;" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>



  <!-- <section class="page-section" id="about">
    <div class="container">
      <div class="col-lg-4 col-md-4">
        <label class="">信箱</label>
        <span v-if="!loginData.memberemail" class="text-danger">*</span>
        <input type="email" class="form-control" v-model="loginData.memberemail" placeholder="name@example.com" />
        <input type="button" v-model="verifybutton.button" @click="sendVerificationCode" id="verifybtn">
        <input type="text" placeholder="輸入驗證碼" v-model="verify.verificationcode">
        <input type="button" value="驗證" @click="checkVerificationCode">
        <label v-if="verifystatus">驗證成功</label>
      </div>

      <div class="col-lg-4 col-md-4">
        <label class="">密碼</label>
        <span v-if="!loginData.memberpassword" class="text-danger">*</span>
        <input type="password" class="form-control" v-model="loginData.memberpassword" />
      </div>

      <div class="col-lg-4 col-md-4">
        <label class="">手機號碼</label>
        <span v-if="!loginData.memberphoneno" class="text-danger">*</span>
        <input type="email" class="form-control" v-model="loginData.memberphoneno" />
      </div>
      <div class="col-lg-4 col-md-4">
        <label class="">姓名</label>
        <span v-if="!loginData.membername" class="text-danger">*</span>
        <input type="email" class="form-control" v-model="loginData.membername" />
      </div>

      <div class="col-lg-4 col-md-4">
        <label class="">性別</label>
        <span v-if="!loginData.membergender" class="text-danger">*</span>
        <input type="radio" name="gender" value="男" v-model="loginData.membergender" />男
        <input type="radio" name="gender" value="女" v-model="loginData.membergender" />女
      </div>
      <div class="col-lg-4 col-md-4">
        <label class="">縣市</label>
        <span v-if="!loginData.membercity" class="text-danger">*</span>
        <input type="text" class="form-control" v-model="loginData.membercity" />
      </div>
      <div class="col-lg-4 col-md-4">
        <label class="">地區</label>
        <span v-if="!loginData.memberzone" class="text-danger">*</span>
        <input type="text" class="form-control" v-model="loginData.memberzone" />
      </div>
      <div class="col-lg-4 col-md-4">
        <label class="">地址</label>
        <span v-if="!loginData.memberaddress" class="text-danger">*</span>
        <input type="text" class="form-control" v-model="loginData.memberaddress" />
      </div>
      <div class="col-lg-4 col-md-4">
        <label class="">生日</label>
        <span v-if="!loginData.memberbirthday" class="text-danger">*</span>
        <input type="date" class="form-control" v-model="loginData.memberbirthday" />
      </div>
      <div class="col-lg-4 col-md-4">
        <input type="button" value="註冊" @click="register" />
      </div>
    </div>
  </section> -->
</template>
