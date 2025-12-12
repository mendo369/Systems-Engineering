<!-- @/components/simulation/SystemOfEquations.vue -->
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
        Sistemas de Ecuaciones: Lineales y No Lineales</span
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
        Este taller aborda la resolución de sistemas de ecuaciones tanto
        lineales como no lineales, introduciendo conceptos de normas, errores,
        convergencia y métodos iterativos.
      </p>

      <h3 class="font-bold mt-3">Normas Vectoriales y Matriciales:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>
          <strong>Vectoriales:</strong> ∥x∥<sub>∞</sub> (máximo valor absoluto),
          ∥x∥<sub>2</sub> (norma euclidiana).
        </li>
        <li>
          <strong>Matriciales:</strong> ∥A∥<sub>∞</sub> (suma máxima de filas).
        </li>
        <li>
          <strong>Radio Espectral:</strong> ρ(A) (máximo valor absoluto de los
          autovalores).
        </li>
      </ul>

      <h3 class="font-bold mt-3">Análisis de Errores en Sistemas Lineales:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>
          <strong>Error de solución:</strong> ∥x - x̂∥<sub>∞</sub> (diferencia
          entre solución verdadera y aproximada).
        </li>
        <li>
          <strong>Residuo:</strong> ∥Ax̂ - b∥<sub>∞</sub> (cuánto se desvía la
          solución aproximada del sistema).
        </li>
      </ul>

      <h3 class="font-bold mt-3">Métodos Iterativos para Sistemas Lineales:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>
          <strong>Jacobi:</strong> Actualiza todas las variables simultáneamente
          con valores de la iteración anterior.
        </li>
        <li>
          <strong>Gauss-Seidel:</strong> Usa los valores ya actualizados en la
          iteración actual para calcular los siguientes.
        </li>
        <li>
          <strong>Criterio de parada:</strong> ∥x<sup>(k)</sup> -
          x<sup>(k-1)</sup>∥<sub>∞</sub> &lt; τ (por ejemplo, 10⁻³).
        </li>
      </ul>

      <h3 class="font-bold mt-3">
        Método de Newton para Sistemas No Lineales:
      </h3>
      <p>
        Extensión multivariable del método de Newton-Raphson para resolver
        sistemas del tipo F(X) = 0, donde F y X son vectores.
      </p>
      <ul class="list-disc pl-5 mt-2">
        <li>
          Implica calcular la matriz Jacobiana (matriz de derivadas parciales).
        </li>
        <li>
          Se resuelve un sistema lineal en cada iteración para actualizar el
          vector solución.
        </li>
        <li>
          Criterio de convergencia: ∥X<sup>(k)</sup> - X<sup>(k-1)</sup>∥<sub
            >∞</sub
          >
          &lt; 10⁻⁶.
        </li>
        <li>
          Aplicable a sistemas con funciones polinómicas, trigonométricas,
          exponenciales, etc.
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
