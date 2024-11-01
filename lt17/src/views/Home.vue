<template>
  <div>
    <input type="text" v-model="keySearch" />
    <button @click="search">Search</button>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
const keySearch = ref("");
const route = useRoute();
const router = useRouter();
const search = () => {
  router.push({
    query: {
      productName: keySearch.value,
    },
  });
};
const searchValue = computed(() => {
  return route.query.productName;
});
console.log(searchValue);
</script>
<style></style>
