<template lang="">
  <div>
    <p v-bind:style="{ fontSize: size, color: 'red' }">event</p>
    <img class="w-[200px]" v-bind:src="urlImg" v-bind:alt="urlImg" />
  </div>
</template>
<script setup>
const urlImg =
  "https://taoanhdep.com/wp-content/uploads/2024/06/text-2-img-1.jpg";
const size = "100px";
</script>
<style lang=""></style>
