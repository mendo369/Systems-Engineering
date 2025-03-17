<script setup lang="ts">
defineProps({ videoUrl: String });
</script>

<template>
  <div class="w-[560px] mx-auto my-4">
    <iframe
      class="w-full h-full"
      :src="videoUrl"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>
</template>

<style scoped>
div {
  aspect-ratio: 16/9;
}
</style>
