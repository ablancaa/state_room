<script setup>
import { ref } from 'vue'
import BreadCrumb from '@/components/BreadCrumb.vue'
import NavBar from '@/components/NavBar.vue';
import FooterPage from '@/components/FooterPage.vue';
import { storeToRefs } from 'pinia'
import { useHabitacionesStore } from '@/stores/habitacionStore'
const namePage = ref('Habitacions');
const selectedBed = ref(null)
const store = useHabitacionesStore()
const { habitaciones } = storeToRefs(store)

// tarjetas “colapsadas”: guardamos los ids abiertas
const openIds = ref(new Set())

function toggle(id) {
  if (openIds.value.has(id)) openIds.value.delete(id)
  else openIds.value.add(id)
}

const getFilteredRevision = (revision) =>
  Object.entries(revision).filter(([, lista]) => Array.isArray(lista))

const rooms = ref([
  // Petits
  {
    id: 'CR1',
    type: 'petits',
    beds: [
      { name: 'Llit 1', status: 'OK' },
      { name: 'Llit 2', status: 'INCOMPLERTA' },
    ]
  },
  {
    id: 'CR2',
    type: 'petits',
    beds: [
      { name: 'Llit 1', status: 'OK' },
      { name: 'Llit 2', status: 'INCOMPLERTA' },
    ]
  },
  {
    id: 'CR5',
    type: 'petits',
    beds: [
      { name: 'Llit 1', status: 'OK' },
      { name: 'Llit 2', status: 'INCOMPLERTA' },
    ]
  },
  {
    id: 'CR6',
    type: 'petits',
    beds: [
      { name: 'Llit 1', status: 'OK' },
      { name: 'Llit 2', status: 'INCOMPLERTA' },
    ]
  },
  {
    id: 'CR7',
    type: 'petits',
    beds: [
      { name: 'Llit 1', status: 'INCOMPLERTA' },
      { name: 'Llit 2', status: 'OK' },
    ]
  },
  {
    id: 'CR8',
    type: 'petits',
    beds: [
      { name: 'Llit 1', status: 'INCOMPLERTA' },
      { name: 'Llit 2', status: 'OK' },
    ]
  },
  // Grans
  {
    id: 'CR11',
    type: 'grans',
    beds: [
      { name: 'Llit 1', status: 'INCOMPLERTA' },
    ]
  },
  {
    id: 'CR12',
    type: 'grans',
    beds: [
      { name: 'Llit 1', status: 'INCOMPLERTA' },
    ]
  },
  {
    id: 'CR13',
    type: 'grans',
    beds: [
      { name: 'Llit 1', status: 'OK' },
    ]
  },
  {
    id: 'CR14',
    type: 'grans',
    beds: [
      { name: 'Llit 1', status: 'OK' },
    ]
  },
  {
    id: 'CR15',
    type: 'grans',
    beds: [
      { name: 'Llit 1', status: 'OK' },
    ]
  },
  {
    id: 'CR16',
    type: 'grans',
    beds: [
      { name: 'Llit 1', status: 'INCOMPLERTA' },
    ]
  },
  // Semicritics
  {
    id: 'CR3',
    type: 'semicritics',
    beds: [
      { name: 'Llit 1', status: 'INCOMPLERTA' },
      { name: 'Llit 2', status: 'OK' },
    ]
  },
  {
    id: 'CR4',
    type: 'semicritics',
    beds: [
      { name: 'Llit 1', status: 'OK' },
      { name: 'Llit 2', status: 'OK' },
    ]
  },
  // Pediatria
  {
    id: 'CR9',
    type: 'pediatria',
    beds: [
      { name: 'Llit 1', status: 'OK' },
      { name: 'Llit 2', status: 'OK' },
    ]
  },
  {
    id: 'CR10',
    type: 'pediatria',
    beds: [
      { name: 'Llit 1', status: 'OK' },
      { name: 'Llit 2', status: 'INCOMPLERTA' },
    ]
  }
])
</script>

