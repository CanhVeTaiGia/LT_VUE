<template>
  <div>
    <h2>child</h2>
  </div>
</template>
<script setup>
const props = defineProps(["propName", "age"]);
console.log(props);
</script>
<style></style>
