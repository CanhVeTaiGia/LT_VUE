<template >
    <div>
        <ul>
            <li v-for="x in number":key="x">
                {{ x, number }}
            </li>
        </ul>
    </div>
</template>
<script setup>
    const number = 10
</script>
<style >
    
</style>