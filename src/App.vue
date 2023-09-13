<script setup>
import NavbarFooter from "./components/NavbarFooter.vue";
import NavbarTop from "./components/NavbarTop.vue";
import { RouterLink, RouterView } from "vue-router";
import { NDialogProvider } from "naive-ui";
</script>

<template>
  <NavbarTop></NavbarTop>
  <n-dialog-provider>
    <RouterView></RouterView>
  </n-dialog-provider>
  <NavbarFooter></NavbarFooter>
</template>

<style scoped></style>
