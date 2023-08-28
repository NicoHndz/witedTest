<script setup lang="ts">
import { useProductStore } from "../stores/productsStore";
import { onMounted, ref } from "vue";
import { useRoute } from 'vue-router';

const store = useProductStore();

const productsArray = ref();
const route = useRoute();

onMounted(async () => {
    try {
        await store.getOnePost(`${route.params.id}`);
        productsArray.value = store.productsResult;
    } catch (e) {
        console.log(e);
    }
});
</script>
<template>
    <main>
        <div class="flex flex-col lg:flex-row items-center gap-3" v-for="item in productsArray">
            <article>
                <img :src="item.img" />
                <img src="/public/graph1.png" width="200" />
            </article>
            <div class="flex flex-col items-center">
                <div class="text-center">
                    <h2 class="text-2xl pb-3 font-bold tracking-widest">
                        {{ item.title }}
                    </h2>
                    <h2 class="text-xs pb-3 font-bold tracking-widest">
                        {{ item.body }}
                    </h2>
                </div>
                <div>
                    <button class="rounded-full bg-indigo-500 px-2 py-1" @click="$router.back()">volver</button>
                </div>
            </div>
        </div>
    </main>
</template>

<style>
main {
    color: white;
    text-shadow: 1px 1px 2px grey;
}
</style>