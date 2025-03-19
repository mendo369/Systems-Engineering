<script setup lang="ts">
function openInNewTab(url: string) {
  window.open(url, "_blank");
}
</script>

<template>
    <div class="w-full h-auto border-black border-2 rounded-base border-border shadow-nav dark:shadow-navDark dark:border-darkBorder cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
         <div class="bg-black py-2 px-4 w-full flex items-center">
           <span class="text-xl flex items-center w-full gap-1 font-semibold text-main-green">Slackware</span>
         </div>
         <div class="w-full bg-white border-t-2 border-black py-2 px-4">
           <p><span
          class="summary-link"
          @click="openInNewTab('http://www.slackware.com/')"
          >Slackware</span
        > es una de las distribuciones de Linux más antiguas, lanzada en 1993 por Patrick Volkerding. Se enfoca en simplicidad, estabilidad y una experiencia Unix pura, evitando modificaciones innecesarias a los paquetes de software.
           </p>
           <ul class="my-2">
             <li>
                 <p><span class="font-semibold">Propósito:</span> Proveer un sistema estable y fiel a Unix para usuarios avanzados.</p>
             </li>
             <li>
                 <p><span class="font-semibold">Ventajas:</span> Altamente estable, sin modificaciones innecesarias.</p>
             </li>
             <li>
                 <p><span class="font-semibold">Desventajas:</span> No cuenta con un gestor de paquetes automatizado.</p>
             </li>
             <li>
                 <p><span class="font-semibold">Principales Distribuciones:</span> Salix, Zenwalk.</p>
             </li>
           </ul>
           <img src="https://www.linuxsc.net/wp-content/uploads/2021/02/Slackware_logo.png" alt="" class="mx-auto my-4 w-[200px]" >
         </div>
       </div>
 </template>


<style scoped></style>