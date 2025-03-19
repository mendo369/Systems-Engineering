<script setup lang="ts">
function openInNewTab(url: string) {
  window.open(url, "_blank");
}
</script>

<template>
    <div class="w-full h-auto border-black border-2 rounded-base border-border shadow-nav dark:shadow-navDark dark:border-darkBorder cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
         <div class="bg-black py-2 px-4 w-full flex items-center">
           <span class="text-xl flex items-center w-full gap-1 font-semibold text-main-green">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-terminal h-4 w-4 text-main-green">
               <polyline points="4 17 10 11 4 5"></polyline>
               <line x1="12" x2="20" y1="19" y2="19"></line>
             </svg>
             Gentoo</span>
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-5 w-5 shrink-0 transition-transform duration-200">
             <path d="m6 9 6 6 6-6"></path>
           </svg>
         </div>
         <div class="w-full bg-white border-t-2 border-black py-2 px-4">
           <p><span
          class="summary-link"
          @click="openInNewTab('https://www.linux.org/')"
          >Gentoo Linux</span
        > fue creado en 2000 por Daniel Robbins con un enfoque en rendimiento y personalización extrema. Usa el sistema de paquetes Portage, que permite compilar el software desde el código fuente optimizado para el hardware del usuario. Esto lo hace altamente eficiente, aunque también más complejo y lento en la instalación y mantenimiento.
           </p>
           <ul class="my-2">
             <li>
                 <p><span class="font-semibold">Propósito:</span> Ofrecer un sistema optimizado y completamente personalizable para usuarios avanzados.</p>
             </li>
             <li>
                 <p><span class="font-semibold">Ventajas:</span> Máxima optimización y control, adaptable a cualquier necesidad.</p>
             </li>
             <li>
                 <p><span class="font-semibold">Desventajas:</span> Requiere conocimientos avanzados, instalación y mantenimiento demandan tiempo.</p>
             </li>
             <li>
                 <p><span class="font-semibold">Principales Distribuciones:</span> Sabayon (descontinuado), Funtoo.</p>
             </li>
           </ul>
           <img src="https://infolinux.es/wp-content/uploads/2023/10/gentoo.png" alt="" class="mx-auto my-4 w-[300px]">
         </div>
       </div>
 </template>


<style scoped></style>
