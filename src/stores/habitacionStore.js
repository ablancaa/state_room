import { defineStore } from "pinia";
//import { ref } from "vue";

/* ================= BASE ================= */

const crearChecklist = (items) =>
  items.map((nombre) => ({
    nombre,
    ok: false,
  }));

const checklistCarro = () =>
  crearChecklist([
    "3 llençols",
    "2 fundes de coixí",
    "2 camises",
    "1 cobrellit",
    "2 tovalloles",
  ]);

const checklistCalaix = () =>
  crearChecklist([
    "2 venes elàstiques",
    "3 paquets de gasses petites",
  ]);

const checklistLavabo = () =>
  crearChecklist([
    "6 cunyes de cartró",
    "6 palanganes de cartró",
    "6 esponges",
    "1 pot de sabó neutre",
    "1 pot de crema hidratant",
    "1 pot de sabó de clorhexidina",
  ]);

const checklistMonitor = () =>
  crearChecklist([
    "Cable ECG",
    "Cable de temperatura",
    "Cable arterial",
    "Saturador",
    "Manguito de tensió arterial",
  ]);

function crearCamas(numero) {
  return Array.from({ length: numero }, (_, i) => ({
    numero: i + 1,
    monitor: checklistMonitor(),
  }));
}

function crearHabitaciones() {
  return Array.from({ length: 16 }, (_, i) => {
    const n = i + 1;
    const camas = n <= 8 ? 2 : 1;

    return {
      id: `CR${n}`,
      camas: crearCamas(camas),
      revision: {
        carro: checklistCarro(),
        calaix: checklistCalaix(),
        lavabo: checklistLavabo(),
        responsable: "",
        data: null,
        firma: false,
      },
    };
  });
}

// normaliza datos antiguos del localStorage
function normalizarHabitacion(h) {
  if (!h || !h.revision) return h;

  // cajon → calaix
  if (h.revision.cajon && !h.revision.calaix) {
    h.revision.calaix = h.revision.cajon;
    delete h.revision.cajon;
  }
  // fecha → data
  if (h.revision.fecha && !h.revision.data) {
    h.revision.data = h.revision.fecha;
    delete h.revision.fecha;
  }

  return h;
}

/* ================= PRIMERA STORE ================= */

const useHabitacionStore = defineStore("habitacion", () => {
  // retornem les funcions que vulguem exposar
  return {
    crearChecklist,
    checklistCalaix,
    checklistLavabo,
    checklistMonitor,
    crearCamas,
    crearHabitaciones,
  };
}); // ← tancament correcte de defineStore

/* ================= Tenda d’habitacions ================= */

const useHabitacionesStore = defineStore("habitaciones", {
  state: () => {
    const saved =
      JSON.parse(localStorage.getItem("habitaciones")) || null;

    const habs = saved
      ? saved.map(normalizarHabitacion)
      : crearHabitaciones();

    return { habitaciones: habs };
  },

  getters: {
    estadoHabitacion: (state) => (id) => {
      const h = state.habitaciones.find((h) => h.id === id);
      if (!h) return "SENSE REVISAR";

      const items = [
        ...h.revision.carro,
        ...(h.revision.calaix ?? h.revision.cajon ?? []),
        ...h.revision.lavabo,
        ...h.camas.flatMap((c) => c.monitor),
      ];

      if (items.every((i) => !i.ok)) return "SENSE REVISAR";
      if (items.every((i) => i.ok) && h.revision.firma)
        return "COMPLETA";
      return "INCOMPLETA";
    },
  },

  actions: {
    guardar() {
      localStorage.setItem(
        "habitaciones",
        JSON.stringify(this.habitaciones)
      );
    },

    toggleItem(item) {
      item.ok = !item.ok;
      this.guardar();
    },

    firmarRevision(habitacionId, responsable) {
      const h = this.habitaciones.find((h) => h.id === habitacionId);
      if (!h) return;

      h.revision.responsable = responsable;
      h.revision.data = new Date().toISOString().split("T")[0];
      h.revision.firma = true;

      this.guardar();
    },

    resetHabitacion(habitacionId) {
      const h = this.habitaciones.find((h) => h.id === habitacionId);
      if (!h) return;

      const listaCarpetes =
        h.revision.calaix ?? h.revision.cajon ?? [];
      [...h.revision.carro, ...listaCarpetes, ...h.revision.lavabo].forEach(
        (i) => (i.ok = false)
      );

      h.camas.forEach((c) =>
        c.monitor.forEach((i) => (i.ok = false))
      );

      h.revision.responsable = "";
      h.revision.data = null;
      h.revision.firma = false;

      this.guardar();
    },
  },
});

export { useHabitacionStore, useHabitacionesStore };

