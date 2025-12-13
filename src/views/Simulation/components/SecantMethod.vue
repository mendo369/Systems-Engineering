<!-- @/components/simulation/SecantMethod.vue -->
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
        Método de la Secante</span
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
        El método de la Secante es una variante del método de Newton-Raphson que
        no requiere calcular la derivada analítica de la función. En su lugar,
        aproxima la derivada utilizando dos puntos anteriores.
      </p>

      <h3 class="font-bold mt-3">Fórmula Iterativa:</h3>
      <p>
        Dados dos puntos iniciales x₀ y x₁, la siguiente aproximación se calcula
        como:
      </p>
      <pre class="bg-gray-100 p-2 rounded my-2">
<code>x_{n+1} = x_n - f(x_n) * (x_n - x_{n-1}) / (f(x_n) - f(x_{n-1}))</code></pre>
      <p>Este proceso se repite hasta alcanzar la convergencia.</p>

      <h3 class="font-bold mt-3">Comparación con Newton-Raphson:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>
          <strong>Ventaja:</strong> No necesita calcular la derivada f'(x).
        </li>
        <li>
          <strong>Desventaja:</strong> Generalmente converge más lentamente que
          Newton.
        </li>
        <li>
          <strong>Requiere:</strong> Dos valores iniciales en lugar de uno.
        </li>
      </ul>

      <h3 class="font-bold mt-3">Ejemplo Práctico:</h3>
      <p>
        Encontrar la raíz de <strong>f(x) = x³ - x - 2</strong> usando el método
        de la Secante.
      </p>
      <p>Tomemos x₀ = 1 y x₁ = 2.</p>
      <pre class="bg-gray-100 p-2 rounded my-2">
<code>f(1) = -2, f(2) = 4
x₂ = 2 - 4 * (2 - 1) / (4 - (-2)) = 2 - 4/6 = 2 - 0.666... = 1.333...
f(1.333...) = (1.333...)³ - 1.333... - 2 ≈ 2.370 - 1.333 - 2 = -0.963
x₃ = 1.333... - (-0.963) * (1.333... - 2) / (-0.963 - 4) ≈ 1.333... - (-0.963) * (-0.666...) / (-4.963) ≈ 1.521</code></pre>
      <p>
        La secuencia converge hacia la raíz, aunque un poco más lenta que
        Newton.
      </p>

      <h3 class="font-bold mt-3">Aplicaciones:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>Cuando la derivada es difícil o costosa de calcular.</li>
        <li>
          Como alternativa cuando Newton-Raphson falla debido a problemas de
          derivada.
        </li>
        <li>En optimización donde solo se tienen valores funcionales.</li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
