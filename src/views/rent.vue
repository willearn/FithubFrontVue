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


    <!-- rent -->
    <section class="page-section" id="rent">
        <div class="container text-center">
            <div class="col-lg-12 col-md-10">
                <h1>場地租借</h1>
                <hr class="divider" />
                <label class="fs-3">場地:</label>
                <select class="form-select-lg me-sm-5" v-model="selectedClassroomId" @change="handleOptionChange">
                    <option disabled selected value="0">請先選擇場地</option>
                    <option v-for="classroom in openClassrooms" :key="classroom.name" :value="classroom.classroomId">
                        {{ classroom.classroomName }}
                    </option>
                </select>
                <label class="fs-3">日期:</label>
                <input type="date" class="form-control-lg me-sm-5" v-model="selectedDate">
                <label class="fs-3">時段:</label>
                <select class="form-select-lg me-sm-5" v-model="selectedTime">
                    <option disabled selected value="0">請選擇時段</option>
                    <option value="早上">早上9:00-12:00</option>
                    <option value="下午">下午14:00-17:00</option>
                    <option value="晚上">晚上18:00-21:00</option>
                </select>
                <button type="submit" class="btn btn-primary btn-lg" @click="reserve">預約</button>
                <span>*僅開放預訂下個月</span>
                <div id="calendar" class="calendar text-center mt-5">
                </div>
            </div>
        </div>
    </section>

    <section class="page-section" id="rent">
        <div class="container text-center">
            <h1>場地介紹</h1>
            <hr class="divider" />
            <div class="col-lg-12 col-md-12">
            </div>
            <div class="col-lg-12 col-md-12">
                <table class="table table-bordered align-middle">
                    <thead>
                        <tr class="table-success">
                            <th>教室名稱</th>
                            <th>容納人數</th>
                            <th>介紹</th>
                            <th>租借價格</th>
                            <th>教室圖片</th>
                            <th>狀態</th>
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
                            <td class="col-lg-2 col-md-2">開放</td>
                        </tr>
                        <tr>
                            <td class="col-lg-2 col-md-2">有氧大教室</td>
                            <td class="col-lg-2 col-md-2">60</td>
                            <td class="col-lg-2 col-md-2">有氧運動、重量訓練、綜合體能、瑜珈、伸展、證照考試
                            </td>
                            <td class="col-lg-2 col-md-2">12000</td>
                            <td class="col-lg-2 col-md-2"><img src="../assets/index/classroom/有氧大教室.jpg" class="img-fluid">
                            </td>
                            <td class="col-lg-2 col-md-2">開放</td>
                        </tr>
                        <tr>
                            <td class="col-lg-2 col-md-2">有氧小教室</td>
                            <td class="col-lg-2 col-md-2">30</td>
                            <td class="col-lg-2 col-md-2">有氧運動、重量訓練、綜合體能、瑜珈、伸展</td>
                            <td class="col-lg-2 col-md-2">6000</td>
                            <td class="col-lg-2 col-md-2"><img src="../assets/index/classroom/有氧小教室.jpg" class="img-fluid">
                            </td>
                            <td class="col-lg-2 col-md-2">開放</td>
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
import { reactive, ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useRentOrderStore } from "../stores/rentorder.js"
import { storeToRefs } from 'pinia'
const url = import.meta.env.VITE_API_JAVAURL

// 使用函式表達式給變數countStore賦值，這邊變數會習慣用import進來的檔案名稱並去除use命名，只要看到Store就是與pinia有關。
// const countStore = useCounterStore()
// 使用解構的方式取得useCounterStore()內的函式
// const { increment } = countStore
// 也可以使用 countStore.increment()來執行函式
// 使用useCounterStore()的變數，不能直接解構變數，會去除掉proxy也就是解包，會造成資料無法響應式，所以要用到storeToRefs這個方法把變數在塞回ref內
// const { count, doubleCount } = storeToRefs(countStore)

const rentOrderStore = useRentOrderStore();
const { selectedClassroom,checkOrder } = storeToRefs(rentOrderStore);
console.log(selectedClassroom.value)

// 取得路由物件
const router = useRouter();

// 取得下個月1號為日曆初始日期
const today = new Date();
const nextMonth = new Date(today.getFullYear(), today.getMonth() + 2, 1);
let year = nextMonth.getFullYear();
let month = String(nextMonth.getMonth()).padStart(2, '0');
let day = String(nextMonth.getDate()).padStart(2, '0');

// 如果月份為 01，年份加 1
if (month === '01') {
    year++;
}
const nextMonthFormatted = `${year}-${month}-${day}`;

const selectedClassroomId = ref(0); // 預設0
const selectedDate = ref(nextMonthFormatted);
const selectedTime = ref(0);
const events = ref([]);
const classroomData = ref([]);
const openClassrooms = ref([]);
const classroomInfo = ref([])

//建立被選的場地物件
const selectedData = reactive({
    classroomid: '',
    classroomName: '',
    classroomPic: '',
    classroomPrice: '',
    rentdate: '',
    renttime: '',
});

