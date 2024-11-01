<template>
  <div>
    <button class="border p-[10px]" @click="handleClick(mess)">Nhấn</button>
  </div>
</template>
<script setup>
const handleClick = (mess) => {
  Array.from({ length: 100 }).map((_, index) => {
    console.log("Hello Đắc Sơn", index + 1);
  });
};
const mess = "Hello Đắc Sơn";
</script>
<style lang=""></style>
