<template>
  <div>
    <p v-if="isShow">Hiển thị V-if</p>
    <ul>
        <li v-if="age > 30">Tuổi trung niên</li>
        <li v-else-if="age > 18">Thanh niên</li>
        <li v-else="age > 6">Con nít</li>
    </ul>
  </div>
</template>
<script setup>
const isShow = true;
const age = 20;
</script>
<style></style>
