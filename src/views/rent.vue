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
            <div class="col-lg-12 col-md-10">
                <h1>場地租借</h1>
                <hr class="divider" />
                <label class="fs-3">場地:</label>
                <select class="form-select-lg me-sm-5">
                    <option>攀岩教室</option>
                    <option>有氧大教室</option>
                    <option>有氧小教室</option>
                </select>
                <label class="fs-3">日期:</label>
                <input type="date" class="form-control-lg me-sm-5" id="dateInput">
                <label class="fs-3">時段:</label>
                <select class="form-select-lg me-sm-5">
                    <option>上午</option>
                    <option>下午</option>
                    <option>晚上</option>
                </select>
                <button type="submit" class="btn btn-primary btn-lg">預約</button>

                <div id="calendar" class="calendar text-center mt-5">
                </div>
            </div>
        </div>
    </section>


    <!-- rent-->
    <section class="page-section" id="rent">
        <div class="container text-center">
            <h1>場地介紹</h1>
            <hr class="divider" />
            <div class="col-lg-12 col-md-12 text-center">
            </div>
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
                            <td class="col-lg-2 col-md-2"><img src="../assets/index/classroom/攀岩教室.jpg" class="img-fluid">
                            </td>
                        </tr>
                        <tr>
                            <td class="col-lg-2 col-md-2">有氧大教室</td>
                            <td class="col-lg-2 col-md-2">60</td>
                            <td class="col-lg-2 col-md-2">有氧運動、重量訓練、綜合體能、瑜珈、伸展、證照考試</td>
                            <td class="col-lg-2 col-md-2">12000</td>
                            <td class="col-lg-2 col-md-2"><img src="../assets/index/classroom/有氧大教室.jpg" class="img-fluid">
                            </td>
                        </tr>
                        <tr>
                            <td class="col-lg-2 col-md-2">有氧小教室</td>
                            <td class="col-lg-2 col-md-2">30</td>
                            <td class="col-lg-2 col-md-2">有氧運動、重量訓練、綜合體能、瑜珈、伸展</td>
                            <td class="col-lg-2 col-md-2">6000</td>
                            <td class="col-lg-2 col-md-2"><img src="../assets/index/classroom/有氧小教室.jpg" class="img-fluid">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>


<script setup>

import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import { reactive, ref, onMounted } from 'vue'



onMounted(() => {
    //掛載日曆物件
    const calendarEl = document.getElementById('calendar');
    const calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',
        timeZone: 'UTC',
        locale: 'zh-tw',
        height: 700,
        headerToolbar: false,
        events: [
            {
                title: '上午:已預定',
                start: '2023-08-29',
            },
            {
                title: '下午:已預定',
                start: '2023-08-29',
            },
            {
                title: '晚上:已預定',
                start: '2023-08-29',
                url: 'http://google.com/',
            },
        ],
        eventOrder: function (a, b) {
            const order = { '早上:已預定': 1, '中午:已預定': 2, '晚上:已預定': 3 };
            return order[a.title] - order[b.title];
        },
    });
    calendar.render();



    //日期只顯示下個月
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    let nextMonth = currentMonth + 1;
    let nextYear = currentYear;

    const daysInMonth = new Date(nextYear, nextMonth + 1, 0).getDate();

    let nextMonthFormatted = (nextMonth + 1).toString().padStart(2, '0'); // 格式化為雙位數
    let lastDayOfNextMonthFormatted = daysInMonth.toString().padStart(2, '0'); // 格式化為雙位數

    const dateInput = document.getElementById('dateInput');
    dateInput.min = `${nextYear}-${nextMonthFormatted}-01`; // 下個月的第一天
    dateInput.max = `${nextYear}-${nextMonthFormatted}-${lastDayOfNextMonthFormatted}`; // 下個月的最後一天


});

</script>

<style scoped>
.calendar {
    background-color: #fefffa;
}
</style>


