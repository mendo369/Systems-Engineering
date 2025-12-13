<!-- @/components/simulation/LeastSquaresLinear.vue -->
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
        Caso Lineal: Ajuste de Recta por Mínimos Cuadrados</span
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
        El ajuste lineal busca encontrar la recta <strong>y = a₀ + a₁x</strong>
        que mejor se adapta a un conjunto de datos bivariados {(xᵢ, yᵢ)}.
      </p>

      <h3 class="font-bold mt-3">Método de Mínimos Cuadrados:</h3>
      <p>
        Se minimiza la suma de los cuadrados de los errores verticales:
        <strong>g(a₀, a₁) = Σ(yᵢ - a₀ - a₁xᵢ)²</strong>.
      </p>

      <h3 class="font-bold mt-3">Sistema de Ecuaciones Normales:</h3>
      <p>
        Para encontrar los coeficientes a₀ y a₁, se resuelve el siguiente
        sistema lineal derivado de las condiciones de mínimo:
      </p>
      <pre class="bg-gray-100 p-2 rounded my-2">
<code>(Σ1) * a₀ + (Σxᵢ) * a₁ = Σyᵢ
(Σxᵢ) * a₀ + (Σxᵢ²) * a₁ = Σxᵢyᵢ</code></pre>
      <p>
        Este sistema se puede escribir en forma matricial como
        <strong>A X = b</strong>, donde:
      </p>
      <pre class="bg-gray-100 p-2 rounded my-2">
<code>A = [ Σ1   Σxᵢ  ]
    [ Σxᵢ  Σxᵢ² ]

X = [ a₀ ]
    [ a₁ ]

b = [ Σyᵢ  ]
    [ Σxᵢyᵢ ]</code></pre>

      <h3 class="font-bold mt-3">Ejemplo Práctico:</h3>
      <p>Dado el conjunto de datos:</p>
      <pre class="bg-gray-100 p-2 rounded my-2">
<code>xᵢ: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
yᵢ: 1.3, 3.5, 4.2, 5.0, 7.0, 8.8, 10.1, 12.5, 13.0, 15.6</code></pre>
      <p>Los cálculos de sumas son:</p>
      <pre class="bg-gray-100 p-2 rounded my-2">
<code>Σ1 = 10
Σxᵢ = 55
Σyᵢ = 81
Σxᵢ² = 385
Σxᵢyᵢ = 572.4</code></pre>
      <p>Resolviendo el sistema, se obtiene:</p>
      <pre class="bg-gray-100 p-2 rounded my-2">
<code>a₀ = -0.36
a₁ = 1.538</code></pre>
      <p>
        Por lo tanto, la recta de mejor ajuste es:
        <strong>y = -0.36 + 1.538x</strong>.
      </p>

      <h3 class="font-bold mt-3">Aplicaciones:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>Análisis de tendencias en datos experimentales.</li>
        <li>Predicción de valores futuros basados en una relación lineal.</li>
        <li>Evaluación de correlación entre dos variables.</li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
