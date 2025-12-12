<script setup lang="ts">
import { onMounted, watch, ref } from "vue";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-python.js";
import "prismjs/components/prism-rust.js";

const props = defineProps<{
  code: string;
  language?: string;
}>();

const lang = props.language || "python";
const showCopied = ref(false);
const output = ref("");
const isRunning = ref(false);
const showError = ref(false);

// Función para copiar al portapapeles
const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(props.code);
    showCopied.value = true;
    setTimeout(() => {
      showCopied.value = false;
    }, 2000);
  } catch (err) {
    console.error("Error al copiar:", err);
  }
};

// Solo ejecutar Rust (sin autenticación requerida)
const runCode = async () => {
  if (lang !== "rust") {
    output.value = "Ejecución solo disponible para Rust en esta demo";
    showError.value = true;
    return;
  }

  isRunning.value = true;
  output.value = "";
  showError.value = false;

  try {
    const response = await fetch("https://play.rust-lang.org/execute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: props.code,
        edition: "2021",
        channel: "stable",
        mode: "debug",
        crateType: "bin",
        tests: false,
      }),
    });

    const result = await response.json();
    if (result.success) {
      output.value = result.stdout || "Ejecución completada (sin salida)";
    } else {
      output.value = result.stderr || "Error desconocido";
      showError.value = true;
    }
  } catch (err) {
    console.error("Error ejecutando Rust:", err);
    output.value = "Error ejecutando código: " + (err as Error).message;
    showError.value = true;
  } finally {
    isRunning.value = false;
  }
};

// Resaltar el código cuando cambia
watch(
  () => props.code,
  () => {
    Prism.highlightAll();
  }
);

onMounted(() => {
  Prism.highlightAll();
});
</script>
<template>
  <div class="code-container">
    <div class="code-header">
      <span class="language-tag">{{ language || "python" }}</span>
      <div class="header-buttons">
        <button
          class="copy-button"
          @click="copyToClipboard"
          :title="showCopied ? '¡Copiado!' : 'Copiar al portapapeles'"
        >
          {{ showCopied ? "✓ Copiado" : "Copiar" }}
        </button>
        <button
          class="run-button"
          @click="runCode"
          :disabled="isRunning"
          title="Ejecutar código"
        >
          {{ isRunning ? "⏳ Ejecutando..." : "▶ Ejecutar" }}
        </button>
      </div>
    </div>
    <pre><code :class="`language-${lang}`">{{ code }}</code></pre>

    <!-- Área de salida -->
    <div v-if="output" class="output-container" :class="{ error: showError }">
      <div class="output-header">
        <span>Salida:</span>
      </div>
      <pre class="output-content">{{ output }}</pre>
    </div>
  </div>
</template>

<style scoped>
.code-container {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  margin: 1rem 0;
  border: 1px solid #444;
}

.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1e1e1e;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #444;
}

.language-tag {
  font-size: 0.8rem;
  font-weight: bold;
  color: #aaa;
  text-transform: uppercase;
}

.header-buttons {
  display: flex;
  gap: 0.5rem;
}

.copy-button,
.run-button {
  background: #444;
  color: white;
  border: none;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.2s ease;
}

.copy-button:hover,
.run-button:hover {
  background: #666;
}

.copy-button:active,
.run-button:active {
  background: #888;
}

.run-button:disabled {
  background: #666;
  cursor: not-allowed;
}

pre {
  margin: 0;
  border-radius: 0;
  overflow: auto;
  background: #2d2d2d;
}

.output-container {
  background: #1e1e1e;
  border-top: 1px solid #444;
  max-height: 300px;
  overflow: auto;
}

.output-container.error {
  border-left: 3px solid #ff4444;
}

.output-header {
  background: #2d2d2d;
  padding: 0.5rem 1rem;
  font-weight: bold;
  color: #aaa;
  border-bottom: 1px solid #444;
}

.output-content {
  margin: 0;
  padding: 1rem;
  color: #fff;
  font-family: "Courier New", monospace;
  font-size: 0.9rem;
  white-space: pre-wrap;
  background: #1e1e1e;
}
</style>