<template>



    <div class="container fixed-top mb-5">

    <NavBar />
    <BreadCrumb :current=namePage />

    </div>
    <div class="container mt-5 pt-5">
        <!-- <h1>{{namePage}}</h1> -->
    <!-- <h1>Rooms</h1> -->
        <div class="habitaciones mt-5 pt-2">
      <div
        v-for="hab in habitaciones"
        :key="hab.id"
        class="habitacion-card"
      >
        <header class="card-header">
          <!-- botón flecha -->
          <button
            class="toggle-btn"
            @click="toggle(hab.id)"
            :aria-expanded="openIds.has(hab.id)"
            title="Expandir / contraer"
          >
            <span class="arrow" :class="{ open: openIds.has(hab.id) }">▶</span>
          </button>

          <h2>{{ hab.id }}</h2>
          <span class="estado" :class="store.estadoHabitacion(hab.id)">
            {{ store.estadoHabitacion(hab.id) }}
          </span>
        </header>

        <!-- cuerpo y pie solo si está abierta -->
        <transition name="collapse" mode="out-in">
          <div v-if="openIds.has(hab.id)" class="card-body">
            <!-- responsable … (igual que antes) -->
            <section class="section-responsable">
              <label>Responsable: </label>
              <input v-model="hab.revision.responsable" />
            </section>

            <!-- llistes de revisió -->
            <section
              class="section-revision"
              v-for="[nombre, lista] in getFilteredRevision(hab.revision)"
              :key="nombre"
            >
              <h3>{{ nombre.toUpperCase() }}</h3>

              <label
                class="check"
                v-for="item in lista"
                :key="item.nombre"
              >
                <input
                  type="checkbox"
                  v-model="item.ok"
                  @change="store.guardar()"
                />
                {{ item.nombre }}
              </label>
            </section>

            <!-- llits -->
            <section class="section-camas">
              <h3>Llits</h3>
              <div v-for="cama in hab.camas" :key="cama.numero" class="cama">
                <strong>Llitet {{ cama.numero }}</strong>
                <label
                  class="check"
                  v-for="item in cama.monitor"
                  :key="item.nombre"
                >
                  <input
                    type="checkbox"
                    v-model="item.ok"
                    @change="store.guardar()"
                  />
                  {{ item.nombre }}
                </label>
              </div>
            </section>
          </div>
        </transition>

        <transition name="collapse" mode="out-in">
          <footer
            v-if="openIds.has(hab.id)"
            class="card-footer"
          >
            <!-- botones firma / reset … -->
            <button
              :disabled="store.estadoHabitacion(hab.id) !== 'INCOMPLETA'"
              @click="store.firmarRevision(hab.id, hab.revision.responsable)"
            >
              Signar revisió
            </button>
            <button class="reset" @click="store.resetHabitacion(hab.id)">
              Restablir
            </button>
          </footer>
        </transition>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6 mb-3 mb-sm-0">
        <!-- Ejemplo para Petits Cremats -->
        <h1>Petits Cremats</h1>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Llit</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <template v-for="room in rooms.filter(r => r.type === 'petits')" :key="room.id">
              <tr v-for="(bed, idx) in room.beds" :key="bed.name" class="align-middle text-center">
                <td v-if="idx === 0" :rowspan="room.beds.length">{{ room.id }}</td>
                <td @click="selectedBed = { ...bed, room: room.id }" data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop" style="cursor:pointer">
                  {{ bed.name }}
                </td>
                <td>
                  <span :class="{
                    'status-dot': true,
                    'status-ok': bed.status === 'OK',
                    'status-incomplerta': bed.status === 'INCOMPLERTA'
                  }"></span>
                </td>
              </tr>
            </template>
          </tbody>
        </table>

        <h1>Pediatria Cremats</h1>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Llit</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <template v-for="room in rooms.filter(r => r.type === 'pediatria')" :key="room.id">
              <tr v-for="(bed, idx) in room.beds" :key="bed.name" class="align-middle text-center">
                <td v-if="idx === 0" :rowspan="room.beds.length">{{ room.id }}</td>
                <td @click="selectedBed = { ...bed, room: room.id }" data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop" style="cursor:pointer">
                  {{ bed.name }}
                </td>
                <td><span :class="{
                  'status-dot': true,
                  'status-ok': bed.status === 'OK',
                  'status-incomplerta': bed.status === 'INCOMPLERTA'
                }"></span><!--{{ bed.status }}--></td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <div class="col-sm-6">
        <h1>Grans Cremats</h1>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Llit</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <template v-for="room in rooms.filter(r => r.type === 'grans')" :key="room.id">
              <tr v-for="(bed, idx) in room.beds" :key="bed.name" class="align-middle text-center">
                <td v-if="idx === 0" :rowspan="room.beds.length">{{ room.id }}</td>
                <td @click="selectedBed = { ...bed, room: room.id }" data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop" style="cursor:pointer">
                  {{ bed.name }}
                </td>
                <td><span :class="{
                  'status-dot': true,
                  'status-ok': bed.status === 'OK',
                  'status-incomplerta': bed.status === 'INCOMPLERTA'
                }"></span><!--{{ bed.status }}--></td>
              </tr>
            </template>
          </tbody>
        </table>
        <h1>Semi-Critics Cremats</h1>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Llit</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            <template v-for="room in rooms.filter(r => r.type === 'semicritics')" :key="room.id">
              <tr v-for="(bed, idx) in room.beds" :key="bed.name" class="align-middle text-center">
                <td v-if="idx === 0" :rowspan="room.beds.length">{{ room.id }}</td>
                <td @click="selectedBed = { ...bed, room: room.id }" data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop" style="cursor:pointer">
                  {{ bed.name }}
                </td>
                <td><span :class="{
                  'status-dot': true,
                  'status-ok': bed.status === 'OK',
                  'status-incomplerta': bed.status === 'INCOMPLERTA'
                }"></span></td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>

    </div>


    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              Informació del llit
            </h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div v-if="selectedBed">
              <p><strong>Habitació:</strong> {{ selectedBed.room }}</p>
              <p><strong>Nombre:</strong> {{ selectedBed.name }}</p>
              <p><strong>Status:</strong> {{ selectedBed.status }}</p>
            </div>
            <div v-else>
              <p>No hay información.</p>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Understood</button>
          </div>
        </div>
      </div>
    </div>
    <!-- FIN MODAL -->






