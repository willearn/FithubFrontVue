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
    <!-- 購物車 -->
    <section class="page-section" id="about">
        <div style="position:relative; top: 20%; left: 350px;">
            <div class="position-relative m-5">
                <div class="progress" style="height: 15px;width: 1050px;">
                    <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0"
                        aria-valuemax="100">25%
                    </div>
                </div>
            </div>
            <div class="d-grid gap-3" style="width: 50%; height: 60%; ">
                <div class="p-2 bg-light border">
                    <ul class="nav">
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
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">我的訂單</h5>
                        <p class="card-text">總金額:</p>
                        <a href="#" class="btn btn-primary">結帳</a>
                    </div>
                </div>
                <router-link class="btn btn-secondary mt-5" to="/checkout">繼續購物</router-link>
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
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
        <router-link class="btn btn-secondary mt-5" to="/checkout">結帳頁面</router-link>


    </section>
</template>

<script setup>
</script>