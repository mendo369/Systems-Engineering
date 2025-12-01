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
        Teoría del Error</span
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
        La <strong>Teoría del Error</strong> es fundamental en la computación
        numérica para entender cómo se generan, propagan y controlan los errores
        en los cálculos. El objetivo es garantizar que las aproximaciones
        obtenidas sean lo suficientemente precisas para ser útiles en
        aplicaciones científicas e ingenieriles.
      </p>

      <h3 class="font-bold mt-3">Definiciones clave:</h3>
      <p>Sea p el valor exacto y p* su aproximación:</p>
      <ul class="list-disc pl-5 mt-2">
        <li><strong>Error Absoluto:</strong> Ea = |p - p*|</li>
        <li><strong>Error Relativo:</strong> Er = |p - p*| / |p|, con p ≠ 0</li>
      </ul>

      <h3 class="font-bold mt-3">Ejemplo práctico:</h3>
      <p>
        Se dan tres casos con valores de p y p*. Calculemos Ea y Er en cada uno:
      </p>

      <table class="border-collapse border border-gray-300 w-full mt-2">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 px-2 py-1">p</th>
            <th class="border border-gray-300 px-2 py-1">p*</th>
            <th class="border border-gray-300 px-2 py-1">Ea</th>
            <th class="border border-gray-300 px-2 py-1">Er</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 px-2 py-1">0.3000 × 10⁻¹</td>
            <td class="border border-gray-300 px-2 py-1">0.3100 × 10⁻¹</td>
            <td class="border border-gray-300 px-2 py-1">0.001</td>
            <td class="border border-gray-300 px-2 py-1">0.0333...</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-2 py-1">0.3000 × 10⁻⁴</td>
            <td class="border border-gray-300 px-2 py-1">0.3100 × 10⁻⁴</td>
            <td class="border border-gray-300 px-2 py-1">0.000001</td>
            <td class="border border-gray-300 px-2 py-1">0.0333...</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-2 py-1">0.3000 × 10⁴</td>
            <td class="border border-gray-300 px-2 py-1">0.3100 × 10⁴</td>
            <td class="border border-gray-300 px-2 py-1">100</td>
            <td class="border border-gray-300 px-2 py-1">0.0333...</td>
          </tr>
        </tbody>
      </table>

      <h3 class="font-bold mt-3">Análisis del ejemplo:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>
          En todos los casos, el error absoluto varía mucho según la magnitud
          del número.
        </li>
        <li>
          El error relativo es constante (≈ 0.0333), lo que indica que es más
          útil para comparar la precisión independientemente del tamaño del
          número.
        </li>
      </ul>

      <h3 class="font-bold mt-3">Conclusión:</h3>
      <p>
        El error relativo es más significativo que el absoluto porque normaliza
        el error respecto al valor real. Esto permite evaluar la calidad de una
        aproximación de manera consistente, incluso cuando los valores son muy
        grandes o muy pequeños.
      </p>

      <h3 class="font-bold mt-3">Importancia en la Computación Numérica:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>Permite evaluar la precisión de métodos numéricos.</li>
        <li>
          Ayuda a determinar cuándo un cálculo ha alcanzado suficiente
          precisión.
        </li>
        <li>
          Es clave en el análisis de estabilidad y convergencia de algoritmos.
        </li>
        <li>Sirve como base para el diseño de rutinas numéricas robustas.</li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
