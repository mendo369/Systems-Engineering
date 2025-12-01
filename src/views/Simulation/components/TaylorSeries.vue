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
        Aproximación de Errores y Series de Taylor</span
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
        En la simulación y computación numérica, es fundamental entender y
        controlar los errores que se generan al aproximar soluciones
        matemáticas. Las <strong>Series de Taylor</strong> son una herramienta
        poderosa para aproximar funciones y analizar el error asociado.
      </p>

      <h3 class="font-bold mt-3">Tipos de Errores:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>
          <strong>Error Verdadero:</strong> Et = valor verdadero - valor
          aproximado
        </li>
        <li>
          <strong>Error Absoluto:</strong> |Et| = |valor verdadero - valor
          aproximado|
        </li>
        <li><strong>Error Relativo:</strong> |Et| / |valor verdadero|</li>
        <li>
          <strong>Error Relativo Porcentual:</strong> (|Et| / |valor verdadero|)
          × 100%
        </li>
      </ul>

      <h3 class="font-bold mt-3">Series de Taylor:</h3>
      <p>
        Las series de Taylor permiten aproximar una función f(x) alrededor de un
        punto xi:
      </p>
      <pre
        class="bg-gray-100 p-2 rounded my-2"
      ><code>f(xᵢ₊₁) = f(xᵢ) + f'(xᵢ)(xᵢ₊₁-xᵢ) + f''(xᵢ)(xᵢ₊₁-xᵢ)²/2! + ... + Rₙ</code></pre>

      <h3 class="font-bold mt-3">Residuo o Error de Truncamiento:</h3>
      <p>Rₙ = O(hⁿ⁺¹)</p>
      <p>Donde h = xᵢ₊₁ - xᵢ y n es el orden de la aproximación.</p>

      <h3 class="font-bold mt-3">Cota de Error:</h3>
      <p>La cota del error de truncamiento se puede estimar como:</p>
      <pre
        class="bg-gray-100 p-2 rounded my-2"
      ><code>|Rₙ| ≤ (M × |h|ⁿ⁺¹) / (n+1)!</code></pre>
      <p>
        Donde M es el valor máximo de la (n+1)-ésima derivada en el intervalo.
      </p>

      <h3 class="font-bold mt-3">Aplicaciones:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>Estimación de errores en métodos numéricos</li>
        <li>Análisis de convergencia de algoritmos</li>
        <li>Predicción del comportamiento de funciones</li>
        <li>Optimización de precisiones computacionales</li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