<br/><br/><br/>
<div class="container fixed-bottom mt-6">
    <FooterPage />
</div>
  </div><!-- FIN CONTAINER -->
  



</template>

<style scoped>


.header{
  position:fixed;
}

.content{
  margin-top:120px; /* altura del header */
  overflow-y:auto;
  height:calc(100vh - 120px);
  padding:20px;
}

.status-dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 6px;
  vertical-align: middle;
}

.status-ok {
  background: #28a745;
  animation: grow-shadow-ok 1.5s ease-in-out infinite;
}

.status-incomplerta {
  background: #dc3545;
  /*animation: blink 2s steps(1, start) infinite;*/
  animation: blink-shadow 1.5s ease-in-out infinite;


}

@keyframes grow-shadow-ok {
  0% {
    box-shadow: 0 0 0 0 rgba(40, 167, 69, 0.7);
    transform: scale(1);
  }

  50% {
    box-shadow: 0 0 12px 6px rgba(40, 167, 69, 0.5);
    transform: scale(1.18);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(40, 167, 69, 0.7);
    transform: scale(1);
  }
}

/*@keyframes blink {
  25% {
    opacity: 0;
  }
}*/

@keyframes blink-shadow {
  0% {
    /*opacity: 1;*/
    box-shadow: 0 0 0 0 rgba(220, 53, 69, 0.7);
    transform: scale(1.5);
  }

  25% {
    /*opacity: 0;*/
    box-shadow: 0 0 12px 6px rgba(220, 53, 69, 0.5);
    transform: scale(1.15);
  }

  100% {
    /*opacity: 1;*/
    box-shadow: 0 0 0 0 rgba(220, 53, 69, 0.7);
    transform: scale(1);
  }
}

/* Estilo Tarjetas Habitación */
.habitaciones {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.habitacion-card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0,0,0,.1);
  display: flex;
  flex-direction: column;
  width: calc(33.333% - 1rem);
}

/* capçalera / cos / peu */
.card-header,
.card-body,
.card-footer {
  padding: 0.5rem 1rem;
}

.card-header {
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-footer {
  border-top: 1px solid #eee;
  margin-top: auto; /* empeny al final */
  display: flex;
  justify-content: space-between;
}

.section-responsable,
.section-revision,
.section-camas {
  margin-bottom: 1rem;
}

.section-revision h3,
.section-camas h3 {
  margin-bottom: 0.5rem;
}

.cama {
  margin-left: 1rem;
  margin-bottom: 0.5rem;
}

.check {
  display: flex;
  align-items: center;
  justify-content: flex-start; /* tirar tot a l'esquerra */
  gap: 0.25rem;
  width: 100%;
}

.estado {
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.85rem;
}

/* colors d’estat */
.estado.sin-revisar   { background: #f44336; color: #fff; }
.estado.completa      { background: #4caf50; color: #fff; }
.estado.incompleta    { background: #ff9800; color: #fff; }

.estado[class~="SIN REVISAR"] { }

@media (max-width: 768px) {
  .habitacion-card { width: calc(50% - 1rem); }
}
@media (max-width: 480px) {
  .habitacion-card { width: 100%; }
}

.toggle-btn {
  background: none;
  border: none;
  padding: 0;
  margin-right: 0.5rem;
  cursor: pointer;
}

.arrow {
  display: inline-block;
  transition: transform 0.2s ease;
}
.arrow.open {
  transform: rotate(90deg);
}

/* transición de altura para “colapsar” */
.collapse-enter-from,
.collapse-leave-to {
  height: 0;
  opacity: 0;
  overflow: hidden;
}
.collapse-enter-active,
.collapse-leave-active {
  transition: height 0.3s ease, opacity 0.3s ease;
}
</style>