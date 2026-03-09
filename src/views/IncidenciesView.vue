<script setup>
import { ref, watch } from 'vue'
import BreadCrumb from '@/components/BreadCrumb.vue'
import NavBar from '@/components/NavBar.vue'
import FooterPage from '@/components/FooterPage.vue'

const namePage = 'Incidències'

// formulario
const title = ref('')
const message = ref('')
const responsible = ref('')
const priority = ref('Media')

// incidencias
const incidencias = ref(
  JSON.parse(localStorage.getItem('incidencias')) || []
)

// edición
const editingId = ref(null)

// guardar en localStorage
watch(
  incidencias,
  () => {
    localStorage.setItem('incidencias', JSON.stringify(incidencias.value))
  },
  { deep: true }
)

// enviar incidencia
const handleSubmit = () => {

  if (editingId.value) {

    const inc = incidencias.value.find(i => i.id === editingId.value)


    inc.message = message.value
    inc.responsible = responsible.value
    inc.priority = priority.value

    editingId.value = null

  } else {

    incidencias.value.push({
      id: Date.now(),
      message: message.value,
      responsible: responsible.value,
      priority: priority.value,
      status: 'Abierta',
      date: new Date().toLocaleString()
    })

  }

  clearForm()
}

// limpiar formulario
const clearForm = () => {
  title.value = ''
  message.value = ''
  responsible.value = ''
  priority.value = 'Media'
}

// borrar incidencia
const deleteIncidencia = (id) => {
  incidencias.value = incidencias.value.filter(i => i.id !== id)
}

// editar incidencia
const editIncidencia = (inc) => {

  editingId.value = inc.id

  title.value = inc.title
  message.value = inc.message
  responsible.value = inc.responsible
  priority.value = inc.priority
}

// cambiar estado
const toggleStatus = (inc) => {
  inc.status = inc.status === 'Abierta' ? 'Resuelta' : 'Abierta'
}

// ordenar
const sortByDate = () => {
  incidencias.value.sort((a,b)=> new Date(b.date) - new Date(a.date))
}

</script>

<template>

<div class="container">

<NavBar/>
<BreadCrumb :current="namePage"/>

<div class="form-wrapper">

<form @submit.prevent="handleSubmit" class="form">

<h2>Registrar incidencia</h2>



<textarea v-model="message" placeholder="Descripción" required></textarea>

<input v-model="responsible" placeholder="Responsable"/>

<select v-model="priority">
<option>Alta</option>
<option>Media</option>
<option>Baja</option>
</select>

<button type="submit">
{{ editingId ? "Actualizar" : "Crear incidencia" }}
</button>

</form>

</div>

<div class="table-wrapper">
  <div class="table-responsive">
<h2>Listado de incidencias</h2>

<button @click="sortByDate">Ordenar por fecha</button>

<table v-if="incidencias.length">

<thead>
<tr>
<th>Fecha</th>
<th>Descripción</th>
<th>Responsable</th>
<th>Prioridad</th>
<th>Estado</th>
<th>Acciones</th>
</tr>
</thead>

<tbody>

<tr v-for="inc in incidencias" :key="inc.id">

<td>{{ inc.date }}</td>
<td class="descripcion">{{ inc.message }}</td>
<td>{{ inc.responsible }}</td>
<td>{{ inc.priority }}</td>

<td>
<button @click="toggleStatus(inc)">
{{ inc.status }}
</button>
</td>

<td class="actions">

<button @click="editIncidencia(inc)">✏️</button>

<button @click="deleteIncidencia(inc.id)">🗑️</button>

</td>

</tr>

</tbody>

</table>

<p v-else>No hay incidencias registradas</p>
</div>
</div>

<FooterPage/>

</div>

</template>

<style scoped>

.form-wrapper{
display:flex;
justify-content:center;
margin-top:20px;
}

.form{
display:flex;
flex-direction:column;
gap:10px;
width:400px;
background:white;
padding:20px;
border-radius:8px;
box-shadow:0 2px 6px rgba(0,0,0,0.1);
}

input, textarea, select{
padding:8px;
border:1px solid #ccc;
border-radius:4px;
}

button{
padding:8px;
background:#1B00FF;
color:white;
border:none;
cursor:pointer;
border-radius:4px;
}

.table-wrapper{
margin-top:40px;
padding:20px;
}

table{
width:100%;
border-collapse:collapse;
}

th,td{
border:1px solid #ddd;
padding:8px;
}

th{
background:#f2f2f2;
}

.actions button{
margin-right:5px;
}

.descripcion{
max-width:400px;
white-space:normal;
word-break:break-word;
}
</style>