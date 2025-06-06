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
    <BreadCrumb :current="namePage" :pageView="'BoardstautsView.vue'" />

    <div class="row">
      <div
        v-for="(grupo, idx) in tasques"
        :key="idx"
        class="col-12 col-md-12 mb-3"
      >
        <div class="row g-0">
          <!-- Columna izquierda: zona i títol -->
          <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center bg-light border-end rounded-start px-3 py-2">
            <div>
              <h5 class="mb-1 text-center">{{ grupo.titulo }}</h5>
              <div v-if="grupo.subzona" class="text-muted fst-italic text-center">{{ grupo.subzona }}</div>
            </div>
          </div>
          <!-- Columna dreta: tasques -->
          <div class="col-12 col-md-6 bg-white rounded-end px-3 py-2">
            <ul class="mb-0 text-start">
              <li v-for="(tarea, i) in grupo.tareas" :key="i">{{ tarea }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <FooterPage />
  </div>
</template>