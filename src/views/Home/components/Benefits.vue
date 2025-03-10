<script setup lang="ts">
import BenefitsData from '../../../data/benefits.json'
</script>



<template>
  <div class="flex flex-wrap">
    <div v-for="benefit in BenefitsData" :key="benefit.title" class="benefit w-1/2 h-[250px] border-4 border-black py-6 pl-10  pr-20 flex flex-col justify-center">
        <div class="flex items-center gap-2">
            <img :src="benefit.icon" alt="" class="w-14 h-14"> <h1 class="text-4xl font-semibold">{{ benefit.title }}</h1>
        </div>
        <p class="text-2xl">{{ benefit.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.benefit:nth-child(1),
.benefit:nth-child(4){
    @apply bg-main-green
}
</style>
