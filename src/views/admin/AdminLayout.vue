<script setup>
import AdminNav from '@/components/AdminNav.vue';
</script>

<style lang="scss" scoped>

</style>

<template>
    <div>
<AdminNav></AdminNav>
    <div>
        <RouterView>            
        </RouterView>
    </div>
    </div>
</template>