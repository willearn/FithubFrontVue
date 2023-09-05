<template>
    <h1>OO課程課表</h1>
    <FullCalendar :options='calendarOptions' />
</template>
    
<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
export default {
    components: {
        FullCalendar // make the <FullCalendar> tag available
    },
    data: function () {
        return {
            calendarOptions: {
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
            }
        }
    }
}
</script>
    
<style scoped></style>