<script setup lang="ts">
// No necesitas variables ni lógica compleja aquí, pero puedes usarlo para controlar estados si quieres hacerlo interactivo.
</script>

<template>
  <div class="space-y-4">
    <!-- Primera tarjeta -->
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
          Análisis de Algoritmos
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
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </div>
      <div class="w-full bg-white border-t-2 border-black py-2 px-4">
        <p class="text-sm leading-relaxed">
          Los algoritmos pueden ser representados como expresiones o funciones. Por ejemplo, podríamos decir que el algoritmo de la diapositiva anterior se denomine <strong>S(n)</strong>, todos los algoritmos cuentan con un tiempo de ejecución cuya expresión será <strong>T(n)</strong>, la cual representa la función que define la rapidez de ejecución de un programa, en este caso <strong>S</strong> con una entrada de datos de tamaño <strong>n</strong>.
          <br><br>
          <strong>En otras palabras:</strong>
          <br><br>
          <strong>S(n):</strong> Ordena n datos enteros y <strong>T(n):</strong> Tiempo que toma S para ordenar esos n datos.
          <br>
          <strong>T(n)</strong> mide la cantidad de operaciones necesarias para ejecutar completamente un programa <strong>S</strong>.
          <br><br>
          El tiempo de ejecución de un algoritmo (<strong>T(n)</strong>) se mide de acuerdo a 3 casos:
          <ul>
            <li><strong>El peor Caso:</strong> Límite superior de tiempo para la ejecución del algoritmo con cualquier entrada.</li>
            <li><strong>El mejor Caso:</strong> Límite inferior de tiempo para la ejecución del algoritmo con cualquier entrada.</li>
            <li><strong>El caso Promedio:</strong> El valor esperado. Se obtiene suponiendo todas las entradas posibles con igual probabilidad. Poco probable.</li>
          </ul>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>