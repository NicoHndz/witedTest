<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
    <section>
        <header class="flex flex-col items-center gap-3 ">
            <h1 class="text-5xl font-bold text-center">Educacion que transforma vidas</h1>
            <img src="/public/header.png" width="200" />
        </header>
        <RouterView />
    </section>
</template>

<style>
section {
    color: white;
    text-shadow: 1px 1px 2px grey;
}

section {
    min-height: 100vh;
    padding: 3em 2em;
    background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%);
}
</style>
