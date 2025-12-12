<!-- @/components/simulation/LeastSquares.vue -->
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
        Aproximación por Mínimos Cuadrados</span
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
        La aproximación por mínimos cuadrados busca encontrar una función que
        minimice la suma de los cuadrados de las diferencias entre los valores
        observados y los predichos, ideal cuando no se requiere que la función
        pase exactamente por todos los puntos.
      </p>

      <h3 class="font-bold mt-3">Ajuste Polinomial por Mínimos Cuadrados:</h3>
      <p>
        Se buscan polinomios de grado 1 (recta), 2 (parábola), etc., que mejor
        se ajusten a un conjunto de datos.
      </p>
      <ul class="list-disc pl-5 mt-2">
        <li>
          Se minimiza el <strong>Error Cuadrático (EE)</strong>: Σ(y<sub>i</sub>
          - f(x<sub>i</sub>))².
        </li>
        <li>Comparación entre modelos de diferentes grados.</li>
      </ul>

      <h3 class="font-bold mt-3">Transformaciones Linealizables:</h3>
      <p>
        Se utilizan transformaciones logarítmicas para convertir modelos no
        lineales en lineales y aplicarles la regresión lineal simple.
      </p>
      <ul class="list-disc pl-5 mt-2">
        <li>
          <strong>Modelo exponencial:</strong> y = ae<sup>bx</sup> → ln y = ln a
          + bx.
        </li>
        <li>
          <strong>Modelo potencial:</strong> y = ax<sup>b</sup> → ln y = ln a +
          b ln x.
        </li>
        <li>
          Comparación de errores entre modelos originales y transformados.
        </li>
      </ul>

      <h3 class="font-bold mt-3">Regresión Lineal Simple:</h3>
      <p>
        Caso especial para ajustar una recta a datos bivariados (x, y). Se
        resuelven las ecuaciones normales para hallar pendiente e intercepto.
      </p>

      <h3 class="font-bold mt-3">Modelos No Lineales por Transformación:</h3>
      <p>
        Aplicación a modelos biológicos u otros campos, como R = bW<sup>a</sup>
        (relación masa-resistencia), transformándose en ln R = ln b + a ln W.
      </p>

      <h3 class="font-bold mt-3">Evaluación de Modelos:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>Cálculo del <strong>Error Cuadrático Medio (E²(f))</strong>.</li>
        <li>
          Comparación del ajuste entre diferentes familias de curvas
          (polinómicas, exponenciales, potenciales).
        </li>
        <li>Selección del modelo con menor error.</li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
