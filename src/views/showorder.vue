<script setup>
import { ref, reactive, onMounted } from "vue";
import axios from 'axios';
import router from "@/router";
import memberNavBar from "../components/member/memberNavBar.vue";


const url = import.meta.env.VITE_API_JAVAURL

onMounted(() => {
    loadDatas()
});

const localStorageEmail = ref({})

const memberData = ref({})

const loadDatas = async () => {
    const response = await axios.get(`${url}/members/byemail/${window.localStorage.getItem("memberemail")}`)
    memberData.value = response.data
    // const response = await axios.post(`${url}/backstageaccounts/findPageByName`, datas)

    // allBackStageAccounts.value = response.data.list
    // allEmps.value = responseEmp.data.list

}

const submit = async () => {
    const response = await axios.put(`${url}/members/${memberData.value.memberid}`, memberData.value)

    if (response.status == 200) {
        alert("修改成功")
    }

}

const cancel = async () => {
    router.push({ name: "member" })
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
                <table id="departmentsTable" class="table table-bordered mt-3">
                    <thead class="align-middle text-center">
                        <tr class="table-success">
                            <th>訂單編號</th>
                            <th>租借日期</th>
                            <th>時段</th>
                            <th>教室名稱</th>
                            <th>付款狀態</th>
                            <th>訂單金額</th>
                        </tr>
                    </thead>
                    <tbody class="align-middle text-center">
                        <tr v-for="rent in rentOrders" :key="rent.rentorderid">
                            <td>{{ rent.rentorderid }}</td>
                            <td>{{ rent.rentdate }}</td>
                            <td>{{ rent.renttime }}</td>
                            <td>{{ rent.classroom.classroomName }}</td>
                            <td>{{ rent.rentstatus }}</td>
                            <td>{{ rent.rentamount }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>