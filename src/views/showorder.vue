<script setup>
import { ref, reactive, onMounted } from "vue";
import axios from 'axios';
import router from "@/router";
import memberNavBar from "../components/member/memberNavBar.vue";
import Carousel from '../components/Carousel.vue'


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
    <Carousel></Carousel>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-lg-2">
                <memberNavBar></memberNavBar>
            </div>
            <div class="col-lg-8 mydiv">
                <h1 class="text-center">課程訂單</h1>
                <hr>
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