<script setup>
//import { ref } from 'vue'
//import { storeToRefs } from 'pinia'
import NavBar from '@/components/NavBar.vue'
import BreadCrumb from '../components/BreadCrumb.vue'
import FooterPage from '@/components/FooterPage.vue'
//import { useHabitacionesStore } from '@/stores/habitacionStore'

const namePage = 'Esterilització'

</script>

<template>
  <div class="container fixed-top mb-5 pb-5">
    <NavBar />
    <BreadCrumb :current=namePage />
  </div>
  <br /><br />
  <div class="container mt-5 pt-5">
    <table>

      <thead>
        <tr>
          <th>Día</th>
          <th>Tipo</th>
          <th>Enfermera</th>
          <th>Habitación</th>
          <th>TCAE</th>
          <th>Revisión</th>
          <th>Fecha</th>
          <th>Responsable</th>
        </tr>
      </thead>

      <tbody>

        <tr>

          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td>8</td>

        </tr>

      </tbody>
    </table>


    <FooterPage />
  </div>
</template>

<style scoped>
/* resto de estilos existents… */
</style>