<script setup lang="ts"></script>

<template>
  <section class="subject-view w-2/3 flex flex-col gap-6 mt-4 pb-4">
    <div class="flex justify-between">
      <div>
        <div class="flex gap-2 justify-between items-center">
          <div class="flex flex-col gap-2">
            <div class="text-xl top-0">home > Álgebra Lineal</div>
            <h1 class="text-4xl">Álgebra Lineal</h1>
          </div>
        </div>
        <div class="w-full">
          <p>
            El álgebra lineal es una rama de las matemáticas que estudia los
            espacios vectoriales y las transformaciones lineales entre ellos. Se
            centra en conceptos como vectores, matrices, determinantes y
            sistemas de ecuaciones lineales.<br />El álgebra lineal tiene
            aplicaciones en múltiples campos como la física, la computación, la
            inteligencia artificial y la economía.
          </p>
        </div>
      </div>
      <div>
        <img
          src="https://algebralinealblog.home.blog/wp-content/uploads/2019/06/figura.png?w=766"
          alt=""
          class="w-full min-w-[300px]"
        />
      </div>
    </div>
    <div class="w-full flex flex-col gap-6 pb-10">
      <div
        class="w-full h-auto border-black border-2 rounded-base border-border shadow-nav dark:shadow-navDark dark:border-darkBorder cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
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
            Sistemas de Ecuaciones</span
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
            Un sistema de ecuaciones es un conjunto de dos o más ecuaciones con
            varias incógnitas que deben cumplirse simultáneamente. Su solución
            consiste en encontrar los valores de las variables que satisfacen
            todas las ecuaciones al mismo tiempo. Dependiendo del número de
            soluciones, un sistema puede ser consistente (tiene una única
            solución o infinitas soluciones) o inconsistente (no tiene
            solución).
          </p>
        </div>
      </div>
      <div
        class="w-full h-auto border-black border-2 rounded-base border-border shadow-nav dark:shadow-navDark dark:border-darkBorder cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      >
        <div class="bg-black py-2 px-4 w-full flex items-center">
          <span
            class="text-xl text-main-green flex items-center w-full gap-1 font-semibold"
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
              class="lucide lucide-terminal h-4 w-4"
            >
              <polyline points="4 17 10 11 4 5"></polyline>
              <line x1="12" x2="20" y1="19" y2="19"></line>
            </svg>
            Solución de un Sistema de Ecuaciones</span
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
            Resolver un sistema de ecuaciones significa encontrar los valores de
            las variables que satisfacen todas las ecuaciones dadas. Existen
            distintos métodos algebraicos para hacerlo, como la sustitución, la
            igualación, la eliminación y la Regla de Cramer. Cada uno de estos
            métodos es útil en diferentes contextos, dependiendo de la
            complejidad y el tipo de sistema que se esté resolviendo.
          </p>
        </div>
      </div>
      <div
        class="w-full h-auto border-black border-2 rounded-base border-border shadow-nav dark:shadow-navDark dark:border-darkBorder cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      >
        <div class="bg-black py-2 px-4 w-full flex items-center">
          <span
            class="text-xl text-main-green flex items-center w-full gap-1 font-semibold"
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
              class="lucide lucide-terminal h-4 w-4"
            >
              <polyline points="4 17 10 11 4 5"></polyline>
              <line x1="12" x2="20" y1="19" y2="19"></line>
            </svg>
            Método de Sustitución
          </span>
        </div>
        <div class="w-full bg-white border-t-2 border-black py-2 px-4">
          <p>
            Este método consiste en despejar una variable en una de las
            ecuaciones y sustituirla en la otra ecuación. De esta forma, se
            obtiene una ecuación con una sola variable que se puede resolver
            fácilmente.
          </p>
        </div>
      </div>

      <div
        class="w-full h-auto border-black border-2 rounded-base border-border shadow-nav dark:shadow-navDark dark:border-darkBorder cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      >
        <div class="bg-black py-2 px-4 w-full flex items-center">
          <span
            class="text-xl text-main-green flex items-center w-full gap-1 font-semibold"
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
              class="lucide lucide-terminal h-4 w-4"
            >
              <polyline points="4 17 10 11 4 5"></polyline>
              <line x1="12" x2="20" y1="19" y2="19"></line>
            </svg>
            Método de Igualación
          </span>
        </div>
        <div class="w-full bg-white border-t-2 border-black py-2 px-4">
          <p>
            Este método consiste en despejar la misma variable en ambas
            ecuaciones y luego igualar las expresiones obtenidas. Esto permite
            reducir el sistema a una sola ecuación con una variable.
          </p>
        </div>
      </div>

      <div
        class="w-full h-auto border-black border-2 rounded-base border-border shadow-nav dark:shadow-navDark dark:border-darkBorder cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      >
        <div class="bg-black py-2 px-4 w-full flex items-center">
          <span
            class="text-xl text-main-green flex items-center w-full gap-1 font-semibold"
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
              class="lucide lucide-terminal h-4 w-4"
            >
              <polyline points="4 17 10 11 4 5"></polyline>
              <line x1="12" x2="20" y1="19" y2="19"></line>
            </svg>
            Método de Eliminación o Reducción
          </span>
        </div>
        <div class="w-full bg-white border-t-2 border-black py-2 px-4">
          <p>
            En este método, se suman o restan las ecuaciones del sistema con el
            objetivo de eliminar una de las variables. Luego, se resuelve la
            ecuación resultante y se sustituye el valor obtenido en otra
            ecuación.
          </p>
        </div>
      </div>

      <div
        class="w-full h-auto border-black border-2 rounded-base border-border shadow-nav dark:shadow-navDark dark:border-darkBorder cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      >
        <div class="bg-black py-2 px-4 w-full flex items-center">
          <span
            class="text-xl text-main-green flex items-center w-full gap-1 font-semibold"
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
              class="lucide lucide-terminal h-4 w-4"
            >
              <polyline points="4 17 10 11 4 5"></polyline>
              <line x1="12" x2="20" y1="19" y2="19"></line>
            </svg>
            Regla de Cramer
          </span>
        </div>
        <div class="w-full bg-white border-t-2 border-black py-2 px-4">
          <p>
            Este método utiliza determinantes para resolver sistemas de
            ecuaciones lineales. Se basa en calcular los determinantes de las
            matrices asociadas y permite encontrar soluciones exactas si el
            sistema tiene una única solución.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
