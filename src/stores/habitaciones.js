import { defineStore } from 'pinia'
import data from '@/data/asignaciones.json'

export const useHabitacionesStore = defineStore('habitaciones', {

  state: () => ({
    asignaciones: data,
    busqueda: ""
  }),

  getters: {
    filtradas(state) {
      return state.asignaciones.filter(a =>
        a.nombre.toLowerCase().includes(state.busqueda.toLowerCase()) ||
        a.habitacion.includes(state.busqueda)
      )
    }
  },

  actions: {

    actualizarCampo(index, campo, valor) {
      this.asignaciones[index][campo] = valor
    },

    marcarRevision(index) {
      this.asignaciones[index].revision = !this.asignaciones[index].revision
    }

  }

})