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
                                    <router-link class="btn btn-primary" to="/">結帳</router-link>
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
                                    <td>{{ member.membername }}</td>
                                </tr>
                                <tr>
                                    <th scope="row">電話</th>
                                    <td>{{member.memberphoneno}}</td>

                                </tr>
                                <tr>
                                    <th scope="row">信箱</th>
                                    <td>{{ member.memberemail }}</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                        <div style="display: inline-block;">                        
                        <table class="table caption-top" style="width: 400px; position: relative;left: 10%;" >
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
            <router-link class="btn btn-secondary mt-5" to="/">跳轉金流 結帳成功回首頁</router-link>
        </div>
    </section>
</template>

<script setup>
import axios from 'axios'
import { reactive, ref, onMounted } from 'vue'
const URL = import.meta.env.VITE_API_JAVAURL
//建立優惠券物件
const member = reactive(
    {
        memberid: '',
        memberphoneno: '',
        membername: '',
        memberemail: '',
    });

// 從伺服器獲取 JSON 格式優惠券資料
const getmember = async () => {
    try {
        const response = await axios.get(`${URL}/members/18`);
        // const response = await axios.get(`${URL}/members/${id}`); // 替換為實際的 API URL
        member.value = response.data; //data為response物件的屬性，通常是返回的JSON格式資料
        console.log(member.value)

    } catch (error) {
        console.error('Error getmember data:', error);
    }
};

onMounted(() => {
    getmember();

});
</script>
<style scoped>
.text-danger {
    font-size: 8px;
}
</style>