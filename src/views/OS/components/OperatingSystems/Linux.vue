<script setup lang="ts">
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
        Linux</span
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
          @click="openInNewTab('https://www.linux.org/')"
          >Linux</span
        >
        es un sistema operativo de código abierto basado en Unix, conocido por
        su estabilidad, seguridad y flexibilidad. Fue creado por
        <span
          class="summary-link"
          @click="openInNewTab('https://es.wikipedia.org/wiki/Linus_Torvalds')"
          >Linus Torvalds</span
        >
        en 1991 y se distribuye bajo la licencia GPL (General Public License),
        permitiendo su uso, modificación y distribución libre. Utiliza un núcleo
        (kernel) que gestiona los recursos del hardware y puede ejecutarse en
        una amplia variedad de dispositivos, desde servidores y computadoras
        personales hasta teléfonos móviles y sistemas embebidos. Su arquitectura
        modular permite diferentes distribuciones, como Ubuntu, Debian, Fedora y
        Arch Linux, adaptadas a diversas necesidades. Linux es ampliamente
        utilizado en servidores, desarrollo de software y entornos empresariales
        debido a su seguridad, eficiencia y compatibilidad con herramientas de
        código abierto.
      </p>
      <img
        src="https://adictosalinux.com/wp-content/uploads/2024/09/Biografia-Linus-Torvalds-Creador-Linux.png"
        alt=""
        class="mx-auto my-4 w-[500px]"
      />
    </div>
  </div>
</template>

<style scoped></style>
