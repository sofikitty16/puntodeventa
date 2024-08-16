<script setup>
import { RouterLink } from 'vue-router';
defineProps({to:{type:String}})
</script>

<style lang="scss" scoped>

</style>

<template>
    <RouterLink class="text-white font-bold bg-blue-400 px-10 py-2 rounded-md" :to="{name:to}"><slot></slot></RouterLink>
   
</template>