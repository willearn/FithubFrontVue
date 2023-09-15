<script setup>
import { ref, reactive, onMounted } from "vue";
import axios from 'axios';
import router from "@/router";
import memberNavBar from "../components/member/memberNavBar.vue";
import Paging from "../components/member/Paging.vue";
import PageSize from "../components/member/PageSize.vue";
import SearchTextBox from '../components/member/SearchTextBox.vue'
import { useRentOrderStore } from "../stores/rentorder.js"
import { storeToRefs } from 'pinia'

const url = import.meta.env.VITE_API_JAVAURL

onMounted(() => {
    loadDatas()
});


const memberData = ref({})

const rentOrders = ref({});

const totalPages = ref(0);
const datas = reactive({
    start: 0,
    rows: 5,
    memberId: 0,
    rentDate: null,
    sortOrder: "asc",
    sortType: "id",
});


const loadDatas = async () => {
    datas.memberId = window.localStorage.getItem("memberid")

    // const response = await axios.get(`${url}/rent/list/bymemberid/${window.localStorage.getItem("memberid")}`)
    const response = await axios.post(`${url}/rent/list/findPageByDate`, datas)

    console.log(response.data)

    rentOrders.value = response.data.list

    totalPages.value = +datas.rows === 0 ? 1 : Math.ceil(response.data.count / datas.rows)

}

// 點擊未付款時取得該筆訂單資料存到pinia持久化
const getRentOrder = async (id) => {
    let rentOrder = reactive({})
    const response = await axios.get(`${url}/rent/findById/${id}`)
    rentOrder = response.data
    // console.log(rentOrder)

    const rentOrderStore = useRentOrderStore();
    const { selectedClassroom } = storeToRefs(rentOrderStore)

    const rentOrderData = reactive({
        classroomName: rentOrder.classroom.classroomName,
        classroomPic: rentOrder.classroom.classroomPic,
        classroomPrice: rentOrder.classroom.classroomPrice,
        classroomid: rentOrder.classroom.classroomId,
        rentOrderid: rentOrder.rentorderid,
        rentdate: rentOrder.rentdate,
        renttime: rentOrder.renttime
    })
    selectedClassroom.value = rentOrderData
}

//paging 由子元件觸發
const clickHandler = page => {
    datas.start = page - 1
    loadDatas()
}

//一頁幾筆資料
const changeHandler = value => {
    datas.rows = value
    datas.start = 0
    loadDatas()
}

//搜尋
const inputHandler = value => {
    datas.rentDate = value
    datas.start = 0
    loadDatas()
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
                <h1 class="text-center">場地租借訂單</h1>
                <hr>
                <div class="col-3">
                    <PageSize @pageSizeChange="changeHandler"></PageSize>
                </div>
                <div class="col-3">
                    <SearchTextBox @searchInput="inputHandler"></SearchTextBox>
                </div>
                <table id="rentorderTable" class="table table-bordered mt-3">
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
                            <td>{{ rent.classroomName }}</td>
                            <td>
                                <template v-if="rent.rentstatus === '未付款'">
                                    <router-link @click="getRentOrder(rent.rentorderid)" to="/rentorder">{{ rent.rentstatus
                                    }}</router-link>
                                </template>
                                <template v-else>
                                    {{ rent.rentstatus }}
                                </template>
                            </td>
                            <td>{{ rent.rentamount }}</td>
                        </tr>
                    </tbody>
                </table>
                <Paging :totalPages="totalPages" :thePage="datas.start + 1" @abcClick="clickHandler"></Paging>
            </div>
        </div>
    </div>
</template>