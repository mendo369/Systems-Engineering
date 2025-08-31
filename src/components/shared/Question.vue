<script setup lang="ts">
import { ref } from 'vue'
import Code from './Code.vue'

const props = defineProps<{
  text: string
  code: string
  language: string
  showSolutionButton: boolean
}>()

const showSolution = ref(false)

</script>

<template>
  <div class="space-y-4">
    <!-- Tarjeta del ejemplo -->
    <div
      class="w-full h-auto border-black border-2 rounded-base border-border shadow-nav dark:shadow-navDark dark:border-darkBorder shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
    >
      <div class="bg-black py-2 px-4 w-full flex items-center justify-between">
        <span
          class="text-xl flex items-center gap-1 font-semibold text-main-green"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-terminal h-4 w-4 text-main-green"
          >
            <polyline points="4 17 10 11 4 5"></polyline>
            <line x1="12" x2="20" y1="19" y2="19"></line>
          </svg>
          Ejemplo
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-down h-5 w-5 shrink-0 transition-transform duration-200"
          :class="{ 'rotate-180': showSolution }"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </div>
      <div class="w-full bg-white border-t-2 border-black py-2 px-4">
        <p class="text-sm leading-relaxed" v-html="text"></p>
        <div class="mt-3" v-if="showSolutionButton">
          <button 
            @click="showSolution = !showSolution"
            class="bg-main-green hover:bg-green-600 text-black font-semibold py-2 px-4 rounded transition-colors"
          >
            {{ showSolution ? 'Ocultar solución' : 'Ver posible solución' }}
          </button>
          
          <div v-if="showSolution" class="mt-3">
            <Code 
              :language="language" 
              :code="code"
            ></Code>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Si necesitas estilos adicionales específicos */
.rotate-180 {
  transform: rotate(180deg);
}
</style>