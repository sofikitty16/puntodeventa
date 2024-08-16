<script setup>
import { RouterLink, useRoute } from 'vue-router';
import Link from './Link.vue';
const route = useRoute();
const estaActivo = (name) => route.name === name;
</script>

<style lang="scss" scoped>

</style>

<template>
     <header class="px-10 py-5 bg-cyan-700 flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between absolute top-0 w-full z-10">
    <div>
        <img src="../../public/img/pet.png" alt="logo" width="40" height="40" >
<h1 class="text-3xl text-white font-black">Oh my<span class=" text-violet-500"> Pet!</span></h1>
    </div>
  <nav class="space-x-4">
    <RouterLink  :to="{name:'productos'}" class="text-white font-bold p-2 rounded" v-bind:class="{'border-b-4 border-violet-400 text-violet-400':estaActivo('productos')}">Productos</RouterLink>
    <RouterLink :to="{name:'sales'}" class="text-white font-bold p-2 rounded" v-bind:class="{'border-b-4 border-violet-400 text-violet-400':estaActivo('sales')}" >Ventas</RouterLink>
    <Link to="shop">Tienda</Link>
  </nav>
</header>
    <div>
<h3>Desde AdminNav</h3>
    </div>
</template>