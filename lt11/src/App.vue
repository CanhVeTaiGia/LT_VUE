<template>
  <div class="w-[100%] h-[100vh] flex justify-center items-center">
    <h2 class="text-[32px]">Oai</h2>
    {{ console.log("mouting") }}
    {{ sayhello() }}
  </div>
</template>
<script setup>
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from "vue";
onMounted(() => {
  console.log("mounted");
});
onBeforeUpdate(() => {
  console.log("before update");
});
const sayhello = () => {
  console.log("hello");
};
onUpdated(() => {
  console.log("updated");
});
onBeforeMount(() => {
  console.log("before mount");
});
</script>
<style></style>
