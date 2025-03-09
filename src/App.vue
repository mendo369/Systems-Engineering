<script setup lang="ts">
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue';
import Syllabus from './components/Syllabus.vue'
</script>

<template>
  <section class="w-full h-full overflow-hidden flex flex-col">
    <Header></Header>
    <section class="flex overflow-hidden flex-auto">
      <Sidebar></Sidebar>
      <Syllabus></Syllabus>
    </section>
  </section>

</template>

<style scoped></style>
