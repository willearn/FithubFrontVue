<script setup>
import NavbarFooter from './components/NavbarFooter.vue'
import NavbarTop from './components/NavbarTop.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
       <NavbarTop></NavbarTop>
       <RouterView></RouterView>
       <NavbarFooter></NavbarFooter>
</template>

<style scoped></style>
