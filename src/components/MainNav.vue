<script setup>
import Link from './Link.vue';
</script>

<style lang="scss" scoped>

</style>

<template>
    <header class="px-10 py-5 bg-cyan-700 flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between absolute top-0 w-full z-10">
    <div>
        <img src="../../public/img/pet.png" alt="logo" width="40" height="40" >
<h1 class="text-3xl text-white font-black">Oh my<span class=" text-violet-500"> Pet!</span></h1>
    </div>
    <nav>
 <Link to="admin">Administrar</Link>
    </nav>
</header>
</template>
