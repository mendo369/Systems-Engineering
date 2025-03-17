<script setup lang="ts">
import Introduction from './components/VirtualMachines/Introduction.vue';
import VirtaulBoxInstallation from './components/VirtualMachines/VirtaulBoxInstallation.vue';
import VirtualBoxConfiguration from './components/VirtualMachines/VirtualBoxConfiguration.vue';


</script>

<template>
  <section class="subject-view w-2/3 flex flex-col gap-6 mt-4">
    <div class="flex justify-between">
      <div>
        <div class="flex gap-2 justify-between items-center">
          <div class="flex flex-col gap-2">
            <div class="text-xl top-0">home > Sistemas Operativos</div>
            <h1 class="text-4xl">Sistemas Operativos</h1>
          </div>
        </div>
        <div class="w-full">
          <p>
            Un sistema operativo es un software que gestiona los recursos de
            hardware y software de una computadora, proporcionando una interfaz
            entre el usuario y el hardware. Controla procesos, memoria,
            dispositivos de entrada/salida y permite la ejecución de programas.
          </p>
        </div>
      </div>
      <div>
        <img
          src="https://st3.depositphotos.com/5572924/36327/i/450/depositphotos_363276616-stock-illustration-set-top-brand-operating-system.jpg"
          alt=""
          class="w-full min-w-[300px]"
        />
      </div>
    </div>
    <div class="w-full flex flex-col gap-6 pb-10">
      <div class="section-title">
        <h1>Maquinas Virtuales</h1>
      </div>
      <Introduction></Introduction>
      <VirtaulBoxInstallation></VirtaulBoxInstallation>
      <VirtualBoxConfiguration></VirtualBoxConfiguration>
    </div>
  </section>
</template>

<style scoped></style>
