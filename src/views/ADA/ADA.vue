<script setup lang="ts">
import { useSubjectsStore } from '@/store/subjects.store'
import Question from '@/components/shared/Question.vue';
import AlgorithmAnalysis from './components/Introduction/AlgorithmAnalysis.vue';
import Introduction from './components/Introduction/Introduction.vue';
import GrowthOrder from './components/GrowthOrder/GrowthOrder.vue';
import ThetaNotation from './components/GrowthOrder/ThetaNotation.vue';
import OmegaNotation from './components/GrowthOrder/OmegaNotation.vue';
import ONotation from './components/GrowthOrder/ONotation.vue';
import AlgorithmicComplexities from './components/GrowthOrder/AlgorithmicComplexities.vue';

const subjectsStore = useSubjectsStore()

const introductionExamples = subjectsStore.getExamples('ada-i', 'algorithm-analysis')
const growthOrderExamples = subjectsStore.getExamples('ada-i', 'growth-order')

</script>
<template>
  <section class="subject-view w-2/3 flex flex-col gap-6 mt-4">
    <div class="flex justify-between">
      <div>
        <div class="flex gap-2 justify-between items-center">
          <div class="flex flex-col gap-2">
            <div class="text-xl top-0">home > ADA I</div>
            <h1 class="text-4xl">Análisis y diseños de algoritmos I</h1>
          </div>
        </div>
        <div class="w-full">
          <p>
            El análisis y diseño de algoritmos es una disciplina fundamental en
            la informática que estudia cómo resolver problemas de manera
            eficiente a través de pasos lógicos bien definidos. En este curso se
            abordan conceptos clave como la notación Big-O, la recursividad, las
            estrategias de diseño (divide y vencerás, programación dinámica,
            algoritmos voraces) y el estudio de estructuras de datos que
            permiten optimizar el rendimiento de los programas. Su objetivo es
            formar bases sólidas para comprender y crear soluciones que no solo
            sean correctas, sino también eficientes en tiempo y memoria.
          </p>
        </div>
      </div>
      <div>
        <img
          src="https://camo.githubusercontent.com/5d76e57d0888141b11472aef0c642b6ecb4f67e3128ea794591b39fe743a8262/68747470733a2f2f70616e646f7261666d732e636f6d2f626c6f672f77702d636f6e74656e742f75706c6f6164732f323031382f30352f7175652d65732d756e2d616c676f7269746d6f2d66656174757265642e706e67"
          alt=""
          class="w-full min-w-[300px]"
        />
      </div>
    </div>
    <div class="w-full flex flex-col gap-6 pb-10">
      <div class="section-title">
        <h1>Introducción</h1>
      </div>
      <Introduction></Introduction>
      <AlgorithmAnalysis></AlgorithmAnalysis>
      <Question :text="introductionExamples[0].text" :code="introductionExamples[0].code" :show-solution-button="introductionExamples[0].showSolutionButton" :language="introductionExamples[0].language" ></Question>
      <div class="section-title">
        <h1>Orden de crecimiento</h1>
      </div>
      <GrowthOrder></GrowthOrder>
      <Question :text="growthOrderExamples[0].text" :code="growthOrderExamples[0].code" :show-solution-button="growthOrderExamples[0].showSolutionButton" :language="growthOrderExamples[0].language" ></Question>
      <ThetaNotation></ThetaNotation>
      <OmegaNotation></OmegaNotation>
      <ONotation></ONotation>
      <AlgorithmicComplexities></AlgorithmicComplexities>
      <Question :text="growthOrderExamples[1].text" :code="growthOrderExamples[1].code" :show-solution-button="growthOrderExamples[1].showSolutionButton" :language="growthOrderExamples[1].language" ></Question>
    </div>
  </section>
</template>

<style scoped></style>
