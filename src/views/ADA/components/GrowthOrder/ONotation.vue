<script setup lang="ts">
</script>

<template>
  <div
    class="w-full h-auto border-black border-2 rounded-base border-border shadow-nav dark:shadow-navDark dark:border-darkBorder shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
  >
    <!-- Header -->
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
        Notación O
      </span>
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

    <div class="w-full bg-white border-t-2 border-black py-4 px-6 space-y-4">
      <div class="flex justify-center">
        <img
          src="@/assets/images/ADA-I/notation-o.png"
          alt="Notación O"
          class="rounded-md border border-black max-h-64"
        />
      </div>

      <div class="space-y-2 text-gray-900">
        <p>
          <strong>Definición:</strong> O(g(n)) = { f(n) : Existen constantes
          positivas <em>c</em> y <em>n₀</em> tales que
        </p>
        <p class="pl-6">
          0 ≤ f(n) ≤ c·g(n), para todo n ≥ n₀
        </p>

        <p class="mt-3">
          <strong>Ejemplo:</strong> Encontrar los valores de <em>c</em> y
          <em>n₀</em> para las siguientes funciones:
        </p>

        <ul class="list-disc list-inside space-y-1 font-semibold">
          <li>f(n) = 3n + 8</li>
          <li>f(n) = n² + 1</li>
          <li>f(n) = 2n³ - 2n²</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
