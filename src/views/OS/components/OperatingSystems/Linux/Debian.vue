<script setup lang="ts">
function openInNewTab(url: string) {
  window.open(url, "_blank");
}
</script>

<template>
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
             Debian</span
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
           <p><span
          class="summary-link"
          @click="openInNewTab('https://www.debian.org/index.es.html')"
          >Debian</span
        > es una de las distribuciones de Linux más antiguas y estables. Fue fundada en 1993 por Ian Murdock con la idea de crear un sistema completamente libre y comunitario. Desde entonces, Debian ha servido como base para muchas distribuciones populares como Ubuntu y Linux Mint. Se caracteriza por su enfoque en estabilidad, seguridad y compatibilidad, además de contar con uno de los repositorios de software más extensos. Su sistema de gestión de paquetes APT facilita la instalación y actualización del software, y es ampliamente utilizado tanto en servidores como en entornos de escritorio.
           </p>
           <ul class="my-2">
             <li>
                 <p><span class="font-semibold">Propósito:</span> Ofrecer un sistema estable y versátil, adecuado para servidores y usuarios de escritorio.</p>
             </li>
             <li>
                 <p><span class="font-semibold">Ventajas:</span> Alta estabilidad y seguridad, amplio soporte de la comunidad, extenso catálogo de software.</p>
             </li>
             <li>
                 <p><span class="font-semibold">Desventajas:</span> Paquetes pueden ser antiguos debido a su enfoque en estabilidad, instalación inicial algo compleja.</p>
             </li>
             <li>
                 <p><span class="font-semibold">Principales Distribuciones:</span> Ubuntu, Linux Mint, Kali Linux, MX Linux.</p>
             </li>
           </ul>
           <img src="https://prowse.tech/content/images/size/w300/2024/05/debian_logo_icon_168290.png" alt="" class="mx-auto my-4">
         </div>
       </div>
 </template>
 


<style scoped></style>
