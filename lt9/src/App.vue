<template>
  <div>
    <button @click="handleClick">Click me</button>
    <p>{{ count }}</p>
  </div>
</template>
<script setup>
import { ref } from "vue";
const count = ref(0);
const handleClick = () => {
  count.value++;
};
</script>
<style></style>
