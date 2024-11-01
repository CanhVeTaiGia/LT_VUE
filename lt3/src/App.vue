<template>
  <!-- v-if hiển thị ra dom dựa theo điều kiện được đưa ra -->
  <!-- v-show luôn hiển thị ra dom chỉ khác mỗi display -->
  <div>
    <p>binding property</p>
    <ul>
      <li>1. v-bind</li>
      <li>2. v-if, v-else, v-else-if</li>
      <li>3. v-show</li>
      <li>4. v-for</li>
      <li>5. v-model</li>
    </ul>
    <VueBind />
    <p>*****************</p>
    <VShow />
    <p>******************</p>
    <VIf />
    <p>******************</p>
    <VFor />
    <p>******************</p>
    <VModel/>
    <p>******************</p>
    <Event/>
  </div>
</template>
<script setup>
import Event from "./components/Event.vue";
import VFor from "./components/VFor.vue";
import VIf from "./components/VIf.vue";
import VModel from "./components/VModel.vue";
import VShow from "./components/VShow.vue";
import VueBind from "./components/VueBind.vue";
</script>
<style></style>
