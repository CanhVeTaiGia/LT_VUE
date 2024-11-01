<template>
  <main class="w-[100%] mb-[10px] h-[100vh] flex justify-center items-center">
    <div class="w-[500px] p-[10px] border-[#888] border rounded-[5px]">
      <header class="flex gap-[10px] w-[100%]">
        <input
          v-model="inputValue"
          type="text"
          class="p-[5px] outline-none w-[100%] rounded-[2px] border border-[#888]"
        />
        <button
          @click="handleAddJob"
          class="w-[100px] rounded-[2px] bg-[#08f] text-white p-[10px]"
          >Thêm</button
        >
      </header>
      <ul
        class="w-[100%] rounded-[2px] flex flex-col gap-[5px] border border-[#888] mt-[10px] p-[5px]"
      >
        <li v-for="job in jobs" :key="job.id" class="flex justify-between">
          <span class="flex items-center gap-[10px]">
            <input
              checked="job.status"
              @change="handleChangeStatus(job.id)"
              class="cursor-pointer"
              type="checkbox"
            />
            <p v-if="job.status" class="line-through">{{ job.name }}</p>
            <p v-else>{{ job.name }}</p>
          </span>
          <button
            @click="handleDelete(job.id)"
            class="bg-[#f00] rounded-[2px] text-white w-[78px] p-[5px]"
            >Xóa</button
          >
        </li>
      </ul>
      <footer
        v-if="totalComplete === jobs.length"
        class="w-[100%] rounded-[2px] bg-[#bbb] text-black mt-[10px] p-[5px]"
      >
        Hoàn thành toàn bộ công việc
      </footer>
      <footer
        v-else
        class="w-[100%] rounded-[2px] bg-[#bbb] text-black mt-[10px] p-[5px]"
      >
        Số công việc hoàn thành: {{ totalComplete }} / {{ jobs.length }}
      </footer>
    </div>
  </main>
</template>
<script setup>
import { computed, reactive, ref } from "vue";

const inputValue = ref("");
const jobs = reactive(JSON.parse(localStorage.getItem("jobs") || []));
const handleAddJob = () => {
  if (inputValue.value === "") {
    return console.log("Không được để trống");
  }
  const foundIndex = jobs.findIndex((item) => {
    return item.name === inputValue.value;
  });
  if (foundIndex !== -1) {
    return console.log("Không được trùng tên");
  }
  jobs.push({
    id: Math.floor(Math.random() * 10000000000),
    name: inputValue.value,
    status: false,
  });
  localStorage.setItem("jobs", JSON.stringify(jobs));
  inputValue.value = "";
};
const handleChangeStatus = (id) => {
  const foundIndex = jobs.findIndex((item) => {
    return item.id === id;
  });
  if (foundIndex !== -1) {
    jobs[foundIndex].status = !jobs[foundIndex].status;
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }
};
const handleDelete = (id) => {
  const filtered = jobs.filter((item) => item.id !== id);
  jobs.length = 0;
  jobs.push(...filtered);
  localStorage.setItem("jobs", JSON.stringify(jobs));
};
const totalComplete = computed(() => {
  return jobs.filter((item) => item.status).length;
});
</script>
<style></style>
