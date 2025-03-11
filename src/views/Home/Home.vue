<script setup lang="ts">
import Description from './components/Description.vue';
import Hello from './components/Hello.vue';
import KnowledgeAreas from './components/KnowledgeAreas.vue';
import SyllabusCarousel from './components/SyllabusCarousel.vue';
import Footer from './components/Footer.vue';
import Benefits from './components/Benefits.vue';
import Comments from './components/Comments.vue';
import ComeOn from './components/ComeOn.vue';
import Collaboration from './components/Collaboration.vue';
</script>

<template>
  <div class="w-full h-full flex flex-col items-center">
    <div class="flex w-[90%]">
        <div class="flex flex-col gap-4 w-1/2 justify-center">
            <Hello></Hello>
            <Description></Description>
        </div>
        <SyllabusCarousel></SyllabusCarousel>
    </div>
    <KnowledgeAreas></KnowledgeAreas>
    <Benefits></Benefits>
    <Comments></Comments>
    <Collaboration></Collaboration>
    <ComeOn></ComeOn>
    <Footer></Footer>
  </div>
</template>

<style scoped></style>
