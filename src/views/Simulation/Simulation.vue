<script setup lang="ts">
import { useSubjectsStore } from "@/store/subjects.store";
import Question from "@/components/shared/Question.vue";
import Introduction from "./components/Introduction.vue";
import TaylorSeries from "./components/TaylorSeries.vue";
import ErrorTheory from "./components/ErrorTheory.vue";
import NonLinearEquations from "./components/NonLinearEquations.vue";
import BolzanoTheorem from "./components/BolzanoTheorem.vue";
import BisectionMethod from "./components/BisectionMethod.vue";

const subjectsStore = useSubjectsStore();

// Aquí puedes cargar ejemplos si los tienes en el store
const bolzanoTheoremExample = subjectsStore.getExamples(
  "simulation-numerical-computing",
  "bolzano-theorem"
);
const bisectionMethodExample = subjectsStore.getExamples(
  "simulation-numerical-computing",
  "bisection-method"
);
</script>

<template>
  <section class="subject-view w-2/3 flex flex-col gap-6 mt-4">
    <div class="flex justify-between">
      <div>
        <div class="flex gap-2 justify-between items-center">
          <div class="flex flex-col gap-2">
            <div class="text-xl top-0">
              home > Simulación y Computación Numérica
            </div>
            <h1 class="text-4xl">Simulación y Computación Numérica</h1>
          </div>
        </div>
        <div class="w-full">
          <p>
            La Simulación y Computación Numérica es una disciplina fundamental
            en ciencias e ingeniería que combina técnicas matemáticas y
            computacionales para resolver problemas complejos que no pueden
            abordarse analíticamente. Esta materia se enfoca en el desarrollo de
            modelos computacionales que imitan el comportamiento de sistemas
            reales, permitiendo estudiar su evolución en el tiempo y analizar
            escenarios sin necesidad de experimentación física. Además, se
            estudian métodos numéricos para aproximar soluciones con un control
            preciso de errores, lo que resulta esencial en aplicaciones como la
            dinámica de fluidos, la predicción meteorológica o el análisis
            financiero.
          </p>
        </div>
      </div>
      <div>
        <img
          src="https://via.placeholder.com/300x200?text=Simulación+y+Computación+Numérica"
          alt="Simulación y Computación Numérica"
          class="w-full min-w-[300px]"
        />
      </div>
    </div>

    <div class="w-full flex flex-col gap-6 pb-10">
      <!-- Sección 1: Introducción -->
      <div class="section-title">
        <h1>Introducción a la Simulación y Computación Numérica</h1>
      </div>
      <Introduction></Introduction>

      <!-- Sección 2: Errores y Series de Taylor -->
      <div class="section-title">
        <h1>Errores | Series de Taylor</h1>
      </div>
      <TaylorSeries></TaylorSeries>

      <!-- Sección 3: Teoría del Error -->
      <div class="section-title">
        <h1>Teoría del Error | Dígitos Significativos</h1>
      </div>
      <ErrorTheory></ErrorTheory>

      <!-- Sección 4: Soluciones de Ecuaciones No Lineales -->
      <div class="section-title">
        <h1>Soluciones de Ecuaciones No Lineales</h1>
      </div>
      <NonLinearEquations></NonLinearEquations>
      <BolzanoTheorem></BolzanoTheorem>

      <!-- Ejemplo de código -->
      <Question
        :text="bolzanoTheoremExample[0].text"
        :code="bolzanoTheoremExample[0].code"
        :show-solution-button="bolzanoTheoremExample[0].showSolutionButton"
        :language="bolzanoTheoremExample[0].language"
      ></Question>
    </div>
    <BisectionMethod></BisectionMethod>

    <!-- Ejemplo de código -->
    <Question
      :text="bisectionMethodExample[0].text"
      :code="bisectionMethodExample[0].code"
      :show-solution-button="bisectionMethodExample[0].showSolutionButton"
      :language="bisectionMethodExample[0].language"
    ></Question>
  </section>
</template>

<style scoped></style>
