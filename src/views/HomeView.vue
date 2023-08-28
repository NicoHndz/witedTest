<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ProductsGalery from '../components/ProductsGalery.vue'
import type Product from '@/model/product';
import { useProductStore } from "../stores/productsStore";

const store = useProductStore();
const search = ref("");

const productsArray = ref<Product[]>([]);
let filteredProductsArray = ref<Product[]>([]);

const searchProducts = () => {
  filteredProductsArray.value = store.productFilter(search.value);
  console.log(productsArray);
  console.log(filteredProductsArray);
}

onMounted(async () => {
  try {
    await store.getData();
    productsArray.value = store.productsResult;
    console.log(productsArray);
  } catch (e) {
    console.log(e);
  }
});
</script>

<template>
  <header>
    <h1 class="text-2xl font-bold text-center py-2">Conoce nuestros cursos</h1>
  </header>
  <main class="flex flex-col items-center gap-3">
    <input v-model="search" @input="searchProducts"
      class="mb-5 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
      placeholder="Search by Title" type="text" name="search" />
    <ProductsGalery :productsArray="search.trim() !== '' ? filteredProductsArray : productsArray" />
  </main>
</template>

<style>
input {
  color: black;
}
</style>