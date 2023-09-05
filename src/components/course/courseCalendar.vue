<template>
    <h1>{{ courseName }}課程課表</h1>
    <FullCalendar :options=calendarOptions />
</template>
    
<script setup>
/*
  imports
*/
import { ref } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'

/*
  props
*/
const props = defineProps({
    courseName: String,

})

/*
  Build Full Calendar
*/
const calendarOptions = ref({
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: true,
    height: 600,
    aspectRatio: 2,
    // timeZone: 'UTC',
    locale: 'en-us',
    events: [
        { title: 'Meeting', start: new Date() }
    ],
})
</script>
    
<style scoped></style>