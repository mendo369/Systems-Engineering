<script setup lang="ts">
import YoutubeFrame from '../../../../components/shared/youtube-frame.vue';

function openInNewTab(url: string) {
  window.open(url, "_blank");
}
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
        Creación y configuración de una máquina virtual (VirtualBox)</span
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
        Una vez desargado e instalado el VirtualBox, es hora de crear una máquina virtual. A continuación verás una serie de pasoa para crear y configurar una máquina virtual.
      </p>
      <br />
      <div>
        <ol class="list-decimal">
          <li>
            <div>
              <p>Abrimos el programa y hacemos click en el icono de <span  class="font-semibold text-blue-400">Nueva</span>, o también puedes presionas <span class="font-semibold text-blue-400">Ctrl+N</span>.</p>
              <img src="@/assets/images/OperatingSystems/virtualbox-configuration-1.webp" alt="" />
            </div>
          </li>
          <li>
            <div>
              <p>Ahora en esta pestaña le asignamos un nombre a nuestra máquina virtual</p>
              <img src="@/assets/images/OperatingSystems/virtualbox-configuration-2.webp" alt="" />
            </div>
          </li>
          <li>
            <div>
              <p>
                Seleccionamos el tipo de sistema operativo
              </p>
              <img src="@/assets/images/OperatingSystems/virtualbox-configuration-3.webp" alt="" />
            </div>
          </li>
          <li>
            <div>
              <p>
                Seleccionamos el subtipo
              </p>
              <img src="@/assets/images/OperatingSystems/virtualbox-configuration-4.webp" alt="" />
            </div>
          </li>
          <li>
            <div>
              <p>
                Seleccionamos la versión
              </p>
              <img src="@/assets/images/OperatingSystems/virtualbox-configuration-5.webp" alt="" />
            </div>
          </li>
          <li>
            <div>
              <p>
                Ahora le damos click a <span class="font-semibold">Siguiente</span>
              </p>
              <img src="@/assets/images/OperatingSystems/virtualbox-configuration-6.webp" alt="" />
            </div>
          </li>
          <li>
            <div>
              <p>
                En esta sección le damos a la máquina virtual determinada cantidad de <span class="summary-link" @click="openInNewTab('https://www.xataka.com/basics/memoria-ram-que-sirve-como-mirar-cuanta-tiene-tu-ordenador-movil')">memoria</span> y <span class="summary-link" @click="openInNewTab('https://www.xataka.com/basics/memoria-ram-que-sirve-como-mirar-cuanta-tiene-tu-ordenador-movil')">procesadores</span> y le damos click a <span class="font-semibold">Siguiente</span>.
              </p>
              <img src="@/assets/images/OperatingSystems/virtualbox-configuration-7.webp" alt="" />
            </div>
          </li>
          <li>
            <div>
              <p>
                En esta sección le damos a la máquina virtual determinada cantidad de <span class="summary-link" @click="openInNewTab('https://www.purestorage.com/la/knowledge/what-is-computer-memory.html')">disco virtual</span> y le damos click a <span class="font-semibold">Siguiente</span>.
              </p>
              <img src="@/assets/images/OperatingSystems/virtualbox-configuration-8.webp" alt="" />
            </div>
          </li>
          <li>
            <div>
              <p>
                Y finalmente vermos una pestaña con la descrpción de las configuraciones de nuestra máquina y en caso de estar todo correcto, le damos click a <span class="font-semibold">Terminar</span>.
              </p>
              <img src="@/assets/images/OperatingSystems/virtualbox-configuration-9.webp" alt="" />
            </div>
          </li>
        </ol>
      </div>
      <p>También te dejamos este video de una creación de máquina virtual con <span class="summary-link" @click="openInNewTab('https://linuxmint.com/')">Linux Mint</span> para una mayor entendimiento.</p>
      <div class="pl-[1.4em]">
        <YoutubeFrame video-url="https://www.youtube.com/embed/pA933H0WRbE?si=-KDw9iVQycxlmvx0&amp;controls=0"></YoutubeFrame>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
