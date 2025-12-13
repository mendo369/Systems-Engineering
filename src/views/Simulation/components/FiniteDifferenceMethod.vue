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
        Método de Diferencias Finitas (MDF) para PVF: Derivación del Sistema
        Lineal</span
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
        resolver
        <strong>Problemas de Valor de Frontera (PVF)</strong> para Ecuaciones
        Diferenciales Ordinarias (EDO) de segundo orden. Este componente explica
        cómo se deriva el sistema lineal tridiagonal <strong>AY = b</strong> a
        partir de la EDO.
      </p>

      <h3 class="font-bold mt-3">Formulación del Problema:</h3>
      <p>Se considera una EDO lineal de segundo orden:</p>
      <pre class="bg-gray-100 p-2 rounded my-2">
<code>y''(x) = p(x)y'(x) + q(x)y(x) + r(x),   para a ≤ x ≤ b</code></pre>
      <p>
        con condiciones de frontera:
        <strong>y(a) = α</strong> y <strong>y(b) = β</strong>.
      </p>

      <h3 class="font-bold mt-3">Discretización del Dominio:</h3>
      <p>
        Se divide el intervalo [a, b] en N+1 subintervalos iguales, generando
        N+2 nodos:
      </p>
      <pre class="bg-gray-100 p-2 rounded my-2">
<code>xᵢ = a + i·h,   donde i = 0, 1, 2, ..., N+1</code></pre>
      <p>
        El paso es: <strong>h = (b - a) / (N + 1)</strong>. Los nodos interiores
        son <em>i = 1, 2, ..., N</em>, y los nodos de frontera son
        <em>i = 0</em> y <em>i = N+1</em>.
      </p>

      <h3 class="font-bold mt-3">Aproximación por Diferencias Centradas:</h3>
      <p>
        En cada nodo interior <em>xᵢ</em>, se aproximan las derivadas mediante
        diferencias centradas:
      </p>
      <pre class="bg-gray-100 p-2 rounded my-2">
<code>y'(xᵢ) ≈ (yᵢ₊₁ - yᵢ₋₁) / (2h)
y''(xᵢ) ≈ (yᵢ₊₁ - 2yᵢ + yᵢ₋₁) / h²</code></pre>

      <h3 class="font-bold mt-3">
        Sustitución en la EDO y Formación del Sistema:
      </h3>
      <p>Al sustituir las aproximaciones en la EDO original, se obtiene:</p>
      <pre class="bg-gray-100 p-2 rounded my-2">
<code>(yᵢ₊₁ - 2yᵢ + yᵢ₋₁) / h² = p(xᵢ) * (yᵢ₊₁ - yᵢ₋₁) / (2h) + q(xᵢ) * yᵢ + r(xᵢ)</code></pre>
      <p>
        Multiplicando toda la ecuación por <strong>h²</strong> para eliminar
        denominadores:
      </p>
      <pre class="bg-gray-100 p-2 rounded my-2">
<code>yᵢ₊₁ - 2yᵢ + yᵢ₋₁ = (h/2) * p(xᵢ) * (yᵢ₊₁ - yᵢ₋₁) + h² * q(xᵢ) * yᵢ + h² * r(xᵢ)</code></pre>
      <p>
        Agrupando términos con los mismos coeficientes (<em>yᵢ₊₁</em>,
        <em>yᵢ</em>, <em>yᵢ₋₁</em>):
      </p>
      <pre class="bg-gray-100 p-2 rounded my-2">
<code>(1 - (h/2)*p(xᵢ)) * yᵢ₊₁ + (-2 - h²*q(xᵢ)) * yᵢ + (1 + (h/2)*p(xᵢ)) * yᵢ₋₁ = h² * r(xᵢ)</code></pre>
      <p>
        Esta ecuación se aplica para cada nodo interior
        <em>i = 1, 2, ..., N</em>, generando un sistema de N ecuaciones.
      </p>

      <h3 class="font-bold mt-3">Incorporación de Condiciones de Frontera:</h3>
      <p>
        Las condiciones de frontera <strong>y₀ = α</strong> y
        <strong>y_{N+1} = β</strong> se incorporan al sistema. Por ejemplo, para
        <em>i=1</em>, el término <em>y₀</em> se reemplaza por
        <strong>α</strong>, y para <em>i=N</em>, el término <em>y_{N+1}</em> se
        reemplaza por <strong>β</strong>.
      </p>
      <p>
        Esto transforma el sistema en uno de la forma <strong>AY = b</strong>,
        donde:
      </p>
      <pre class="bg-gray-100 p-2 rounded my-2">
