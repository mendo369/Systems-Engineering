<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
<section class="w-full flex justify-center overflow-y-auto overflow-x-hidden  h-full scrollbar-none">
    <RouterView></RouterView>
</section>
</template>


<style scoped>
.scrollbar-none{
    scrollbar-width: none;
}
</style>
