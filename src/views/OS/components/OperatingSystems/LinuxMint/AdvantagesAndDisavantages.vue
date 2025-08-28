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
        Ventajas y Desventajas</span
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
        Linux Mint presenta múltiples ventajas para los usuarios de escritorio,
        aunque también tiene algunas limitaciones según el caso de uso.
        <br />
        <br />
        <b> Ventajas: </b>
        <br />
        ▪ <b>Fácil de usar:</b> Su interfaz principal (Cinnamon) es muy similar
        a Windows, lo que facilita la adaptación de nuevos usuarios.
        <br />
        ▪ <b>Estabilidad:</b> Al estar basado en Ubuntu, hereda su solidez y el
        soporte LTS (Long Term Support).
        <br />
        ▪ <b>Personalización:</b> Permite una amplia personalización del entorno
        de escritorio según las preferencias del usuario.
        <br />
        <br />
        <b> Desventajas: </b>
        <br />
        ▪ <b>Menor soporte para software propietario:</b> Algunos controladores
        o aplicaciones de terceros pueden requerir configuración adicional.
        <br />
        ▪ <b>Curva de aprendizaje:</b> Aunque amigable, los usuarios
        provenientes de Windows o macOS pueden necesitar tiempo para adaptarse a
        la lógica de Linux.
      </p>
      <img
        src="https://www.muycomputer.com/wp-content/uploads/2019/05/Windows10_kernelLinux.jpg"
        alt=""
        class="mx-auto my-4 w-[350px]"
      />
    </div>
  </div>
</template>

<style scoped></style>
