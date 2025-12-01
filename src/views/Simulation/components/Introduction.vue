<script setup lang="ts"></script>

<template>
  <div
    class="w-full h-auto border-black border-2 rounded-base border-border shadow-nav dark:shadow-navDark dark:border-darkBorder shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
  >
    <div class="bg-black py-2 px-4 w-full flex items-center">
      <span
        class="text-xl flex items-center w-full gap-1 font-semibold text-main-green"
        ><svg
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
        ¿Qué es la Simulación y Computación Numérica?</span
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
        class="lucide lucide-chevron-down h-5 w-5 shrink-0 transition-transform duration-200"
      >
        <path d="m6 9 6 6 6-6"></path>
      </svg>
    </div>
    <div class="w-full bg-white border-t-2 border-black py-2 px-4">
      <p>
        La Simulación y Computación Numérica es una disciplina que combina
        técnicas matemáticas y computacionales para resolver problemas
        científicos y de ingeniería que no pueden resolverse analíticamente o
        requieren aproximaciones numéricas debido a su complejidad.
      </p>
      <p>
        La <strong>simulación</strong> consiste en crear modelos computacionales
        que imitan el comportamiento de sistemas reales, permitiendo estudiar su
        evolución en el tiempo y analizar diferentes escenarios sin necesidad de
        experimentación física.
      </p>
      <p>
        La <strong>computación numérica</strong> se enfoca en el desarrollo e
        implementación de algoritmos matemáticos para obtener soluciones
        aproximadas a problemas mediante cálculos numéricos, considerando
        siempre el manejo de errores y la precisión de los resultados.
      </p>

      <h3 class="font-bold mt-4">Características principales:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>
          <strong>Aproximación:</strong> Trabaja con soluciones numéricas
          aproximadas en lugar de soluciones exactas.
        </li>
        <li>
          <strong>Iterativa:</strong> Utiliza procesos repetitivos para
          converger hacia soluciones.
        </li>
        <li>
          <strong>Computacional:</strong> Requiere el uso de computadoras para
          realizar cálculos complejos.
        </li>
        <li>
          <strong>Análisis de errores:</strong> Considera y controla los errores
          de redondeo y truncamiento.
        </li>
      </ul>

      <h3 class="font-bold mt-4">Aplicaciones principales:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>Modelado de fenómenos físicos y químicos</li>
        <li>Análisis financiero y riesgo</li>
        <li>Diseño de ingeniería y optimización</li>
        <li>Predicción meteorológica</li>
        <li>Dinámica de fluidos computacional</li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
