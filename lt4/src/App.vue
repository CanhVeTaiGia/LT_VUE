<template>
  <div>
    <h2>Ref, reactive, computed, watcher</h2>
    <p>{{ val }}</p>
    <p>{{ caculator }}</p>
    <button @click="handleClick">click</button>
  </div>
</template>
<script setup>
import { computed, ref, watch } from "vue";

const val = ref(10);
const caculator = computed(() => {
  return val.value ** 2;
});
const handleClick = () => {
  val.value *= 2;
}

const number = 0;


</script>
<style></style>
