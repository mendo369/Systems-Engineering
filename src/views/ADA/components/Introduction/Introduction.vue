<script setup lang="ts">
</script>

<template>
   <div
        class="w-full h-auto border-black border-2 rounded-base border-border shadow-nav dark:shadow-navDark dark:border-darkBorder  shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
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
            ¿Qué es un algoritmo?</span
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
            Es un procedimiento computacional bien definido que toma uno o varios
            valores como entrada y produce uno o varios valores como Salida.
            Una secuencia de pasos computacionales que transforman la entrada
            en la salida
            Una herramienta para solucionar un problema computacional bien
            especificado.
            <br>
            <br>
            Un algoritmo está conformado por una entrada, un procesamiento y una salida.
            <br>
            <br>
            Dentro de sus características encontramos que son:
            <br>
            <strong>Finitos: </strong>Finaliza después de realizar cierta cantidad de instrucciones.
            <br>
            <strong>Deterministas: </strong>Produce valores de salida correcto a cada conjunto de valores de entrada.
            <br>
            <strong>Eficientes: </strong>Utiliza la cantidad de recursos (Espaciales y temporales) adecuada al ejecutarse.
            <br>
            <br>
            La eficiencia de un algoritmo es:
            <br>
            <strong>Espacial: </strong>Depende directamente de las estructuras de datos utilizadas en el diseño.
            <br>
            <strong>Temporal: </strong>Depende de la cantidad de instrucciones o pasos que deban ejecutarse para llegar a la solución del problema.
          </p>
        </div>
      </div>
</template>


<style scoped></style>
