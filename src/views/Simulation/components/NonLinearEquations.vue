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
        Soluciones de Ecuaciones No Lineales</span
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
        Las <strong>ecuaciones no lineales</strong> son aquellas en las que la
        variable desconocida aparece con exponentes diferentes de 1, productos
        entre variables, funciones trascendentales (seno, coseno, logaritmo,
        exponencial), o cualquier forma que no sea lineal.
      </p>

      <h3 class="font-bold mt-3">Ejemplos de ecuaciones no lineales:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>x² - 4 = 0 (ecuación cuadrática)</li>
        <li>sin(x) - x/2 = 0 (ecuación trascendental)</li>
        <li>e^x - 3x = 0 (ecuación exponencial)</li>
        <li>x³ - 2x + 1 = 0 (ecuación cúbica)</li>
      </ul>

      <p class="mt-3">
        A diferencia de las ecuaciones lineales que tienen soluciones analíticas
        directas, las ecuaciones no lineales generalmente no tienen solución
        cerrada y requieren métodos numéricos para encontrar aproximaciones de
        sus raíces.
      </p>

      <h3 class="font-bold mt-3">Objetivo:</h3>
      <p>
        Encontrar valores de x tales que f(x) = 0, donde f es una función no
        lineal continua.
      </p>

      <h3 class="font-bold mt-3">Tipos de métodos numéricos:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>
          <strong>Métodos de intervalo:</strong> Requieren un intervalo donde se
          garantice la existencia de una raíz (ej: Método de Bisección, Regula
          Falsi)
        </li>
        <li>
          <strong>Métodos de punto fijo:</strong> Comienzan con una aproximación
          inicial y generan una sucesión que converge a la raíz (ej:
          Newton-Raphson, Secante)
        </li>
      </ul>

      <h3 class="font-bold mt-3">Importancia en la práctica:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>Modelado de fenómenos físicos (equilibrio, óptica, mecánica)</li>
        <li>Cálculo de tasas de interés en finanzas</li>
        <li>Análisis de circuitos eléctricos</li>
        <li>Optimización de funciones</li>
        <li>Simulaciones científicas y de ingeniería</li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
