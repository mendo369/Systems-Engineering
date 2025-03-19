<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <section
    class="w-full flex justify-center overflow-y-auto overflow-x-hidden h-full scrollbar-thin"
  >
    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path" />
      </transition>
    </router-view>
  </section>
</template>

<style scoped>
.scrollbar-thin {
  scrollbar-width: thin;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
