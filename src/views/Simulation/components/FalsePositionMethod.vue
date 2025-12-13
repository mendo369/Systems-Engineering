<!-- @/components/simulation/FalsePositionMethod.vue -->
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
        Método de la Falsa Posición (Regula Falsi)</span
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
        El método de la Falsa Posición, también conocido como Regula Falsi,
        combina la idea de la bisección (mantener la raíz "atrapada") con la
        interpolación lineal de la secante. Es más rápido que la bisección pura.
      </p>

      <h3 class="font-bold mt-3">Algoritmo:</h3>
      <ol class="list-decimal pl-5 mt-2">
        <li>Elegir un intervalo [a, b] tal que f(a) * f(b) &lt; 0.</li>
        <li>
          Calcular el punto de intersección de la recta secante entre (a, f(a))
          y (b, f(b)) con el eje x. Este punto es:
          <strong>c = (a*f(b) - b*f(a)) / (f(b) - f(a))</strong>.
        </li>
        <li>Evaluar f(c). Si f(c) = 0, entonces c es la raíz.</li>
        <li>
          Si f(a) * f(c) &lt; 0, la raíz está en [a, c]. Actualizar b = c.
        </li>
        <li>
          Si f(c) * f(b) &lt; 0, la raíz está en [c, b]. Actualizar a = c.
        </li>
        <li>Repetir hasta que el error sea menor que una tolerancia dada.</li>
      </ol>

      <h3 class="font-bold mt-3">Ventajas y Desventajas:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>
          <strong>Ventaja:</strong> Acelera la convergencia respecto a la
          bisección.
        </li>
        <li>
          <strong>Desventaja:</strong> Puede converger lentamente si la función
          es muy convexa/concava.
        </li>
        <li>
          <strong>Garantía:</strong> Como la bisección, siempre converge si se
          cumple la condición inicial.
        </li>
      </ul>

      <h3 class="font-bold mt-3">Ejemplo Práctico:</h3>
      <p>
        Encontrar la raíz de <strong>f(x) = x³ - x - 2</strong> en el intervalo
        [1, 2].
      </p>
      <pre class="bg-gray-100 p-2 rounded my-2">
<code>f(1) = -2, f(2) = 4
c = (1*4 - 2*(-2)) / (4 - (-2)) = (4 + 4) / 6 = 8/6 = 1.333...
f(1.333...) ≈ -0.963 → Raíz en [1.333..., 2]</code></pre>
      <p>
        En la siguiente iteración, se usa [1.333..., 2] para calcular el nuevo
        punto c.
      </p>

      <h3 class="font-bold mt-3">Aplicaciones:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>
          Resolución de ecuaciones donde se desea una convergencia más rápida
          que la bisección.
        </li>
        <li>Como método robusto cuando Newton-Raphson no es aplicable.</li>
        <li>
          En simulaciones donde se necesita estabilidad y velocidad combinadas.
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
