<!-- @/components/simulation/LeastSquaresExponential.vue -->
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
        Caso Exponencial: Ajuste de Curva y = a·bˣ por Mínimos Cuadrados</span
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
        El ajuste exponencial busca encontrar la curva
        <strong>y = a · bˣ</strong> que mejor se adapta a un conjunto de datos
        bivariados {(xᵢ, yᵢ)}. Este modelo es común en crecimiento poblacional,
        decaimiento radiactivo, etc.
      </p>

      <h3 class="font-bold mt-3">Linealización del Modelo:</h3>
      <p>
        Como el modelo es no lineal en sus parámetros, se aplica una
        transformación logarítmica para convertirlo en un problema lineal.
      </p>
      <pre class="bg-gray-100 p-2 rounded my-2">
<code>y = a · bˣ
→ ln(y) = ln(a) + x · ln(b)</code></pre>
      <p>Definiendo nuevas variables:</p>
      <pre class="bg-gray-100 p-2 rounded my-2">
<code>Y = ln(y)
a₀ = ln(a)
a₁ = ln(b)
X = x</code></pre>
      <p>
        El modelo se convierte en la ecuación lineal:
        <strong>Y = a₀ + a₁X</strong>.
      </p>

      <h3 class="font-bold mt-3">Sistema de Ecuaciones Normales:</h3>
      <p>
        Se resuelve el sistema lineal para las variables transformadas Y y X:
      </p>
      <pre class="bg-gray-100 p-2 rounded my-2">
<code>(Σ1) * a₀ + (ΣXᵢ) * a₁ = ΣYᵢ
(ΣXᵢ) * a₀ + (ΣXᵢ²) * a₁ = ΣXᵢYᵢ</code></pre>
      <p>Una vez obtenidos a₀ y a₁, se calculan los parámetros originales:</p>
      <pre class="bg-gray-100 p-2 rounded my-2">
<code>a = e^a₀
b = e^a₁</code></pre>

      <h3 class="font-bold mt-3">Ejemplo Práctico:</h3>
      <p>Dado el conjunto de datos:</p>
      <pre class="bg-gray-100 p-2 rounded my-2">
<code>xᵢ: 2, 3.4, 5.2, 6.1, 6.7, 7
yᵢ: 22.103, 107.7352, 825.6741, 2285.7786, 4506.6225, 6327.9012</code></pre>
      <p>Se transforman los datos a Yᵢ = ln(yᵢ):</p>
      <pre class="bg-gray-100 p-2 rounded my-2">
<code>Xᵢ: 2, 3.4, 5.2, 6.1, 6.7, 7
Yᵢ: 3.0957, 4.6797, 6.7162, 7.7345, 8.4133, 8.7527</code></pre>
      <p>Las sumas son:</p>
      <pre class="bg-gray-100 p-2 rounded my-2">
<code>Σ1 = 6
ΣXᵢ = 30.4
ΣYᵢ = 39.3921
ΣXᵢ² = 173.7
ΣXᵢYᵢ = 221.84498</code></pre>
      <p>Resolviendo el sistema, se obtiene:</p>
      <pre class="bg-gray-100 p-2 rounded my-2">
<code>a₀ = 0.832910
a₁ = 1.1314019</code></pre>
      <p>Finalmente, se calculan los parámetros originales:</p>
      <pre class="bg-gray-100 p-2 rounded my-2">
<code>a = e^0.832910 ≈ 2.300 ≈ 2.3
b = e^1.1314019 ≈ 3.0999 ≈ 3.1</code></pre>
      <p>
        Por lo tanto, la curva exponencial de mejor ajuste es:
        <strong>y = (2.3)(3.1)ˣ</strong>.
      </p>

      <h3 class="font-bold mt-3">Aplicaciones:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>Modelado de crecimiento exponencial (poblaciones, inversiones).</li>
        <li>
          Modelado de decaimiento exponencial (radiactividad, enfriamiento).
        </li>
        <li>
          Transformación de modelos no lineales a lineales para simplificar el
          ajuste.
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
