<template>
  <router-view v-slot="{ Component }">
    <Suspense>
      <!-- Thành phần các component sử dụng cơ chế lazy loading -->
      <template #default>
        <div>
          <!-- Wrapping in a div ensures a single root node -->
          <component :is="Component" />
        </div>
      </template>
      <!-- Hiệu ứng loading trước khi tải trang -->
      <template #fallback>
        <div>Loading ....</div>
      </template>
    </Suspense>
  </router-view>
</template>

<script setup></script>
<style></style>
