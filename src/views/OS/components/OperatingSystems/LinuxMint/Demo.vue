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
        Demostración Gráfica</span
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
        A continuación se muestra una demostración práctica del uso de Linux
        Mint recién instalado.
        <br />
        <br />
        <b> Menú de inicio: </b>
        <br />
        Aquí podemos ver las aplicaciones básicas que vienen con Linux Mint y
        sus funciones básicas como inicio, apagado y bloqueo de sesión.
        <img src="https://administraciondesistemas.com/wp-content/uploads/2025/01/linux-mint-cinnamon.jpg" alt="" class="mx-auto my-4 w-[350px]">
        <br />
        <br />
        <b> Trabajo con procesos: </b>
        <br />
        ▪ El comando <code>top</code> permite visualizar en tiempo real los
        procesos activos en el sistema.
        <img src="@/assets/images/OperatingSystems/top-linux-mint.png" alt="" class="mx-auto my-4 w-[350px]">
        <br />
        <br />
        <b> Información General: </b>
        <br />
        ▪ <b>Tiempo de actividad:</b> La máquina lleva 3 minutos de actividad
        desde el inicio.
        <br />
        ▪ <b>Usuarios:</b> Actualmente hay 1 usuario conectado (usuario mint).
        <br />
        ▪ <b>Promedio de carga (load average):</b> 1.22, 0.93, 0.41 — estos
        valores indican baja carga en los últimos 1, 5 y 15 minutos.
        <br />
        ▪ <b>CPU:</b>
        <br />
        - 11.5% de uso total.
        <br />
        - 2.4% en modo usuario (programas).
        <br />
        - 85.2% en estado de inactividad (idle).
        <br />
        ▪ <b>Memoria RAM:</b>
        <br />
        - Total: 5,719.7 MiB.
        <br />
        - Libre: 1,265.2 MiB.
        <br />
        - Usada en caché/buffer: 3,759.1 MiB.
        <br />
        - Swap: 0 (no se está utilizando).
        <br />
        <br />
        <b> Información de procesos: </b>
        <br />
        ▪ El comando <code>top</code> también muestra el PID, usuario, uso de
        CPU y memoria por proceso.
        <br />
        ▪ <b>Procesos destacados:</b>
        <br />
        - PID 1858 (<i>cinnamon</i>): 31.4% de uso de CPU. Es el entorno de
        escritorio.
        <br />
        - PID 1349 (<i>Xorg</i>): 7.9% de uso de CPU. Servidor gráfico.
        <br />
        - PID 2188 (<i>compton</i>): Bajo uso de CPU. Gestor de composición de
        ventanas.
        <br />
        <br />
        <b> Uso de recursos: </b>
        <br />
        ▪ <b>CPU:</b> Los procesos Cinnamon y Xorg consumen más CPU, algo normal
        en sistemas con interfaz gráfica.
        <br />
        ▪ <b>Memoria RAM:</b> El uso intensivo de buffer/cache es habitual para
        acelerar el sistema.
        <br />
        ▪ <b>Swap:</b> No se está utilizando, lo cual indica buen rendimiento.
        <br />
        <br />
        <b> Instalación de software: </b>
        <br />
        ▪ Para instalar el navegador Firefox se usa:
        <br />
        <code>sudo apt install firefox</code>
        <img src="https://b1490832.smushcdn.com/1490832/wp-content/uploads/2023/03/Installing-firefox-with-apt-get-command.jpg?lossy=2&strip=1&webp=1" alt="" class="mx-auto my-4 w-[350px]">
        <br />
        ▪ Para abrirlo:
        <br />
        <code>firefox</code>
        <img src="https://libre-software.net/wp-content/uploads/2021/04/Firefox-87-comes-with-Ubuntu-21.04-Hirsute-Hippo-by-default.png" alt="" class="mx-auto my-4 w-[350px]">
      </p>
    </div>
  </div>
</template>

<style scoped></style>
