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
        Teorema de Bolzano</span
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
        El <strong>Teorema de Bolzano</strong> (también conocido como Teorema
        del Valor Intermedio) es fundamental para garantizar la existencia de
        raíces en un intervalo cerrado.
      </p>

      <h3 class="font-bold mt-3">Enunciado:</h3>
      <p>
        Sea f: [a,b] → ℝ una función continua en el intervalo cerrado [a,b]. Si
        f(a) y f(b) tienen signos opuestos (es decir, f(a) × f(b) 0), entonces
        existe al menos un valor c ∈ (a,b) tal que f(c) = 0.
      </p>

      <h3 class="font-bold mt-3">Interpretación geométrica:</h3>
      <p>
        Si una función continua cambia de signo en un intervalo, entonces debe
        cruzar el eje x al menos una vez en ese intervalo, garantizando la
        existencia de una raíz.
      </p>

      <h3 class="font-bold mt-3">Ejemplo:</h3>
      <p>Consideremos f(x) = x² - 2 en el intervalo [1, 2]:</p>
      <ul class="list-disc pl-5 mt-2">
        <li>f(1) = 1² - 2 = -1 &lt; 0</li>
        <li>f(2) = 2² - 2 = 2 &gt; 0</li>
        <li>
          Como f(1) × f(2) = (-1) × 2 = -2 &lt; 0, por el teorema de Bolzano,
          existe al menos una raíz en (1, 2).
        </li>
      </ul>

      <h3 class="font-bold mt-3">Observaciones importantes:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>El teorema garantiza existencia, pero no unicidad.</li>
        <li>La función debe ser continua en el intervalo.</li>
        <li>
          Si f(a) × f(b) &gt; 0, el teorema no se aplica (puede haber 0, 2, 4,
          ... raíces o ninguna).
        </li>
        <li>Si f(a) × f(b) = 0, entonces a o b es una raíz exacta.</li>
      </ul>

      <h3 class="font-bold mt-3">Aplicación práctica:</h3>
      <p>
        El teorema de Bolzano es la base teórica del
        <strong>método de bisección</strong> y otros métodos de búsqueda de
        raíces, ya que proporciona el criterio inicial para asegurar que existe
        una solución en un intervalo dado.
      </p>
    </div>
  </div>
</template>

<style scoped></style>