// 篩選狀態為開放的場地
const getfindAllClassroomNameAndStatusAndId = async () => {
    try {
        const findAllClassroomNameAndStatusAndId = await axios.get(`${url}/classroom/getClassroomInfo`);
        classroomData.value = findAllClassroomNameAndStatusAndId.data;
        // console.log(classroomData.value);

        // 使用Array.prototype.filter()篩選出classroomStatus為'開放'的對象 filter篩選出為陣列
        openClassrooms.value = classroomData.value.filter(item => item.classroomStatus === '開放');
        // console.log(openClassrooms.value);

    } catch (error) {
        console.error('Error:', error);
    }
};

// 監聽 selectedClassroomId 的變化
watch(selectedClassroomId, (selectedValue) => {
    getfindAllDateTimeFromRentOrderAndclass(selectedValue);
});

// 監聽 selectedDate 的變化
watch(selectedDate, (selectedValue) => {
    // console.log(selectedValue);

});

// 監聽 selectedTime 的變化
watch(selectedTime, (selectedValue) => {
    // console.log(selectedValue);
});

// 檢查預定場地是否被使用，將選擇的資料傳到訂單頁面
const reserve = async () => {
    try {

        if (selectedClassroomId.value === 0) {
            alert('請選擇場地')
            return
            //需修改
        } else if (selectedDate.value === '') {
            alert('請選擇日期')
            return
        } else if (selectedTime.value === 0) {
            alert('請選擇時段')
            return
        }

        //  使用場地id搜尋日期和時段是否使用 回傳BOOLEAN
        selectedData.classroomid = selectedClassroomId.value
        selectedData.rentdate = selectedDate.value
        selectedData.renttime = selectedTime.value
        const classroomAvailability = await axios.post(`${url}/rent/checkClassroomAvailability`, selectedData);
        const responseData = classroomAvailability.data;
        // console.log(responseData)

        if (responseData === true) {
            alert('已被預訂')
        } else {

            // 篩選出選擇的場地資訊並傳到訂單頁面 find篩選出為物件(只返回第一個匹配的元素)
            classroomInfo.value = classroomData.value.find(item => item.classroomId === selectedData.classroomid);
            selectedData.classroomName = classroomInfo.value.classroomName;
            selectedData.classroomPrice = classroomInfo.value.classroomPrice;
            selectedData.classroomPic = classroomInfo.value.classroomPic;
            // console.log(selectedData)

            selectedClassroom.value = selectedData;
            
            // 判斷是否有登入會員
            // const localStorageData = localStorage.getItem('isLogin');

            // if (localStorageData) {
                // 使用router.push query進行頁面跳轉資料存在網址 http://localhost:5173/rentorder?id=123
                router.push({
                    path: "/rentorder",
                    // query: {
                    //     id: "123",
                    //     name: 'tigert'
                    // },
                });
            // } else {
            //     alert('請登入會員')
            //     router.push({
            //         path: "/login",
            //     });
            // }
            // console.log(rentOrder.value)
        }

        // console.log(selectedData)
    } catch (error) {
        console.error('Error:', error);
    }
};


// 顯示日曆已預訂時段
const getfindAllDateTimeFromRentOrderAndclass = async (selectedValue) => {
    try {
        // 取得rentorder日期-時段 class日期-時段
        const findAllDateTimeFromRentOrderAndclass = await axios.get(`${url}/rent/list/${selectedValue}`); // 替換為實際的 API URL
        const allDateTimeFromRentOrderAndclass = findAllDateTimeFromRentOrderAndclass.data; //data為response物件的屬性，通常是返回的JSON格式資料
        // console.log(allDateTimeFromRentOrderAndclass)

        // 處理 allDateTimeFromRentOrderAndclass 的數據，生成 FullCalendar 的事件陣列
        events.value = allDateTimeFromRentOrderAndclass.map(item => {
            return {
                title: `${item[1]}:已預定`,
                start: item[0],
            };
        });
        // console.log(events.value)

        // 建立日曆
        const calendarEl = document.getElementById('calendar');
        const calendar = new Calendar(calendarEl, {
            plugins: [dayGridPlugin],
            // headerToolbar: {
            //     left: '',
            //     center: 'title',
            //     right: '',
            // },
            initialView: 'dayGridMonth',
            initialDate: nextMonthFormatted,
            timeZone: 'UTC',
            locale: 'zh-tw',
            height: 700,
            events: events.value,
            // 將輸入的排序
            eventOrder: function (a, b) {
                const order = { '早上:已預定': 1, '下午:已預定': 2, '晚上:已預定': 3 };
                return order[a.title] - order[b.title];
            },
        });
        calendar.render();


    } catch (error) {
        console.error('Error:', error);
    }
};

onMounted(() => {
    getfindAllClassroomNameAndStatusAndId();
});

</script>

<style scoped>
.calendar {
    background-color: white;
}
</style>


