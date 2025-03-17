<script setup lang="ts">
import YoutubeFrame from '../../../../components/shared/youtube-frame.vue';

function openInNewTab(url: string) {
  window.open(url, "_blank");
}
</script>

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
        Instalación de VirtualBox</span
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
        <span
          class="summary-link"
          @click="openInNewTab('https://www.virtualbox.org/')"
          >VirtualBox</span
        > es un software de virtualización  que permite crear y ejecutar máquinas virtuales  (VMs) en tu computadora. Es una herramienta gratuita y de código abierto desarrollada por Oracle. Con VirtualBox, puedes ejecutar múltiples sistemas operativos (invitados) dentro de un sistema operativo principal (anfitrión o host), sin necesidad de reiniciar la computadora o tener hardware dedicado para cada sistema operativo.
      </p>
      <br />
      <div>
        <ol class="list-decimal">
          <li>
            <div>
              <p>Nos dirigimos al sitio oficial de Oracle VirtualBox</p>
              <img src="@/assets/images/OperatingSystems/virtualbox-1.webp" alt="" />
            </div>
          </li>
          <li>
            <div>
              <p>Vamos a la sección de descargas</p>
              <img src="@/assets/images/OperatingSystems/virtualbox-2.webp" alt="" />
            </div>
          </li>
          <li>
            <div>
              <p>
                Seleccionamos la opción acorde al sistema operativo de nuestro
                equipo
              </p>
              <img src="@/assets/images/OperatingSystems/virtualbox-3.webp" alt="" />
            </div>
          </li>
          <li>
            <div>
              <p>
                Esperamos que termine la descarga y procedemos a ejecutar el
                instalador
              </p>
              <img src="@/assets/images/OperatingSystems/virtualbox-4.webp" alt="" />
            </div>
          </li>
          <li>
            <div>
              <p>
                Una vez se ejecute el instalador le damos <span class="font-semibold">Next</span> a todo y esperamos a que finalice la instalación
              </p>
              <img src="@/assets/images/OperatingSystems/virtualbox-5.webp" alt="" />
            </div>
          </li>
        </ol>
      </div>
      <p>También te dejamos este video de guia para una mayor entendimiento.</p>
      <div class="pl-[1.4em]">
        <YoutubeFrame video-url="https://www.youtube.com/embed/3EpWqt8q9sA?si=5_fBzm5jvu9j8tk4&amp;controls=0"></YoutubeFrame>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
