<template>
  <div
    class="w-full h-auto border-black border-2 rounded-base border-border shadow-nav dark:shadow-navDark dark:border-darkBorder cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
  >
    <div class="bg-black py-2 px-4 w-full flex items-center">
      <span
        class="text-xl flex items-center w-full gap-1 font-semibold text-main-green"
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
          class="lucide lucide-terminal h-4 w-4 text-main-green"
        >
          <polyline points="4 17 10 11 4 5"></polyline>
          <line x1="12" x2="20" y1="19" y2="19"></line>
        </svg>
        Características Técnicas</span
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
        Linux Mint cuenta con una serie de características técnicas que la hacen
        accesible y versátil para distintos tipos de usuarios y dispositivos.
        <br />
        <br />
        <b> Gestor de paquetes: </b>
        <br />
        APT (Advanced Package Tool): Linux Mint utiliza el gestor de paquetes
        APT, proveniente de Ubuntu, para instalar y actualizar software
        fácilmente mediante comandos como
        <code>sudo apt install &lt;paquete&gt;</code>.
        <br />
        <br />
        <b> Entornos de escritorio predeterminados: </b>
        <br />
        Cinnamon: Es el entorno de escritorio principal, diseñado para ofrecer
        una experiencia moderna, intuitiva y altamente personalizable.
        <br />
        MATE y Xfce: También disponibles como opciones más ligeras, ideales para
        equipos con recursos limitados o más antiguos.
        <br />
        <br />
        <b> Arquitecturas soportadas: </b>
        <br />
        x86_64: Linux Mint está diseñado principalmente para sistemas de 64
        bits.
        <br />
        ARM: Se han comenzado desarrollos para ofrecer soporte en dispositivos
        con arquitectura ARM.
        <br />
        <br />
        <b> Requisitos mínimos de hardware: </b>
        <br />
        CPU: 1 GHz.
        <br />
        RAM: 2 GB (4 GB recomendados).
        <br />
        Espacio en disco: 15 GB de espacio libre.
      </p>
      <img
        src="https://www.shells.com/static/media/linuxmint_overlay-fs8.18c0bff8.png"
        alt=""
        class="mx-auto my-4 w-[350px]"
      />
    </div>
  </div>
</template>

<style scoped></style>
