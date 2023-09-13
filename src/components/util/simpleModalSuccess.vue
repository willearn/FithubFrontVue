<template></template>

<script setup>
import { useDialog } from "naive-ui";
const dialog = useDialog();
const handleSuccess = (contentText) => {
  dialog.success({
    title: "Success",
    content: contentText,
    positiveText: "確定",
    // onPositiveClick: () => {},
  });
};
</script>

<style scoped></style>
