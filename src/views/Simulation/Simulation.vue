<!-- src/views/simulation/SimulationNumericalComputingView.vue -->
<script setup lang="ts">
import { useSubjectsStore } from "@/store/subjects.store";
import Introduction from "./components/Introduction.vue";
import TaylorSeries from "./components/TaylorSeries.vue";
import ErrorTheory from "./components/ErrorTheory.vue";
import NonLinearEquations from "./components/NonLinearEquations.vue";
import BolzanoTheorem from "./components/BolzanoTheorem.vue";
import BisectionMethod from "./components/BisectionMethod.vue";
// Importa los nuevos componentes
import Interpolation from "./components/Interpolation.vue";
import SystemOfEquations from "./components/SystemOfEquations.vue";
import FiniteDifferenceMethod from "./components/FiniteDifferenceMethod.vue";
import Question from "@/components/shared/Question.vue";
import LeastSquaresQuadratic from "./components/LeastSquaresQuadratic.vue";
import LeastSquaresLinear from "./components/LeastSquaresLinear.vue";
import LeastSquaresExponential from "./components/LeastSquaresExponential.vue";
import NewtonRaphsonMethod from "./components/NewtonRaphsonMethod.vue";
import SecantMethod from "./components/SecantMethod.vue";
import FalsePositionMethod from "./components/FalsePositionMethod.vue";

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
const newtonRaphsonMethodExample = subjectsStore.getExamples(
  "simulation-numerical-computing",
  "newton-raphson-method"
);
const secantMethodExample = subjectsStore.getExamples(
  "simulation-numerical-computing",
  "secant-method"
);
const falsePositionMethodExample = subjectsStore.getExamples(
  "simulation-numerical-computing",
  "false-position-method"
);
const interpolationExample = subjectsStore.getExamples(
  "simulation-numerical-computing",
  "interpolation"
);
const leastSquaresLinearExample = subjectsStore.getExamples(
  "simulation-numerical-computing",
  "least-squares-linear"
);
const leastSquaresQuadraticExample = subjectsStore.getExamples(
  "simulation-numerical-computing",
  "least-squares-quadratic"
);
const leastSquaresExponentialExample = subjectsStore.getExamples(
  "simulation-numerical-computing",
  "least-squares-exponential"
);
const systemOfEquationsExample = subjectsStore.getExamples(
  "simulation-numerical-computing",
  "system-of-equations"
);
const finiteDifferenceMethodExample = subjectsStore.getExamples(
  "simulation-numerical-computing",
  "finite-difference-method"
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
          src="https://www.grupossc.com/imagenes/grupossc_electronics1.gif"
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
    <!-- Subsecciones de Métodos Numéricos -->

    <NewtonRaphsonMethod></NewtonRaphsonMethod>
    <Question
      v-if="newtonRaphsonMethodExample.length > 0"
      :text="newtonRaphsonMethodExample[0]?.text"
      :code="newtonRaphsonMethodExample[0]?.code"
      :show-solution-button="newtonRaphsonMethodExample[0]?.showSolutionButton"
      :language="newtonRaphsonMethodExample[0]?.language"
    ></Question>

    <SecantMethod></SecantMethod>
    <Question
      v-if="secantMethodExample.length > 0"
      :text="secantMethodExample[0]?.text"
      :code="secantMethodExample[0]?.code"
      :show-solution-button="secantMethodExample[0]?.showSolutionButton"
      :language="secantMethodExample[0]?.language"
    ></Question>

    <FalsePositionMethod></FalsePositionMethod>
    <Question
      v-if="falsePositionMethodExample.length > 0"
      :text="falsePositionMethodExample[0]?.text"
      :code="falsePositionMethodExample[0]?.code"
      :show-solution-button="falsePositionMethodExample[0]?.showSolutionButton"
      :language="falsePositionMethodExample[0]?.language"
    ></Question>

    <!-- NUEVAS SECCIONES AÑADIDAS AL FINAL -->

    <!-- Sección 5: Interpolación -->
    <div class="section-title">
      <h1>Interpolación</h1>
    </div>
    <Interpolation></Interpolation>

    <!-- Ejemplo de código -->
    <Question
      :text="interpolationExample[0]?.text"
      :code="interpolationExample[0]?.code"
      :show-solution-button="interpolationExample[0]?.showSolutionButton"
      :language="interpolationExample[0]?.language"
    ></Question>

    <!-- Sección 6: Aproximación por Mínimos Cuadrados -->
    <div class="section-title">
      <h1>Aproximación por Mínimos Cuadrados</h1>
    </div>
    <!-- Subsecciones de Mínimos Cuadrados -->
    <div class="section-title">
      <h2>Ajuste Lineal</h2>
    </div>
    <LeastSquaresLinear></LeastSquaresLinear>
    <Question
      v-if="leastSquaresLinearExample.length > 0"
      :text="leastSquaresLinearExample[0]?.text"
      :code="leastSquaresLinearExample[0]?.code"
      :show-solution-button="leastSquaresLinearExample[0]?.showSolutionButton"
      :language="leastSquaresLinearExample[0]?.language"
    ></Question>

    <div class="section-title">
      <h2>Ajuste Cuadrático</h2>
    </div>
    <LeastSquaresQuadratic></LeastSquaresQuadratic>
    <Question
      v-if="leastSquaresQuadraticExample.length > 0"
      :text="leastSquaresQuadraticExample[0]?.text"
      :code="leastSquaresQuadraticExample[0]?.code"
      :show-solution-button="
        leastSquaresQuadraticExample[0]?.showSolutionButton
      "
      :language="leastSquaresQuadraticExample[0]?.language"
    ></Question>

    <div class="section-title">
      <h2>Ajuste Exponencial</h2>
    </div>
    <LeastSquaresExponential></LeastSquaresExponential>
    <Question
      v-if="leastSquaresExponentialExample.length > 0"
      :text="leastSquaresExponentialExample[0]?.text"
      :code="leastSquaresExponentialExample[0]?.code"
      :show-solution-button="
        leastSquaresExponentialExample[0]?.showSolutionButton
      "
      :language="leastSquaresExponentialExample[0]?.language"
    ></Question>

    <!-- Sección 7: Sistemas de Ecuaciones -->
    <div class="section-title">
      <h1>Sistemas de Ecuaciones Lineales y No Lineales</h1>
    </div>
    <SystemOfEquations></SystemOfEquations>

    <!-- Ejemplo de código -->
    <Question
      :text="systemOfEquationsExample[0]?.text"
      :code="systemOfEquationsExample[0]?.code"
      :show-solution-button="systemOfEquationsExample[0]?.showSolutionButton"
      :language="systemOfEquationsExample[0]?.language"
    ></Question>

    <!-- Sección 8: Apuntes MDF -->
    <div class="section-title">
      <h1>Método de Diferencias Finitas (MDF) para PVF</h1>
    </div>
    <FiniteDifferenceMethod></FiniteDifferenceMethod>

    <!-- Ejemplo de código -->
    <Question
      :text="finiteDifferenceMethodExample[0]?.text"
      :code="finiteDifferenceMethodExample[0]?.code"
      :show-solution-button="
        finiteDifferenceMethodExample[0]?.showSolutionButton
      "
      :language="finiteDifferenceMethodExample[0]?.language"
    ></Question>
  </section>
</template>

<style scoped></style>
