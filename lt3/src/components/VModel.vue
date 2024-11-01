<template>
    <div>
        <input :value="inputText" @input="handleChange" class="border outline-none" type="text" >
        <p>Giá trị bạn nhập là: {{ inputText }}</p>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const inputText = ref('');
const handleChange = (e) => {
    console.log(e.target.value);
    inputText.value = e.target.value
}
</script>
<style>
    
</style>