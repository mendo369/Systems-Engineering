<script setup lang="ts"></script>

<template>
  <section>
    <div class="w-full bg-white  border-black border-b-4 p-4 flex justify-between">
        <div>
            <h1 class="text-7xl font-black">Sistemas Operativos</h1>
        </div>

        <div class="flex items-center justify-between text-2xl font-bold tracking-[1px] gap-4">
            <div class="border-black border-2 px-2 py-1 m800:hidden flex gap-2 items-center justify-center rounded-base border-border shadow-nav dark:shadow-navDark dark:border-darkBorder p-2 transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none dark:hover:shadow-none cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Buscar...</div>
            <div class="border-black border-2 px-2 py-1 m800:hidden flex gap-2 items-center justify-center rounded-base  shadow-nav dark:shadow-navDark dark:border-darkBorder p-2 transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none dark:hover:shadow-none cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Colaborar <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACQUlEQVRIS7WVT0hVQRSHNZQ2CUJiaAsXKiRqUOJKhAcuJBTKAlEQhYzKBCGl0kAU6Q8ZWLmwoHaCKGKJQitxIRQtQorUEkSMNuqiFkZQYfr9YEbG6d33ros38DFnzpw5v3vnzpybnJTglpzg/EnxBFJ5gHNwBoohH7RmDT7Ca5iAv0EPGkuggkXPIC/OW64yfwVmosUFCdwk+D4cCrmFO8Tdgod+fDSBGwT1h0zsh7XjeOQ6fYEIk7Nmn7W/F6EFus2+fzOLs+lz4R48hUG4AHqTcnhjRVyBwzgXwO55H3aPCcyh/+o9ruu7zdxdM79EfxK2NXYFahmPOUkeY1/3kgYNHzCh72ZbFYZ2YJ/AMOMGJ6gM+21IAT3xByffEHarL6DtKTQJl+lPhExuw95jlJiB7FJfYANHpgmYoj97QIER4uvNmu/0R32BdRzHTIBOki7aQdo0wdVmwU/6NF9gHscpE7BFnwF/QiqopGxCuon/Ql/gCzzHcclJeBlbvjCtmaAXTqAOTKMvUIPjJfwAvWIWdIIu0q8AlSP4r4FfVnTkx30B3YlFOA6VcBWaQNukM10Hv42QtuSViUvxxD8zLoJ/voDG50HlVyVBx2wUIrB3rp1kupR6Ur9pJyatM1qxe8JkG6j+3ImSwLp6MWwpsb4BjA53TVC5VnLVojn4BLqE+je4TfOKs02lIlS5tgtUFVWPToNqjT6421RJu+AdqGap/6/F+2VqXr/MFfMmbgKVEp11fezAFk8g1tpQcwkX2AXTgWEZpmSPcwAAAABJRU5ErkJggg=="/></div>
            <div class="border-black border-2 px-2 py-1 m800:hidden flex gap-2 items-center justify-center rounded-base  border-border shadow-nav dark:shadow-navDark dark:border-darkBorder p-2 transition-all hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none dark:hover:shadow-none cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Más proyectos</div>
        </div>
    </div>
  </section>
</template>


<style scoped>
.shadow{
    box-shadow: 4px 4px 0px 0px var(--border)
}

.shadow-none{
    box-shadow: 0px 0px 0px 0px transparent !important;
}
</style>
