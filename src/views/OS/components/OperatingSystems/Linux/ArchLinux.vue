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
             Arch Linux</span>
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down h-5 w-5 shrink-0 transition-transform duration-200">
             <path d="m6 9 6 6 6-6"></path>
           </svg>
         </div>
         <div class="w-full bg-white border-t-2 border-black py-2 px-4">
           <p><span
          class="summary-link"
          @click="openInNewTab('https://archlinux.org/')"
          >Arch Linux</span
        > fue lanzado en 2002 por Judd Vinet y se basa en la filosofía "Keep It Simple, Stupid" (KISS), ofreciendo un sistema altamente personalizable y ligero. Utiliza el gestor de paquetes Pacman y sigue un modelo de actualización continua (rolling release), lo que permite a los usuarios tener siempre las versiones más recientes del software sin necesidad de reinstalaciones.
           </p>
           <ul class="my-2">
             <li>
                 <p><span class="font-semibold">Propósito:</span> Proveer un sistema minimalista y flexible para usuarios avanzados.</p>
             </li>
             <li>
                 <p><span class="font-semibold">Ventajas:</span> Ligero, altamente personalizable, software actualizado constantemente.</p>
             </li>
             <li>
                 <p><span class="font-semibold">Desventajas:</span> Instalación y configuración complejas, requiere conocimientos avanzados.</p>
             </li>
             <li>
                 <p><span class="font-semibold">Principales Distribuciones:</span> Manjaro, EndeavourOS, Artix Linux.</p>
             </li>
           </ul>
           <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Archlinux-logo-standard-version.png" alt="" class="mx-auto my-4 w-[300px]">
         </div>
       </div>
 </template>

<style scoped></style>
