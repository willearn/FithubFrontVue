<script setup>
import { ref, reactive, onMounted } from "vue";
import axios from 'axios';
import router from "@/router";
import memberNavBar from "../components/member/memberNavBar.vue";
import Swal from 'sweetalert2'

const url = import.meta.env.VITE_API_JAVAURL

onMounted(() => {
    // loadDatas()
});

const localStorageEmail = ref({})

const memberData = ref({})

const checkpassword = reactive({
    check: true,
    oldpassword: '',
    newpassword: '',
    againpassword: '',
});

const loadDatas = async () => {
    const response = await axios.get(`${url}/members/byemail/${window.localStorage.getItem("memberemail")}`)
    memberData.value = response.data
    // const response = await axios.post(`${url}/backstageaccounts/findPageByName`, datas)

    // allBackStageAccounts.value = response.data.list
    // allEmps.value = responseEmp.data.list

}

const submit = async () => {
    try {
        const memberid = window.localStorage.getItem("memberid")

        if (!checkpassword.newpassword.trim() ||
            !checkpassword.againpassword.trim() ||
            !checkpassword.check) {
            Swal.fire({
                title: '請輸入資料',
                icon: 'error',
                confirmButtonText: '確定'
            })
            return;
        }

        const response = await axios.put(`${url}/members/changepassword/${memberid}`, checkpassword)
        Swal.fire({
            title: '修改成功',
            icon: 'success',
            confirmButtonText: '確定'
        }).then((result) => {
            if (result.isConfirmed) {
                // 點擊 "確定" 按钮，執行頁面跳转
                router.push({ name: "member" })
            }
        });
    } catch (error) {
        Swal.fire({
            title: '修改失敗',
            icon: 'error',
            confirmButtonText: '確定'
        })
    }
}

const cancel = async () => {
    router.push({ name: "member" })
}

const inputpassword = () => {
    if (checkpassword.newpassword === checkpassword.againpassword) {
        checkpassword.check = true
    } else {
        checkpassword.check = false
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


    <div class="container m-5">
        <div class="row">
            <div class="col-lg-2">
                <memberNavBar></memberNavBar>
            </div>
            <div class="col-lg-8 mydiv">
                <h1 class="text-center">重設密碼</h1>
                <hr>
                <div class="m-3">
                    輸入舊密碼<i class="bi bi-patch-exclamation-fill" title="使用google登入沒有設置過密碼則不用輸入"></i>
                    <span v-if="!checkpassword.oldpassword" class="text-danger">*</span>
                    <input type="password" class="form-control" v-model="checkpassword.oldpassword">
                </div>
                <div class="m-3">
                    輸入新密碼<span v-if="!checkpassword.newpassword" class="text-danger">*</span>
                    <input type="password" class="form-control" v-model="checkpassword.newpassword" @keyup="inputpassword">
                </div>
                <div class="m-3">
                    再次確認密碼<span v-if="!checkpassword.againpassword" class="text-danger">*</span>
                    <input type="password" class="form-control" v-model="checkpassword.againpassword"
                        @keyup="inputpassword">
                    <span v-if="!checkpassword.check" class="text-danger">密碼不相符</span>
                </div>
                <button class="btn  btn-primary m-3" value="儲存" @click="submit">儲存</button>
                <button class="btn  btn-primary m-3 ms-1" value="取消" @click="cancel">返回</button>
            </div>
        </div>
    </div>
</template>



