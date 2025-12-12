<!-- @/components/simulation/Interpolation.vue -->
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
        Interpolación: Métodos y Aplicaciones</span
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
        La interpolación es una técnica para encontrar una función (usualmente
        un polinomio) que pase exactamente por un conjunto dado de puntos
        discretos. Este taller cubre varios métodos y sus usos.
      </p>

      <h3 class="font-bold mt-3">Interpolación de Lagrange:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>
          Adecuada para conjuntos pequeños de puntos o cuando no están
          equiespaciados.
        </li>
        <li>
          Se construyen polinomios base L<sub>i</sub>(x) y se combinan con los
          valores f(x<sub>i</sub>).
        </li>
        <li>Se calcula el error de interpolación: E(x) = f(x) - P(x).</li>
      </ul>

      <h3 class="font-bold mt-3">Diferencias Divididas de Newton:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>
          Genera el mismo polinomio que Lagrange pero de forma incremental.
        </li>
        <li>
          Útil si se quieren añadir puntos de interpolación posteriormente.
        </li>
        <li>
          Se construye una tabla de diferencias divididas para obtener los
          coeficientes del polinomio.
        </li>
      </ul>

      <h3 class="font-bold mt-3">Diferencias Finitas:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>
          Apropiadas cuando los puntos de datos están equiespaciados (x<sub
            >i+1</sub
          >
          - x<sub>i</sub> = h).
        </li>
        <li>Diferencias hacia adelante (Δ) y hacia atrás (∇).</li>
        <li>
          Formulaciones específicas para interpolación con datos tabulares.
        </li>
      </ul>

      <h3 class="font-bold mt-3">Interpolación Lineal y Cuadrática:</h3>
      <p>
        Casos particulares de interpolación polinomial de grado 1 y 2,
        respectivamente. Se analiza la mejora de precisión al aumentar el grado.
      </p>

      <h3 class="font-bold mt-3">Aplicaciones Específicas:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>
          Interpolación de funciones matemáticas (trigonométricas, logarítmicas,
          exponenciales).
        </li>
        <li>
          Estimación de valores intermedios en tablas de datos experimentales.
        </li>
        <li>
          Interpolación de funciones especiales como la función de error erf(x).
        </li>
        <li>
          Uso de splines cúbicos para interpolar con mayor suavidad (mencionado
          en el taller).
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
