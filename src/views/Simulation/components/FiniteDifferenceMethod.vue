<!-- @/components/simulation/FiniteDifferenceMethod.vue -->
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
        Método de Diferencias Finitas (MDF) para PVF</span
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
        El Método de Diferencias Finitas (MDF) es una técnica numérica para
        resolver <strong>Problemas de Valor de Frontera (PVF)</strong> para
        Ecuaciones Diferenciales Ordinarias (EDO) de segundo orden. Se basa en
        discretizar el dominio y aproximar las derivadas mediante diferencias.
      </p>

      <h3 class="font-bold mt-3">Tipo de EDO:</h3>
      <p>Se aplica a EDO lineales de segundo orden de la forma:</p>
      <pre class="bg-gray-100 p-2 rounded my-2">
<code>y'' = p(x)y' + q(x)y + r(x)</code></pre>
      <p>con condiciones de frontera: y(a) = α, y(b) = β.</p>

      <h3 class="font-bold mt-3">Discretización del Dominio:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>
          Se divide el intervalo [a, b] en N+2 nodos uniformemente espaciados:
          x<sub>i</sub> = x<sub>0</sub> + ih, donde i = 0, ..., N+1.
        </li>
        <li>El paso es: h = (b - a) / (N + 1).</li>
        <li>
          Los nodos x<sub>0</sub> = a y x<sub>N+1</sub> = b son las fronteras
          (condiciones conocidas). Se resuelve para los N nodos interiores
          x<sub>1</sub>, ..., x<sub>N</sub>.
        </li>
      </ul>

      <h3 class="font-bold mt-3">Aproximación por Diferencias Centradas:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>
          <strong>y'(x<sub>i</sub>):</strong> ≈ (y<sub>i+1</sub> -
          y<sub>i-1</sub>) / 2h
        </li>
        <li>
          <strong>y''(x<sub>i</sub>):</strong> ≈ (y<sub>i+1</sub> - 2y<sub
            >i</sub
          >
          + y<sub>i-1</sub>) / h²
        </li>
      </ul>

      <h3 class="font-bold mt-3">Construcción del Sistema Lineal:</h3>
      <p>
        Al sustituir las aproximaciones en la EDO original para cada nodo
        interior, se obtiene un sistema lineal tridiagonal de la forma:
      </p>
      <pre class="bg-gray-100 p-2 rounded my-2">
<code>A Y = b</code></pre>
      <p>
        Donde Y = [y<sub>1</sub>, y<sub>2</sub>, ..., y<sub>N</sub>]<sup>T</sup>
        y los coeficientes de la matriz A y el vector b dependen de
        p(x<sub>i</sub>), q(x<sub>i</sub>), r(x<sub>i</sub>), h, y las
        condiciones de frontera α y β.
      </p>

      <h3 class="font-bold mt-3">Implementación y Resultados:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>
          Se resuelve el sistema tridiagonal AY = b para obtener los valores
          desconocidos y<sub>i</sub>.
        </li>
        <li>
          Se pueden visualizar gráficamente los resultados obtenidos (x<sub
            >i</sub
          >
          vs y<sub>i</sub>).
        </li>
        <li>
          Ejemplos incluyen ecuaciones con coeficientes variables como y'' =
          (-2/x)y' + (2/x²)y + sin(ln x)/x².
        </li>
        <li>
          Implementación típica en lenguajes como Scilab o Matlab (ver código en
          apuntes).
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
