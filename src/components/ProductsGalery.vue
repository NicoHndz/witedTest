<script setup lang="ts">
import type Product from "@/model/product";
import { RouterLink } from 'vue-router';

interface Props {
    productsArray: Product[]
}

defineProps<Props>();
</script>
<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div class="flex flex-col items-center justify-between" v-for="item in productsArray">
            <article>
                <img :src="item.img" />
                <img src="/public/graph2.png" />
            </article>
            <div class="text-center">
                <h2 class="text-lg font-bold pb-2">
                    {{ item.title }}
                </h2>
            </div>
            <div>
                <button class="rounded-full bg-indigo-500 px-2 py-1">
                    <RouterLink :to="`article/${item.id}`"> ver mas detalles</RouterLink>
                </button>
            </div>
        </div>
    </div>
</template>

<style>
article {
    margin: 1em 0;
    position: relative;
    width: 250px;
    transition: all .3s ease;
}

article img:first-child {
    box-shadow: 0 60px 60px -60px rgba(0, 30, 255, 0.5);
    border-radius: 4px;
    object-fit: cover;
    width: 100%;
}

article img:last-child {
    position: absolute;
    width: 150px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    transform: translateY(25%);
    transition: .3s ease;
    opacity: 0;
}

article:hover img:last-child {
    opacity: 1;
    transform: translateY(10%);
}

article:hover {
    transform: perspective(250px) rotateX(10deg) translateY(-5%) translateZ(0);
}

article::before {
    content: '';
    position: absolute;
    bottom: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(to bottom, transparent 10%, rgba(0, 0, 0, .5) 50%, rgba(0, 0, 0) 95%);
    opacity: 0;
    transition: .3s ease;
}

article:hover::before {
    opacity: 1;
}
</style>
