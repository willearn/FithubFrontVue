<template>
    <!-- 結帳頁面 -->
    <section class="page-section" id="about">
        <div class="container">
            <div style="position:relative; top: 20%; left: 350px;">
                <div class="position-relative m-5">
                    <div class="progress" style="height: 15px;width: 1050px;">
                        <div class="progress-bar" role="progressbar" style="width: 75%;" aria-valuenow="75"
                            aria-valuemin="0" aria-valuemax="100">75%
                        </div>
                    </div>
                </div>
                <div class="d-grid gap-3" style="width: 50%; height: 60%; ">
                    <div style="width: 12rem;position: absolute;right: 38%;">
                        <div class="card" style="width: 15rem; ">
                            <div class="card-body">
                                <h5 class="card-title">Total:</h5>
                                <p class="card-text">NT$666</p>
                                <div class="d-grid gap-3 col-12 mx-auto">
                                    <button @click="postDataToApi" class="btn btn-primary">結帳</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <table class="table caption-top">
                            <caption>訂單項目</caption>
                            <thead class="table-light">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">課程名稱</th>
                                    <th scope="col">課程教練</th>
                                    <th scope="col">課程時間</th>
                                    <th scope="col">單價</th>
                                    <th scope="col">折扣金額</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>

                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>$2000</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>$2000</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>$2000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div style="width: 900px; display: inline-block;">
                        <div style="display: inline-block;">
                            <table class="table caption-top" style="width: 450px;">
                                <caption>訂購人資訊</caption>
                                <thead>

                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">姓名</th>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">電話</th>
                                        <td></td>

                                    </tr>
                                    <tr>
                                        <th scope="row">信箱</th>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div style="display: inline-block;">
                            <table class="table caption-top" style="width: 400px; position: relative;left: 10%;">
                                <caption>付款方式</caption>
                                <thead>
                                    <tr>
                                        <th>
                                            <img src="../assets/index/other/ECPay.png" style="width: 200px;height: auto;">
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import axios from 'axios'
import { reactive, ref, onMounted } from 'vue'
import { useNow, useDateFormat } from '@vueuse/core'
const URL = import.meta.env.VITE_API_JAVAURL



// 根據你的資料結構組合需要的資料
const dataToSend = {    
    orderDate: '',
    orderCondition: '未付款', // 寫死!!
    memberId: 5, 
    orderTotalAmount: 100, // for (課程-折扣)
    orderPaymentMethod: 'Credit Card', // 先寫死
    orderstate: 1, //寫死
    orderItem: [
        {
            classId: 1,
            couponId: 1,
        },
        {
            classId: 3,
            couponId: 3,
        },
    ],
};



const postDataToApi = async () => {
    try {
        // 時間為訂單成立時間,使用vueuse套件生成        
        const formatted = useDateFormat(useNow(), 'YYYY/MM/DD HH:mm:ss')
        console.log(formatted.value)
        // 生成後將值，塞給dataToSend.orderDate
        dataToSend.orderDate = formatted.value;

        // 發送 POST 請求到後端 API
        const response = await axios.post('http://localhost:8080/fithub/orders', dataToSend);
        console.log(response.data)
        // 建立傳送給綠界的物件
        // 並把新增order的response傳給ecpayorderitem        
        const responseData = response.data
        const ecpayorderitem = {
                orderId: responseData.orderId,
                orderdate: responseData.orderDate                
            };
        console.log(ecpayorderitem);
            
        if (response.status === 200) {            

            // ecpay請求 會回傳字串form表單
            const ecpayResponse = await axios.post(`${URL}/ecpay/ecpayCheckoutOrder`, ecpayorderitem);
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
                console.error('找不到表单元素');
            }
        } else {
            // 其他狀態碼，可能需要進行錯誤處理
            console.error('請求失敗，狀態碼：', response.status);
        }

    } catch (error) {
        console.error('發生錯誤', error);
    }
};


</script>
<style scoped>
.text-danger {
    font-size: 8px;
}
</style>