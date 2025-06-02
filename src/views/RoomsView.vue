<script setup>
import { ref } from 'vue'
import BreadCrumb from '@/components/BreadCrumb.vue'
import NavBar from '@/components/NavBar.vue';

const namePage = ref('Rooms');
const selectedBed = ref(null)


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
      { name: 'Llit 1', status: 'OK' },
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
  <div class="container">
    <NavBar />
    <BreadCrumb :current=namePage />
    <h1>Rooms</h1>
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
  </div><!-- FIN CONTAINER -->
</template>

<style scoped>
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
</style>