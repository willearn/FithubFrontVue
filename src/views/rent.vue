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
import axios from 'axios'
import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import { reactive, ref, onMounted } from 'vue'

const url = import.meta.env.VITE_API_JAVAURL
const events = ref([]);




// 從伺服器獲取 JSON 格式課堂資料
const getfindAllclassDateAndclassTime = async () => {
    try {

        // 取得class日期和時段
        const findAllclassDateAndclassTime = await axios.get(`${url}/classes/findAllclassDateAndclassTime`); // 替換為實際的 API URL
        const AllclassDateAndclassTime = findAllclassDateAndclassTime.data; //data為response物件的屬性，通常是返回的JSON格式資料
        // console.log('AllclassDateAndclassTime:' + AllclassDateAndclassTime)

        // 取得rentorder日期和時段
        const findAllrentdateAndrenttime = await axios.get(`${url}/rent/findAllrentdateAndrenttime`); // 替換為實際的 API URL
        const AllrentdateAndrenttime = findAllrentdateAndrenttime.data; //data為response物件的屬性，通常是返回的JSON格式資料
        // console.log('AllrentdateAndrenttime:' + AllrentdateAndrenttime)


        // 合併陣列去重
        const combineAndDeduplicate = (arr1, arr2) => {
            const combinedSet = new Set([...arr1, ...arr2].map(item => JSON.stringify(item)));
            return Array.from(combinedSet).map(item => JSON.parse(item));
        };

        const combinedAndDeduplicatedItems = combineAndDeduplicate(AllclassDateAndclassTime, AllrentdateAndrenttime);
        // console.log(combinedAndDeduplicatedItems);

        // 處理 combinedAndDeduplicatedItems 的數據，生成 FullCalendar 的事件陣列
        events.value = combinedAndDeduplicatedItems.map(item => {
            return {
                title: `${item[1]}:已預定`,
                start: item[0],
            };
        });
        // console.log(events.value)

    } catch (error) {
        console.error('Error:', error);
    }
};


onMounted(async () => {
    await getfindAllclassDateAndclassTime();

    // 固定日曆為下個月一號
    const today = new Date();
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 2, 1);

    let year = nextMonth.getFullYear();
    const month = String(nextMonth.getMonth()).padStart(2, '0');
    const day = String(nextMonth.getDate()).padStart(2, '0');

    // 如果月份為 01，年份加 1
    if (month === '01') {
        year++;
    }

    const nextMonthFormatted = `${year}-${month}-${day}`;

    //建立日曆
    const calendarEl = document.getElementById('calendar');
    const calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin],
        headerToolbar: {
            left: '',
            center: 'title',
            right: '',
        },
        initialView: 'dayGridMonth',
        initialDate: nextMonthFormatted,
        timeZone: 'UTC',
        locale: 'zh-tw',
        height: 700,
        events: events.value,
        //將輸入的排序
        eventOrder: function (a, b) {
            const order = { 'morning:已預定': 1, 'afternoon:已預定': 2, 'night:已預定': 3 };
            return order[a.title] - order[b.title];
        },
    });
    calendar.render();
});

</script>

<style scoped>
.calendar {
    background-color: white;
}
</style>


