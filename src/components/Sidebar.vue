<script setup lang="ts">
import { ref } from 'vue';
import { useSubjectsStore } from '../store/subjects.store';

const store = useSubjectsStore()

const subjects = ref()

store.loadSubjects()


subjects.value=store.getAllSubjects
</script>

<template>
  <aside class="w-[250px] h-full overflow-y-auto scrollbar bg-white border-r-4 border-black">
      <ul class="flex flex-col">
        <li class="block border-b-4 border-r-4 border-black dark:border-darkNavBorder p-4 text-2xl font-heading cursor-pointer hover:bg-main-green font-semibold" v-for="subject in subjects" :key="subject.name">{{ subject.name }}</li>
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
