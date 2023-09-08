<template>
  <h1>{{ courseName }}課程課表</h1>
  <FullCalendar :options="calendarOptions" />
</template>

<script setup>
/*
  imports
*/
import { ref } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";

/*
  props
*/
const props = defineProps({
  courseName: String,
});

/*
  Build Full Calendar
*/
const calendarOptions = ref({
  plugins: [dayGridPlugin],
  initialView: "dayGridMonth",
  weekends: true,
  height: 650,
  aspectRatio: 1,
  // timeZone: 'UTC',
  locale: "en-us",
  buttonText: { today: "今日" },
  events: [{ title: "Meeting", start: new Date() }],
});
</script>

<style scoped></style>
