<template>
    <nav>
        <ul class="pagination col-2">
            <!-- 上一頁 -->
            <li class=" page-item">
                <button class="page-link" @click="toNaborPage(-1)" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </button>
            </li>
            <!-- 挑選任意頁 -->
            <li class="page-item" v-for="index in totalPages" @click="toAnyPage(index)">
                <button class="page-link">{{ index }}</button>
            </li>
            <!-- 下一頁 -->
            <li class="page-item">
                <button class="page-link" @click="toNaborPage(1)" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </button>
            </li>
        </ul>
    </nav>
</template>
    
<script setup>
const props = defineProps({
    totalPages: Number,
})
// console.log(props.totalPages);

const emit = defineEmits(['clickAnyCoursePage-emit', 'clickNaborCoursePage-emit'])

const toNaborPage = (nextOrLast) => {
    let pageChoose = 0
    // 傳送event至parent componont
    emit('clickNaborCoursePage-emit', nextOrLast, pageChoose)
}
const toAnyPage = (pageChoose) => {
    let nextOrLast = 0
    // 傳送event至parent componont
    emit('clickAnyCoursePage-emit', nextOrLast, pageChoose)
}

</script>
    
<style scoped></style>