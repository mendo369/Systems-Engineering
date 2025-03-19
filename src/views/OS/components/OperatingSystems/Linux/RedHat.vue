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
             Red Hat</span
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
          @click="openInNewTab('https://www.redhat.com/es')"
          >Red Hat</span
        > fue lanzado en 1994 por la compañía Red Hat Inc. y se convirtió en una de las distribuciones más importantes en el ámbito empresarial. En 2003, la compañía dividió su desarrollo en Red Hat Enterprise Linux (RHEL), enfocado en empresas con soporte comercial, y Fedora, una versión comunitaria con las últimas innovaciones tecnológicas. Su sistema de gestión de paquetes es RPM, y se destaca por su estabilidad, seguridad y adopción en entornos corporativos y de servidores.
           </p>
           <ul class="my-2">
             <li>
                 <p><span class="font-semibold">Propósito:</span> Proveer un sistema operativo robusto para empresas y servidores.</p>
             </li>
             <li>
                 <p><span class="font-semibold">Ventajas:</span> Seguridad y estabilidad, soporte profesional, adopción en entornos corporativos.</p>
             </li>
             <li>
                 <p><span class="font-semibold">Desventajas:</span> Muchas versiones requieren suscripción para soporte, menor compatibilidad con software libre en comparación con Debian.</p>
             </li>
             <li>
                 <p><span class="font-semibold">Principales Distribuciones:</span> RHEL, Fedora, CentOS (ahora reemplazado por AlmaLinux y Rocky Linux).</p>
             </li>
           </ul>
           <img src="https://www.qindel.com/wp-content/uploads/2023/02/red-hat.jpeg" alt="" class="mx-auto my-4 w-[300px]">
         </div>
       </div>
 </template>
 


<style scoped></style>
