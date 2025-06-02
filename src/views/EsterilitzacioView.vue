<script setup>
import { ref } from 'vue'

import BreadCrumb from '@/components/BreadCrumb.vue'
import NavBar from '@/components/NavBar.vue';
//import { useRouter  } from 'vue-router'
/*const router = useRouter()*/

const namePage = ref('Esterilització')

const habitaciones = [
  {
    id: 'CR1',
    camas: [
      {
        numero: 1,
        kits: [
          { nombre: 'Kit 1', material: ['Tijera recta', 'Tijera pato', 'Sacagrapas', 'Pinzas'] },
          { nombre: 'Kit 2', material: ['Tijera recta', 'Tijera pato', 'Sacagrapas', 'Pinzas'] }
        ]
      }
    ]
  },
  {
    id: 'CR2',
    camas: [
      {
        numero: 1,
        kits: [
          { nombre: 'Kit 1', material: ['Tijera recta', 'Tijera pato', 'Sacagrapas', 'Pinzas'] },
          { nombre: 'Kit 2', material: ['Tijera recta', 'Tijera pato', 'Sacagrapas', 'Pinzas'] }
        ]
      }
    ]
  },
  {
    id: 'CR3',
    camas: [
      {
        numero: 1,
        kits: [
          { nombre: 'Kit 1', material: ['Tijera recta', 'Tijera pato', 'Sacagrapas', 'Pinzas'] },
          { nombre: 'Kit 2', material: ['Tijera recta', 'Tijera pato', 'Sacagrapas', 'Pinzas'] }
        ]
      }
    ]
  },
  {
    id: 'CR4',
    camas: [
      {
        numero: 1,
        kits: [
          { nombre: 'Kit 1', material: ['Tijera recta', 'Tijera pato', 'Sacagrapas', 'Pinzas'] },
          { nombre: 'Kit 2', material: ['Tijera recta', 'Tijera pato', 'Sacagrapas', 'Pinzas'] }
        ]
      }
    ]
  },
  {
    id: 'CR5',
    camas: [
      {
        numero: 1,
        kits: [
          { nombre: 'Kit 1', material: ['Tijera recta', 'Tijera pato', 'Sacagrapas', 'Pinzas'] },
          { nombre: 'Kit 2', material: ['Tijera recta', 'Tijera pato', 'Sacagrapas', 'Pinzas'] }
        ]
      }
    ]
  },
  {
    id: 'CR6',
    camas: [
      {
        numero: 1,
        kits: [
          { nombre: 'Kit 1', material: ['Tijera recta', 'Tijera pato', 'Sacagrapas', 'Pinzas'] },
          { nombre: 'Kit 2', material: ['Tijera recta', 'Tijera pato', 'Sacagrapas', 'Pinzas'] }
        ]
      }
    ]
  },
  {
    id: 'CR7',
    camas: [
      {
        numero: 1,
        kits: [
          { nombre: 'Kit 1', material: ['Tijera recta', 'Tijera pato', 'Sacagrapas', 'Pinzas'] },
          { nombre: 'Kit 2', material: ['Tijera recta', 'Tijera pato', 'Sacagrapas', 'Pinzas'] }
        ]
      }
    ]
  },
  {
    id: 'CR8',
    camas: [
      {
        numero: 1,
        kits: [
          { nombre: 'Kit 1', material: ['Tijera recta', 'Tijera pato', 'Sacagrapas', 'Pinzas'] },
          { nombre: 'Kit 2', material: ['Tijera recta', 'Tijera pato', 'Sacagrapas', 'Pinzas'] }
        ]
      }
    ]
  },
  {
    id: 'CR9',
    camas: [
      {
        numero: 1,
        kits: [
          { nombre: 'Kit 1', material: ['Tijera recta', 'Tijera pato', 'Sacagrapas', 'Pinzas'] },
          { nombre: 'Kit 2', material: ['Tijera recta', 'Tijera pato', 'Sacagrapas', 'Pinzas'] }
        ]
      }
    ]
  },
  {
    id: 'CR10',
    camas: [
      {
        numero: 1,
        kits: [
          { nombre: 'Kit 1', material: ['Tijera recta', 'Tijera pato', 'Sacagrapas', 'Pinzas'] },
          { nombre: 'Kit 2', material: ['Tijera recta', 'Tijera pato', 'Sacagrapas', 'Pinzas'] }
        ]
      }
    ]
  },
    {
    id: 'CR11',
    camas: [
      {
        numero: 1,
        kits: [
          { nombre: 'Kit 1', material: ['Tijera recta', 'Tijera pato', 'Sacagrapas', 'Pinzas'] },
          { nombre: 'Kit 2', material: ['Tijera recta', 'Tijera pato', 'Sacagrapas', 'Pinzas'] }
        ]
      }
    ]
  },
    {
    id: 'CR12',
    camas: [
      {
        numero: 1,
        kits: [
          { nombre: 'Kit 1', material: ['Tijera recta', 'Tijera pato', 'Sacagrapas', 'Pinzas'] },
          { nombre: 'Kit 2', material: ['Tijera recta', 'Tijera pato', 'Sacagrapas', 'Pinzas'] }
        ]
      }
    ]
  },
  {
    id: 'CR13',
    camas: [
      {
        numero: 1,
        kits: [
          { nombre: 'Kit 1', material: ['Tijera recta', 'Tijera pato', 'Sacagrapas', 'Pinzas'] },
          { nombre: 'Kit 2', material: ['Tijera recta', 'Tijera pato', 'Sacagrapas', 'Pinzas'] }
        ]
      }
    ]
  },
  {
    id: 'CR14',
    camas: [
      {
        numero: 1,
        kits: [
          { nombre: 'Kit 1', material: ['Tijera recta', 'Tijera pato', 'Sacagrapas', 'Pinzas'] },
          { nombre: 'Kit 2', material: ['Tijera recta', 'Tijera pato', 'Sacagrapas', 'Pinzas'] }
        ]
      }
    ]
  },
  {
    id: 'CR15',
    camas: [
      {
        numero: 1,
        kits: [
          { nombre: 'Kit 1', material: ['Tijera recta', 'Tijera pato', 'Sacagrapas', 'Pinzas'] },
          { nombre: 'Kit 2', material: ['Tijera recta', 'Tijera pato', 'Sacagrapas', 'Pinzas'] }
        ]
      }
    ]
  },
   {
    id: 'CR16',
    camas: [
      {
        numero: 1,
        kits: [
          { nombre: 'Kit 1', material: ['Tijera recta', 'Tijera pato', 'Sacagrapas', 'Pinzas'] },
          { nombre: 'Kit 2', material: ['Tijera recta', 'Tijera pato', 'Sacagrapas', 'Pinzas'] }
        ]
      }
    ]
  }
]
</script>

<template>
  <div class="container">
    <NavBar />
    <BreadCrumb :current="namePage" />
    <h1>{{ namePage }}</h1>
    <table class="table table-bordered table-hover">
      <thead>
        <tr>
          <th>Habitación</th>
          <th>Kit</th>
          <th>Material</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="habitacion in habitaciones" :key="habitacion.id">
          <template v-for="cama in habitacion.camas" :key="cama.numero">
            <template v-for="kit in cama.kits" :key="kit.nombre">
              <tr>
                <td v-if="cama.numero === 1 && kit.nombre === 'Kit 1'" :rowspan="habitacion.camas.length * 2" class="align-middle text-center">
                  {{ habitacion.id }}
                </td>
                <td>{{ kit.nombre }}</td>
                <td>
                  <ul class="mb-0">
                    <li v-for="item in kit.material" :key="item">{{ item }}</li>
                  </ul>
                </td>
              </tr>
            </template>
          </template>
        </template>
      </tbody>
    </table>
  </div>
</template>