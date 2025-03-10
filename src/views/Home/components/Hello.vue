<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Lista de "Hello World" en diferentes lenguajes
const messages = [
  'print("Hello, World!")',
  'console.log("Hello, World!");',
  'System.out.println("Hello, World!");',
  'puts "Hello, World!"',
  'fmt.Println("Hello, World!")',
  'echo "Hello, World!";',
];

const currentMessage = ref('');
const currentIndex = ref(0);
const isDeleting = ref(false);

// Función para simular el efecto de máquina de escribir
function typeWriter() {
  const message = messages[currentIndex.value];
  const fullText = message;

  if (isDeleting.value) {
    // Borrar texto
    currentMessage.value = fullText.substring(0, currentMessage.value.length - 1);
  } else {
    // Escribir texto
    currentMessage.value = fullText.substring(0, currentMessage.value.length + 1);
  }

  if (!isDeleting.value && currentMessage.value === fullText) {
    // Si terminó de escribir, espera un momento y comienza a borrar
    isDeleting.value = true;
    setTimeout(typeWriter, 1000); // Pausa antes de borrar
    return;
  }

  if (isDeleting.value && currentMessage.value === '') {
    // Si terminó de borrar, cambia al siguiente mensaje
    isDeleting.value = false;
    currentIndex.value = (currentIndex.value + 1) % messages.length;
  }

  // Velocidad de escritura/borrado
  const typingSpeed = isDeleting.value ? 30 : 50;
  setTimeout(typeWriter, typingSpeed);
}

// Iniciar el efecto cuando el componente se monta
onMounted(() => {
  typeWriter();
});
</script>

<template>
  <div class="typewriter text-3xl">
    <span>{{ currentMessage }}</span>
    <span class="cursor">|</span>
  </div>
</template>

<style scoped>
.typewriter {
    font-weight: 600;
  font-family: monospace;
  white-space: nowrap;
  overflow: hidden;
}

.cursor {
  animation: blink 0.75s infinite;
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>