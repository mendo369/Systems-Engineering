<script setup lang="ts"></script>

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
            Familias de Linux</span
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
            Las familias de Linux agrupan distribuciones que comparten una base común, incluyendo su gestor de paquetes, filosofía de diseño y compatibilidad entre software. Estas familias han surgido a lo largo del tiempo para adaptarse a diferentes necesidades, desde sistemas estables y fáciles de usar hasta opciones avanzadas y altamente personalizables. Cada una tiene sus propias características, ventajas y comunidades de soporte, permitiendo a los usuarios elegir la que mejor se adapte a sus requerimientos.
          </p>
        </div>
      </div>
</template>


<style scoped></style>
