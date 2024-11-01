<template>
  <div class="p-4">
    <header class="p-4">
      <v-btn @click="addUser" color="blue" variant="tonal"> Thêm Người </v-btn>
    </header>
    <main class="p-4"
      ><v-list lines="two">
        <v-list-item
          v-for="(user, i) in users"
          :key="user.id"
          :title="user.name"
          :subtitle="user.email"
        >
          <v-btn class="m-2" color="blue" @click="deleteUser(user.id)"
            >Xóa Người</v-btn
          >
        </v-list-item>
      </v-list>
    </main>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";

const users = ref([]);

const getData = async () => {
  const response = await fetch("http://localhost:8080/users");
  const data = await response.json();
  users.value = [...data];
};

const addUser = async () => {
  const newUser = {
    id: Math.floor(Math.random() * 10000000000),
    name: "Đắc Sơn",
    email: "sonnguyen@gmail.com"
  };
  const res = await fetch("http://localhost:8080/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
  getData();
};

const deleteUser = async (id) => {
  const res = await fetch(`http://localhost:8080/users/${id}`, {
    method: "DELETE",
  });
  getData();
};

onMounted(() => {
  getData();
});
</script>

<style></style>
