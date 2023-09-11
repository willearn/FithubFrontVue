<template>
    <!-- 結帳頁面 -->
    <section class="page-section" id="about">
        <div class="container">
            <div style="position:relative; top: 20%; left: 350px;">
                <div class="position-relative m-5">
                    <div class="progress" style="height: 15px;width: 1150px;">
                        <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50"
                            aria-valuemin="0" aria-valuemax="100">50%
                        </div>
                    </div>
                </div>
                <div class="d-grid gap-0" style="width: 50%; height: 60%; ">
                    <div class="p-2 bg-light border">
                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <a class="nav-link active disabled" aria-current="page" href="#"><u>購物車</u></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><u>我的願望清單</u></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><u>我的折價券</u></a>
                            </li>
                        </ul>



                    </div>
                    <div style="width: 12rem;position: absolute;right: 38%;">
                        <div class="card" style="width: 21rem;">
                            <div class="card-body">
                                <h5 class="card-title">Total:</h5>
                                <p class="card-text">NT$666</p>
                                <div v-if="error" >{{ error }}</div>
                                <!-- 顯示折扣金額 -->
                                <div v-else-if="couponDiscount">Discount$ {{ couponDiscount }}</div>
                                <div class="d-grid gap-3 col-12 mx-auto">
                                    <router-link class="btn btn-primary " to="/ordercheck">結帳</router-link>
                                </div>
                            </div>
                            <hr>
                            <form class="row g-0" style="position: relative; right: -5%;" @submit.prevent="submitCoupon">
                                <div class="col-auto">
                                    <label for="inputPassword2" class="visually-hidden">促銷代碼</label>
                                    <input v-model="couponCode" type="text" class="form-control" id="inputPassword2"
                                        placeholder="促銷代碼">
                                </div>
                                <div class="col-auto">
                                    <button type="submit" class="btn btn-primary mb-3">輸入</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="p-2 bg-light border">
                        <table class="table align-middle">
                            <thead class="table-light">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">圖片</th>
                                    <th scope="col">課程名稱</th>
                                    <th scope="col">課程教練</th>
                                    <th scope="col">課程時間</th>
                                    <th scope="col">單價</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>
                                        <img src="../assets/index/other/4.jpg" style="width: 200px;">
                                    </td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>$2000</td>
                                    
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>
                                        <img src="../assets/index/other/4.jpg" style="width: 200px;">
                                    </td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>$2000</td>
                                    
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>
                                        <img src="../assets/index/other/4.jpg" style="width: 200px;">
                                    </td>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>$2000</td>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="p-2 bg-light border">
                        <div class="form-floating">
                            <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                <option selected>選擇付款方式</option>
                                <option value="1">綠界金流</option>
                            </select>
                            <label for="floatingSelect">Pay with selects</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios'; 

const couponCode = ref('');
const couponDiscount = ref('');
const error = ref('');

const submitCoupon = async () => {
    try {
        const response = await axios.post('http://localhost:8080/fithub/coupons/api/coupon', { couponcode: couponCode.value });

        if (response.status === 200) {
            couponDiscount.value = response.data;
            error.value = '';
        } else {
            error.value = '發生錯誤'; // 处理后端返回的错误
            couponDiscount.value = '';
        }
    } catch (err) {
        console.error(err);
        error.value = '發生錯誤';
        couponDiscount.value = '';
    }
};
</script>