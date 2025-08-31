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
        El orden de crecimiento</span
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
      <p> Analizamos los algoritmos utilizando una notación matemática que nos permite abstraernos de los detalles específicos de implementación y de los factores constantes. En otras palabras, no nos interesa el tiempo exacto en segundos que tarda un algoritmo, sino cómo crece ese tiempo en función del tamaño de la entrada, representado por <strong>n</strong>. </p> <p> Para ello, caracterizamos los tiempos de ejecución mediante funciones que asignan a cada valor de <strong>n</strong> un valor que refleja el número de operaciones o pasos dominantes que realiza el algoritmo. Así, lo que buscamos es identificar el <em>factor principal de crecimiento</em>, es decir, la parte de la función que determina la velocidad con la que aumenta el tiempo de ejecución a medida que <strong>n</strong> se hace más grande. </p> <p> Por ejemplo, si un algoritmo requiere <code>5n + 20</code> operaciones para una entrada de tamaño <strong>n</strong>, lo importante no es el <code>+20</code> ni el coeficiente <code>5</code>, sino el término <code>n</code>, ya que es el que domina el comportamiento del algoritmo cuando <strong>n</strong> tiende a crecer. A este tipo de análisis se le denomina <strong>notación asintótica</strong>, e incluye representaciones como <em>O-grande</em>, <em>Ω</em> y <em>Θ</em>, que nos permiten comparar algoritmos en términos de eficiencia sin depender de los detalles de hardware o implementación. </p>
    </div>
  </div>
</template>

<style scoped></style>
