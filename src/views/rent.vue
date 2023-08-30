<script setup>

</script>

<template>
    <!-- 輪播圖 -->
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

    <!-- rent-->
    <section class="page-section" id="rent">
        <div class="container text-center">
            <h1>租借場地</h1>
            <div class="col-lg-12 col-md-12 text-center">
                <table class="table table-bordered align-middle text-center">
                    <thead>
                        <tr class="table-success">
                            <th>教室名稱</th>
                            <th>容納人數</th>
                            <th>介紹</th>
                            <th>租借價格</th>
                            <th>教室圖片</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>
                            <td class="col-lg-2 col-md-2">攀岩教室</td>
                            <td class="col-lg-2 col-md-2">15</td>
                            <td class="col-lg-2 col-md-2">攀岩場</td>
                            <td class="col-lg-2 col-md-2">3000</td>
                            <td class="col-lg-2 col-md-2"><img src="../assets/index/classroom/攀岩教室.jpg" class="img-fluid"></td>
                        </tr>
                        <tr>
                            <td class="col-lg-2 col-md-2">有氧大教室</td>
                            <td class="col-lg-2 col-md-2">60</td>
                            <td class="col-lg-2 col-md-2">有氧運動、重量訓練、綜合體能、瑜珈、伸展、證照考試</td>
                            <td class="col-lg-2 col-md-2">12000</td>
                            <td class="col-lg-2 col-md-2"><img src="../assets/index/classroom/有氧大教室.jpg" class="img-fluid"></td>
                        </tr>
                        <tr>
                            <td class="col-lg-2 col-md-2">有氧小教室</td>
                            <td class="col-lg-2 col-md-2">30</td>
                            <td class="col-lg-2 col-md-2">有氧運動、重量訓練、綜合體能、瑜珈、伸展</td>
                            <td class="col-lg-2 col-md-2">6000</td>
                            <td class="col-lg-2 col-md-2"><img src="../assets/index/classroom/有氧小教室.jpg" class="img-fluid"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>