<template>
  <div>
    <button @click="getJob">Nhấn</button>
    <button @click="addTodo">Thêm</button>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const getJob = () => {
  console.log(store.getters.getTodos);
};
const count = ref(0);
const addTodo = () => {
  count.value++;
  store.commit("addTodo", {
    id: 1,
    title: `Todo ${count.value}`,
    status: false,
  });
};
</script>
<style></style>