<code>A: Matriz tridiagonal N×N
Y: Vector de incógnitas [y₁, y₂, ..., y_N]ᵀ
b: Vector de términos independientes que incluye α, β y r(xᵢ)</code></pre>

      <h3 class="font-bold mt-3">Ejemplo Práctico (Basado en las Imágenes):</h3>
      <p>
        Resolvamos el PVF: <strong>4y'' - 2y' + y + x = 0</strong>, con
        <strong>y(0)=1</strong> y <strong>y(20)=10</strong>. Tomemos
        <strong>N=3</strong> nodos interiores, por lo que
        <strong>h = (20-0)/(3+1) = 5</strong>.
      </p>
      <p>
        Los nodos son: <strong>x₀=0, x₁=5, x₂=10, x₃=15, x₄=20</strong>. Las
        condiciones de frontera son: <strong>y₀=1, y₄=10</strong>.
      </p>
      <p>
        Reescribiendo la EDO en forma normal:
        <strong>y'' = (1/2)y' - (1/4)y - (1/4)x</strong>. Aquí,
        <strong>p(x) = 1/2</strong>, <strong>q(x) = -1/4</strong>,
        <strong>r(x) = -1/4 x</strong>.
      </p>
      <p>Para <strong>i=1</strong> (nodo x₁=5):</p>
      <pre class="bg-gray-100 p-2 rounded my-2">
<code>(1 - (h/2)*(1/2)) * y₂ + (-2 - h²*(-1/4)) * y₁ + (1 + (h/2)*(1/2)) * y₀ = h² * (-1/4 * x₁)</code></pre>
      <p>Sustituyendo <strong>h=5, y₀=1, x₁=5</strong>:</p>
      <pre class="bg-gray-100 p-2 rounded my-2">
<code>(1 - 5/4) * y₂ + (-2 - 25*(-1/4)) * y₁ + (1 + 5/4) * 1 = 25 * (-1/4 * 5)
→ (-1/4) * y₂ + (2.25) * y₁ + (9/4) = -125/4
→ (2.25) * y₁ - (0.25) * y₂ = -125/4 - 9/4 = -134/4 = -33.5</code></pre>
      <p>
        Repitiendo para <strong>i=2</strong> y <strong>i=3</strong>, y usando
        <strong>y₄=10</strong>, se obtiene el sistema completo. La matriz A y el
        vector b resultantes son:
      </p>
      <pre class="bg-gray-100 p-2 rounded my-2">
<code>A = [  2.25  -0.25   0     ]
    [  0.25   2.25  -0.25  ]
    [  0      0.25   2.25  ]

b = [ -33.5      ]
    [ -62.5      ]
    [ -91.5 + 2.5 ]  // El último término incluye la contribución de y₄=10</code></pre>
      <p>
        Resolviendo este sistema, se obtienen los valores de
        <strong>y₁, y₂, y₃</strong>.
      </p>

      <h3 class="font-bold mt-3">Aplicaciones y Consideraciones:</h3>
      <ul class="list-disc pl-5 mt-2">
        <li>
          El MDF es fundamental para resolver problemas de ingeniería y física
          que involucran EDOs con condiciones en los extremos.
        </li>
        <li>
          La precisión aumenta al disminuir el tamaño del paso
          <em>h</em> (aumentar <em>N</em>).
        </li>
        <li>
          La matriz <em>A</em> siempre es tridiagonal, lo que permite usar
          algoritmos eficientes para su resolución.
        </li>
        <li>
          Es crucial manejar correctamente las condiciones de frontera para
          obtener un sistema consistente.
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped></style>
