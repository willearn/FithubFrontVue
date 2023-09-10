<template>
  <h1>{{ courseName }}課程課表</h1>
  <FullCalendar :options="calendarOptions" />
</template>

<script setup>
/*
  imports
*/
import { ref, reactive, onUpdated } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";

/*
  props
*/
const props = defineProps({
  courseName: String,
  calendarEvents: Array,
});

/*
  Emit
*/
const emit = defineEmits(["clickCalendarClassEmit"]);

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
  events: [],
  eventClick: (eventClickInfo) => {
    console.log(eventClickInfo.event._def.publicId);
    let classId = eventClickInfo.event._def.publicId;
    emit("clickCalendarClassEmit", classId);
    console.log("emit to parent");
  },
});

/*
  LifeCycle Hooks
*/
onUpdated(() => {
  // when courseCalendar onMounted, props.calendarEvents still got no value
  calendarOptions.value.events = props.calendarEvents;
});
</script>

<style scoped></style>
