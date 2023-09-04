<template>
    <!-- <div class="masthead">
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
    </div> -->

    <!-- 場地租借 --><!-- 結帳頁面 -->
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
                                    <td>Mark</td>
                                </tr>
                                <tr>
                                    <th scope="row">電話</th>
                                    <td>Jacob</td>

                                </tr>
                                <tr>
                                    <th scope="row">信箱</th>
                                    <td>Larry the Bird</td>
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
</script>