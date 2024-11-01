<template>
  <div>
    <Child :age="age" :prop-name="value" />
    
  </div>
</template>
<script setup>
import { ref } from "vue";
import Child from "./Child.vue";
const value = "Hello";
const age = ref(20);
</script>
<style></style>
