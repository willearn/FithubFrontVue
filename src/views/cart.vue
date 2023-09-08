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
        <div class="container">
            <div style="position:relative; top: 20%; left: 350px;">
                <div class="position-relative m-5">
                    <div class="progress" style="height: 15px;width: 1050px;">
                        <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25"
                            aria-valuemin="0" aria-valuemax="100">25%
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
                        <div class="card" style="width: 15rem; ">
                            <div class="card-body">
                                <h5 class="card-title">Total:</h5>
                                <p class="card-text">NT$666</p>
                                <div class="d-grid gap-3 col-12 mx-auto">
                                    <router-link class="btn btn-primary" to="/checkout">結帳</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-2 bg-light border">
                        <table class="table align-middle">
                            <thead class="table-light">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">課程圖片</th>
                                    <th scope="col">課程名稱</th>
                                    <th scope="col">課程教練</th>
                                    <th scope="col">課程時間</th>
                                    <th scope="col">單價</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>
                                        <img  src=https://picsum.photos/id/17/200    alt="..."  />
                                    </td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>$2000</td>
                                    <td>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            class="bi bi-heart-fill" viewBox="0 0 16 16" style="float: left: ;">
                                            <path fill-rule="evenodd"
                                                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                        </svg><br>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            class="bi bi-trash3-fill" viewBox="0 0 16 16" style="float: left: ;">
                                            <path
                                                d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                        </svg>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>
                                        <img  src=https://picsum.photos/id/10/200    alt="..."  />
                                    </td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>$2000</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>
                                        <img  src=https://picsum.photos/id/12/200    alt="..."  />
                                    </td>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>$2000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <router-link class="btn btn-secondary mt-5" to="/checkout">結帳頁面</router-link>
        </div>
    </section>
</template>

<script setup>
const URL = import.meta.env.VITE_API_JAVAURL
</script>