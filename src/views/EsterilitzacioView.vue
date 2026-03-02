<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import NavBar from '@/components/NavBar.vue'
import BreadCrumb from '../components/BreadCrumb.vue'
import FooterPage from '@/components/FooterPage.vue'
import { useHabitacionesStore } from '@/stores/habitacionStore'

const namePage = 'Esterilització'
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
</script>

<template>
  <div class="container">
    <NavBar />
    <BreadCrumb :current="namePage" />

    <div class="habitaciones">
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

    <FooterPage />
  </div>
</template>

<style scoped>
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

/* resto de estilos existents… */
</style>