<!-- @/components/simulation/NewtonRaphsonMethod.vue -->
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
        Método de Newton-Raphson</span
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
        El método de Newton-Raphson es un método iterativo de convergencia
        rápida para encontrar raíces de ecuaciones no lineales. Utiliza la
        derivada de la función para aproximar la raíz.
      </p>

      <h3 class="font-bold mt-3">Fórmula Iterativa:</h3>
      <p>
        Dada una función f(x) y su derivada f'(x), la fórmula para generar la
        siguiente aproximación es:
      </p>
      <pre class="bg-gray-100 p-2 rounded my-2">
<code>x_{n+1} = x_n - f(x_n) / f'(x_n)</code></pre>
      <p>Este proceso se repite hasta que se alcance la convergencia.</p>

      <h3 class="font-bold mt-3">Interpretación Geométrica:</h3>
      <p>
        La fórmula se deriva de la idea de trazar la recta tangente a la curva y
        = f(x) en el punto (xₙ, f(xₙ)). La intersección de esta tangente con el
        eje x da la siguiente aproximación xₙ₊₁.
      </p>

      <h3 class="font-bold mt-3">Ejemplo Práctico:</h3>
      <p>
        Encontrar la raíz de <strong>f(x) = x³ - x - 2</strong> usando
        Newton-Raphson.
      </p>
      <p>La derivada es <strong>f'(x) = 3x² - 1</strong>. Tomemos x₀ = 1.</p>
      <pre class="bg-gray-100 p-2 rounded my-2">
<code>x₁ = 1 - (1 - 1 - 2) / (3*1 - 1) = 1 - (-2) / 2 = 1 + 1 = 2
x₂ = 2 - (8 - 2 - 2) / (3*4 - 1) = 2 - 4 / 11 ≈ 1.636
x₃ = 1.636 - (1.636³ - 1.636 - 2) / (3*1.636² - 1) ≈ 1.521</code></pre>
      <p>Continuando, la secuencia converge rápidamente a la raíz real.</p>

      <h3 class="font-bold mt-3">Condiciones de Convergencia:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>La función debe ser diferenciable en el intervalo.</li>
        <li>La derivada f'(x) no debe ser cero en la vecindad de la raíz.</li>
        <li>
          El valor inicial x₀ debe estar suficientemente cerca de la raíz.
        </li>
      </ul>

      <h3 class="font-bold mt-3">Aplicaciones:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>Optimización: encontrar puntos críticos (donde f'(x)=0).</li>
        <li>Resolución de sistemas de ecuaciones no lineales.</li>
        <li>
          Aplicaciones en física e ingeniería donde se necesita alta precisión.
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
