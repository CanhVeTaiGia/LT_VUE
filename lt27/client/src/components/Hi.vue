<template>
  <div>
    <input v-model="name" type="text" />
    <button @click="addUser">Thêm cho bố</button>
    <ul>
      <li v-for="(user, index) in users" :key="index">
        <span style="margin-right: 10px">{{ user.name }}</span>
        <button @click="deleteUser(user.id)">Xóa</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
const users = computed(() => store.getters.getUsers);

const name = ref("");

const deleteUser = (id) => {
  store.dispatch("deleteUser", id);
  getUser();
};

const addUser = () => {
  store.dispatch("addUser", {
    name: name.value,
  });
};

const getUser = async () => {
  await store.dispatch("fetchUsers");
};

onMounted(() => {
  getUser();
});
</script>

<style scoped></style>
