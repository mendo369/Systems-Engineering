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
        Método de Bisección</span
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
        El <strong>método de bisección</strong> es un método numérico de intervalo que permite encontrar una raíz de una función continua en un intervalo donde se cumple el teorema de Bolzano.
      </p>

      <h3 class="font-bold mt-3">Principio de funcionamiento:</h3>
      <p>
        Se basa en dividir repetidamente a la mitad el intervalo que contiene la raíz, seleccionando el subintervalo donde la función cambia de signo.
      </p>

      <h3 class="font-bold mt-3">Algoritmo:</h3>
      <ol class="list-decimal pl-5 mt-2">
        <li>Dado un intervalo [a, b] tal que f(a) × f(b) &lt; 0</li>
        <li>Calcular el punto medio: c = (a + b) / 2</li>
        <li>Evaluar f(c)</li>
        <li>Si f(c) = 0 o |f(c)| &lt; ε (tolerancia), entonces c es la raíz</li>
        <li>Si f(a) × f(c) &lt; 0, la raíz está en [a, c], hacer b = c</li>
        <li>Si f(c) × f(b) &lt; 0, la raíz está en [c, b], hacer a = c</li>
        <li>Repetir desde el paso 2 hasta alcanzar la precisión deseada</li>
      </ol>

      <h3 class="font-bold mt-3">Ejemplo:</h3>
      <p>Encontrar la raíz de f(x) = x² - 2 en [1, 2] con tolerancia ε = 0.01</p>

      <h4>Iteración 1:</h4>
      <ul class="list-disc pl-5 mt-2">
        <li>a = 1, b = 2</li>
        <li>c = (1 + 2) / 2 = 1.5</li>
        <li>f(1.5) = 1.5² - 2 = 0.25 &gt; 0</li>
        <li>Como f(1) × f(1.5) = (-1) × (0.25) &lt; 0, la raíz está en [1, 1.5]</li>
      </ul>

      <h4>Iteración 2:</h4>
      <ul class="list-disc pl-5 mt-2">
        <li>a = 1, b = 1.5</li>
        <li>c = (1 + 1.5) / 2 = 1.25</li>
        <li>f(1.25) = 1.25² - 2 = -0.4375 &lt; 0</li>
        <li>Como f(1.25) × f(1.5) = (-0.4375) × (0.25) &lt; 0, la raíz está en [1.25, 1.5]</li>
      </ul>

      <h3 class="font-bold mt-3">Ventajas:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>Siempre converge si se cumplen las condiciones iniciales</li>
        <li>Fácil de implementar y entender</li>
        <li>Convergencia garantizada lineal</li>
      </ul>

      <h3 class="font-bold mt-3">Desventajas:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>Convergencia lenta (lineal)</li>
        <li>Requiere encontrar un intervalo inicial donde f(a) × f(b) &lt; 0</li>
        <li>No aprovecha la magnitud de los valores de la función</li>
      </ul>

      <h3 class="font-bold mt-3">Tasa de convergencia:</h3>
      <p>
        El error se reduce aproximadamente a la mitad en cada iteración:
        <pre class="bg-gray-100 p-2 rounded my-2"><code>|eₙ₊₁| ≈ |eₙ| / 2</code></pre>
      </p>
    </div>
  </div>
</template>

<style scoped></style>