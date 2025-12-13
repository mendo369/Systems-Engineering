<!-- @/components/simulation/LeastSquaresQuadratic.vue -->
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
        Caso Cuadrático: Ajuste de Parábola por Mínimos Cuadrados</span
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
        El ajuste cuadrático busca encontrar la parábola
        <strong>y = a₀ + a₁x + a₂x²</strong> que mejor se adapta a un conjunto
        de datos bivariados {(xᵢ, yᵢ)}.
      </p>

      <h3 class="font-bold mt-3">Método de Mínimos Cuadrados:</h3>
      <p>
        Se minimiza la suma de los cuadrados de los errores:
        <strong>g(a₀, a₁, a₂) = Σ(yᵢ - a₀ - a₁xᵢ - a₂xᵢ²)²</strong>.
      </p>

      <h3 class="font-bold mt-3">Sistema de Ecuaciones Normales:</h3>
      <p>
        Para encontrar los coeficientes a₀, a₁ y a₂, se resuelve el siguiente
        sistema lineal:
      </p>
      <pre class="bg-gray-100 p-2 rounded my-2">
<code>(Σ1) * a₀ + (Σxᵢ) * a₁ + (Σxᵢ²) * a₂ = Σyᵢ
(Σxᵢ) * a₀ + (Σxᵢ²) * a₁ + (Σxᵢ³) * a₂ = Σxᵢyᵢ
(Σxᵢ²) * a₀ + (Σxᵢ³) * a₁ + (Σxᵢ⁴) * a₂ = Σxᵢ²yᵢ</code></pre>
      <p>
        Este sistema también se puede escribir en forma matricial como
        <strong>A X = b</strong>.
      </p>

      <h3 class="font-bold mt-3">Ejemplo Práctico:</h3>
      <p>Usando los mismos datos del ejemplo lineal:</p>
      <pre class="bg-gray-100 p-2 rounded my-2">
<code>xᵢ: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
yᵢ: 1.3, 3.5, 4.2, 5.0, 7.0, 8.8, 10.1, 12.5, 13.0, 15.6</code></pre>
      <p>Las sumas adicionales necesarias son:</p>
      <pre class="bg-gray-100 p-2 rounded my-2">
<code>Σxᵢ³ = 3025
Σxᵢ⁴ = 25333
Σxᵢ²yᵢ = 4532.8</code></pre>
      <p>Resolviendo el sistema, se obtiene:</p>
      <pre class="bg-gray-100 p-2 rounded my-2">
<code>a₀ = 0.4063
a₁ = 1.1548
a₂ = 0.03484</code></pre>
      <p>
        Por lo tanto, la parábola de mejor ajuste es:
        <strong>y = 0.4063 + 1.1548x + 0.03484x²</strong>.
      </p>

      <h3 class="font-bold mt-3">Comparación con el Ajuste Lineal:</h3>
      <p>
        El ajuste cuadrático generalmente proporciona un error menor que el
        lineal cuando los datos presentan una curvatura clara, ya que tiene más
        grados de libertad para adaptarse a la forma de los datos.
      </p>

      <h3 class="font-bold mt-3">Aplicaciones:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>Modelado de fenómenos físicos o económicos con aceleración.</li>
        <li>
          Ajuste de datos que no siguen una tendencia estrictamente lineal.
        </li>
        <li>Optimización de funciones objetivo que son parabólicas.</li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
