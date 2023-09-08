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
                    <img src="../assets/index/classroom/攀岩教室.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../assets/index/classroom/有氧大教室.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../assets/index/classroom/空中瑜珈.jpg" class="d-block w-100" alt="...">
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


    <section class="page-section">
        <div class="container text-center">
            <h1>訂單確認</h1>
            <hr class="divider" />
            <div class="col-lg-12 col-md-12">
            </div>
            <div class="col-lg-12 col-md-12">
                <table class="table table-bordered align-middle">
                    <thead class="table-success">
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">圖片</th>
                            <th scope="col">場地</th>
                            <th scope="col">日期</th>
                            <th scope="col">時段</th>
                            <th scope="col">金額</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <img :src="selectedClassroom.classroomPic" style="width: 400px;height: 400px;">
                            </td>
                            <td>{{ selectedClassroom.classroomName }}</td>
                            <td>{{ selectedClassroom.rentdate }}</td>
                            <td>{{ selectedClassroom.renttime }}</td>
                            <td>{{ selectedClassroom.classroomPrice }}</td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit" class="btn btn-primary btn-lg" @click="cancleRentOrder">取消返回</button>
                <button type="submit" class="btn btn-primary btn-lg offset-1" @click="insertRentOrder">送出訂單</button>
            </div>
        </div>
    </section>
</template>

<script setup>
import axios from 'axios'
import { onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router'
import { useNow, useDateFormat } from '@vueuse/core'
import { useRentOrderStore } from "../stores/rentorder.js"
import { storeToRefs } from 'pinia'
const url = import.meta.env.VITE_API_JAVAURL

// 測試:使用query接值
// const id = router.currentRoute.value.query.id;
// const name = router.currentRoute.value.query.name;

// 取得路由物件
const router = useRouter();

// 取得pinia全域
const rentOrderStore = useRentOrderStore();
const { selectedClassroom } = storeToRefs(rentOrderStore);
// console.log(selectedClassroom.value)


// 新增訂單
const insertRentOrder = async () => {
    try {

        // 金流日期需求格式
        const formatted = useDateFormat(useNow(), 'YYYY/MM/DD HH:mm:ss')
        
        // 建立綠界需要的訂單資訊
        const ecpayRentOrder = reactive({
            rentorderid: '',
            rentorderdate: formatted.value,
            rentamount: selectedClassroom.value.classroomPrice,
            classroomname: selectedClassroom.value.classroomName
        });

        ecpayRentOrder.rentorderid = selectedClassroom.value.rentOrderid;

        // ecpay請求 會回傳字串form表單
        const ecpayResponse = await axios.post(`${url}/ecpay/ecpayCheckout`, ecpayRentOrder);
        const ecpayCheckout = ecpayResponse.data
        console.log(ecpayCheckout)

        // 建立一个隱藏的div元素，將表單內容放入
        const hiddenDiv = document.createElement('div');
        hiddenDiv.style.display = 'none'; // 隐藏这个元素
        hiddenDiv.innerHTML = ecpayCheckout;

        // 將隱藏的div添加到網頁中
        document.body.appendChild(hiddenDiv);

        // 找到表單元素
        const form = hiddenDiv.querySelector('form');
        if (form) {
            // 觸發表單自動提交
            form.submit();
        } else {
            console.error('找不到表單元素');
        }

    } catch (error) {
        console.error('insertRentOrder Error:', error);
    }
};


// 取消訂單
const cancleRentOrder = async () => {
    const checkDelete = window.confirm('確定要取消訂單嗎？');
    if (checkDelete) {
        try {
            alert('已取消')
            const response = await axios.delete(`${url}/rent/delete/${selectedClassroom.value.rentOrderid}`);
            console.log(response.data);
            selectedClassroom.value = null;
            router.back();
        } catch (error) {
            console.error('cancleRentOrder Error:', error);
        }
    } else {

    }
};


onMounted(() => {

});
</script>