<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// Lista de elementos a mostrar en el carrusel
const items = [
  'Data Science',
  'Cibersecurity',
  'Computer Engineering',
  'computer Science',
  'Software Engineering',
  'Programming Languages',
];
</script>

<template>
      <div className="relative flex w-full  border-b-4 border-t-4 border-black dark:border-darkBorder bg-white dark:bg-secondaryBlack text-text dark:text-darkText font-base">
      <div className="animate-marquee1 whitespace-nowrap py-12">
        
            <span className="mx-4 text-4xl" v-for="item in items" :key="item">
              {{ item }} | 
            </span>
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-12">
        
            <span className="mx-4 text-4xl" v-for="item in items" :key="item">
                {{ item }} | 
            </span>
      </div>
    </div>
</template>

<style scoped>
</style>