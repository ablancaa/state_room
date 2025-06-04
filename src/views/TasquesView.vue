<script setup>
import { ref } from 'vue'

import BreadCrumb from '@/components/BreadCrumb.vue'
import NavBar from '@/components/NavBar.vue';
import FooterPage from '@/components/FooterPage.vue';
//import { useRouter  } from 'vue-router'
/*const router = useRouter()*/

const namePage = ref('Tasques de TCAI')

const tasques = [
  {
    titulo: 'TCAI habitacions Cr1-Cr4',
    subzona: 'Zona bruta',
    tareas: [
      'Material esterilització (bosses i ok)',
      "Barrets i cunyes recollides dintre de l'armari",
      "Material sanitari net i recollit: Filtres d'ambú o respirador, material de cures",
      "Plàstics blaus de cunyes i ampollas d'orina al seu lloc",
      'Recollida de safates'
    ]
  },
  {
    titulo: 'TCAI habitacions CR5-CR8',
    subzona: 'Reposició de la zona de preparació',
    tareas: [
      'Material de calaixos: agulles, xeringues, equips d’infusió, vasos de medicació...',
      'Sèrums',
      "Ordre d'estanteries i caducitats"
    ]
  },
  {
    titulo: 'TCAI habitacions Cr9-Cr10',
    subzona: 'Bany terapèutic i sala de joc',
    tareas: [
      'Reposició bany terapèutic segons estàndar',
      'Bany recollit i endreçat',
      'Sala de jocs recollida, ordenada i neta'
    ]
  },
  {
    titulo: 'TCAI habitacions Cr11-Cr14',
    subzona: 'Reposició de sèrums i magatzems',
    tareas: [
      'Omplir la nevera de fred i calor (sala polivalent i urgències)',
      'Revisar targes del magatzem',
      'Ordenar material en les estanteries',
      'Buidar i recollir caixes de cartró'
    ]
  },
  {
    titulo: 'TCAI habitacions Cr15-Cr16',
    subzona: "Sala d'aparatatge",
    tareas: [
      'Ordenar cada cosa al seu lloc',
      'Detectar necessitats de material',
      'Deixar la sala segons estàndar'
    ]
  }
]

</script>

<template>
    <div class="container">
   <NavBar />
       <!-- Breadcrumb component -->
   <BreadCrumb :current="namePage" :pageView="'BoardstautsView.vue'"/>
    <!-- <h1>{{namePage}}</h1> -->
    
<table class="table table-bordered table-hover">
  <thead class="table-primary">
    <tr>
      <th>Habitacions / Zona</th>
      <th>Tasques</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(grupo, idx) in tasques" :key="idx">
      <td class="fw-bold align-middle" style="width: 350px;">
        {{ grupo.titulo }}
        <div v-if="grupo.subzona" class="fw-normal fst-italic">{{ grupo.subzona }}</div>
      </td>
      <td class="text-start align-middle">
        <ul class="mb-0">
          <li v-for="(tarea, i) in grupo.tareas" :key="i">{{ tarea }}</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>


    <FooterPage />
    </div>
</template>