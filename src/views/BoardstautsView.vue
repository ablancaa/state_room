<script setup>
import { ref } from 'vue'

import BreadCrumb from '@/components/BreadCrumb.vue'
import NavBar from '@/components/NavBar.vue';
import FooterPage from '@/components/FooterPage.vue';
//import { useRouter  } from 'vue-router'
/*const router = useRouter()*/

const namePage = ref('Control de pacients')

// Opciones para desplegables
const autonomyOptions = ['Dependiente', 'Autónomo/a', 'Ayuda moderada']
const ocupationOptions = ['Alta', 'Ocupada', 'Limpieza','Mantenimiento']
const testOptions = ['Ninguna', 'Colonoscopia', 'Intervención quirúrgica', 'Nexobrid', 'TAC', 'Resonancia']
const nurseOptions = ['1.David Carbajales',
                      '2.Marta Barroso',
                      '3.Iñaki Basoco', 
                      '4.Laura Sierra', 
                      '5.David Cercós',
                      '6.Clara Fidalgo',
                      '7.Jonathan Rubio',
                      '8.Silvia MartinezBarbara',
                      '9.Miriam Vicente',
                      '10.Mª José Sánchez',
                      '11.Barbara',
                      '12.Anónimo']
const tcaeOptions = ['Alberto Blanca']

// Datos de habitaciones y camas
const beds = ref([])

// Función para inicializar las camas
const initializeBeds = () => {
  // Habitaciones 1-8 con 2 camas cada una
  for (let i = 1; i <= 8; i++) {
    beds.value.push({ room: `CR${i}`, bed: '1', ocupationOptions: '', autonomy: '', test: '', nurseOptions: '', tcaeOptions: '' })
    beds.value.push({ room: `CR${i}`, bed: '2', ocupationOptions: '', autonomy: '', test: '', nurseOptions: '', tcaeOptions: '' })
  }
  // Habitaciones 11-16 con 1 cama cada una
  for (let i = 11; i <= 16; i++) {
    beds.value.push({ room: `CR${i}`, bed: '', ocupationOptions: '', autonomy: '', test: '', nurseOptions: '', tcaeOptions: '' })
  }
}

// Inicializar al montar
initializeBeds()
</script>

<template>
    <div class="container">
   <NavBar />
       <!-- Breadcrumb component -->
   <BreadCrumb :current="namePage" :pageView="'BoardstautsView.vue'"/>
    
    <!-- Tabla de habitaciones -->
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Habitación</th>
            <th>Cama</th>
            <th>Plan</th>
            <th>Autonomía</th>
            <th>Prueba/Intervención</th>
            <th>Profesional asignado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(bed, index) in beds" :key="index">
            <td class="text-center">{{ bed.room }}</td>
            <td class="text-center">{{ bed.bed }}</td>
            <td>
              <select v-model="bed.ocupationOptions">
                <option value="">Seleccionar</option>
                <option v-for="option in ocupationOptions" :key="option" :value="option">{{ option }}</option>
              </select>
            </td>
            <td>
              <select v-model="bed.autonomy">
                <option value="">Seleccionar</option>
                <option v-for="option in autonomyOptions" :key="option" :value="option">{{ option }}</option>
              </select>
            </td>
            <td>
              <select v-model="bed.test">
                <option value="">Seleccionar</option>
                <option v-for="option in testOptions" :key="option" :value="option">{{ option }}</option>
              </select>
            </td>
            <td>
              <select v-model="bed.nurseOptions" >
                <option value="">Seleccionar DUE</option>
                <option v-for="option in nurseOptions" :key="option" :value="option">{{ option }}</option>
                
              </select>
                <select v-model="bed.tcaeOptions" >
                    <option value="">Seleccionar TCAI</option> 
                    <option v-for="option in tcaeOptions" :key="option" :value="option">{{ option }}</option>
                </select>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <FooterPage />
    </div>
</template>

<style scoped>
.table-responsive {
  margin: 20px 0;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th, .table td {
  padding: 8px 12px;
  border: 1px solid #ddd;
  text-align: left;
}

.table th {
  background-color: #f2f2f2;
}

input, select {
  width: 100%;
  padding: 4px;
  box-sizing: border-box;
}

/* Media queries para móviles */
@media (max-width: 768px) {
  .table th, .table td {
    padding: 4px 6px;
    font-size: 14px;
  }
  
  input, select {
    font-size: 14px;
  }
}
</style>