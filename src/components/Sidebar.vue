<script setup lang="ts"></script>

<template>
  <aside class="w-[10vw] h-full overflow-y-auto scrollbar bg-white border-r-4 border-black">
      <ul class="flex flex-col">
        <li class="block border-b-4 border-r-4 border-black dark:border-darkNavBorder p-4 text-xl font-heading">item</li>
        <li class="block border-b-4 border-r-4 border-black dark:border-darkNavBorder p-4 text-xl font-heading">item</li>
        <li class="block border-b-4 border-r-4 border-black dark:border-darkNavBorder p-4 text-xl font-heading">item</li>
        <li class="block border-b-4 border-r-4 border-black dark:border-darkNavBorder p-4 text-xl font-heading">item</li>
        <li class="block border-b-4 border-r-4 border-black dark:border-darkNavBorder p-4 text-xl font-heading">item</li>
        <li class="block border-b-4 border-r-4 border-black dark:border-darkNavBorder p-4 text-xl font-heading">item</li>
        <li class="block border-b-4 border-r-4 border-black dark:border-darkNavBorder p-4 text-xl font-heading">item</li>
        <li class="block border-b-4 border-r-4 border-black dark:border-darkNavBorder p-4 text-xl font-heading">item</li>
        <li class="block border-b-4 border-r-4 border-black dark:border-darkNavBorder p-4 text-xl font-heading">item</li>
        <li class="block border-b-4 border-r-4 border-black dark:border-darkNavBorder p-4 text-xl font-heading">item</li>
        <li class="block border-b-4 border-r-4 border-black dark:border-darkNavBorder p-4 text-xl font-heading">item</li>
        <li class="block border-b-4 border-r-4 border-black dark:border-darkNavBorder p-4 text-xl font-heading">item</li>
    </ul>
</aside>
</template>


<style scoped>
.scrollbar{
    --sb-track-color: #fff;
  --sb-thumb-color: #000;
  --sb-size: 16px;
    scrollbar-color: var(--sb-thumb-color) var(--sb-track-color);
}
</style>
