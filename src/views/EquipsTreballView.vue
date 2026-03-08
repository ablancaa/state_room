<script setup>
import { ref, onMounted } from 'vue'

import BreadCrumb from '@/components/BreadCrumb.vue'
import NavBar from '@/components/NavBar.vue';
import FooterPage from '@/components/FooterPage.vue';
//import { useRouter  } from 'vue-router'
/*const router = useRouter()*/
import { useHabitacionesStore } from '@/stores/habitaciones'
import { storeToRefs } from 'pinia'

const store = useHabitacionesStore()

const { filtradas, busqueda } = storeToRefs(store)
const namePage = ref('Equips de Treball')

const arrayEnf = ["Carvajales / Raquel", "Marta / Mónica", "Iñaki / Lola", "Elena / Marisa", "Cercós / Carreras", "Clara / Montse H.", "Jony / Tere", "Silvia / Pili A.", "Miriam V. / Isa",
    "Laura / Mireia", "Enf11", "Laura G.", "Mª José"];
const arrayAux = ["Miriam / Merche", "María / Maribel", "P. Manjón", "Vanessa", "Montse. G", "P. Sebastian", "Alberto", "Mª Luz", "Lourdes",
    "Elena", "Sandra/Dalila"];
const arrayHab = ["CR01-02", "CR11-12", "CR03-04", "SOP", "COR P", "CR13-14", "H DIA", "CR05-06", "CR15-16",
    "CR07-08", "SOP", "CR09-10", "COR G"];
const arrayMesos = ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost",
    "Setembre", "Octubre", "Novembre", "Desembre"];

const arrayFinal = ref([]);

function generaCalendario() {
    let enfer = arrayEnf.slice();
    let aux = arrayAux.slice();
    let salto = false;
    let comodin = "";

    let resultado = [];
    for (let i = 0; i < 12; i++) {
        let mes = [];
        let g = 0;
        for (let j = 0; j < arrayHab.length; j++) {
            let hab = arrayHab[j];
            let enf = enfer[j] || '';
            let auxi = "";
            if (hab === "SOP") {
                auxi = "NULL";
                salto = true;
            } else {
                auxi = aux[g] || '';
            }
            mes.push({ hab, enf, aux: auxi });
            if (salto) {
                g--;
                salto = false;
            }
            g++;
        }
        // Rota auxiliares y enfermeras
        comodin = aux.pop();
        aux.unshift(comodin);
        comodin = enfer.shift();
        enfer.push(comodin);

        resultado.push(mes);
    }
    arrayFinal.value = resultado;
}


onMounted(() => {
    generaCalendario();
   
});

console.log(arrayFinal.value.length);
</script>
<template>
    <div class="container">
        <NavBar />
        <!-- Breadcrumb component -->
        <BreadCrumb :current="namePage" :pageView="'EquipsTreballView.vue'" />
        <!-- <h1>{{namePage}}</h1> -->
<h2>Asignación de habitaciones</h2>

<input
v-model="busqueda"
placeholder="Buscar enfermera o habitación"
class="buscador"
/>

<table>

<thead>
<tr>
<th>Día</th>
<th>Tipo</th>
<th>Enfermera</th>
<th>Habitación</th>
<th>TCAE</th>
<th>Revisión</th>
<th>Fecha</th>
<th>Responsable</th>
</tr>
</thead>

<tbody>

<tr v-for="(item,index) in filtradas" :key="index">

<td>{{item.dia}}</td>

<td>{{item.tipo}}</td>

<td>
<input v-model="item.nombre">
</td>

<td>
<input v-model="item.habitacion">
</td>

<td>
<input v-model="item.tcae">
</td>

<td>
<input
type="checkbox"
v-model="item.revision"
/>
</td>

<td>
<input
type="date"
v-model="item.fechaRevision"
/>
</td>

<td>
<input
v-model="item.responsable"
/>
</td>

</tr>

</tbody>

</table>
<table class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>Mes</th>
                    
                    <th>Infermera</th>
                    <th>Habitació</th>
                    <th>Auxiliar</th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(mes, i) in arrayFinal" :key="i">
                    <tr>
                        <td :rowspan="mes.length" class="text-center align-middle">{{ arrayMesos[i] }}</td>
                        
                        <td>{{ mes[0].enf }}</td>
                        <td>{{ mes[0].hab }}</td>
                        <td>{{ mes[0].aux }}</td>
                    </tr>
                    <tr v-for="(fila, j) in mes.slice(1)" :key="i + '-' + j">
                        
                        <td>{{ fila.enf }}</td>
                        <td>{{ fila.hab }}</td>
                        <td>{{ fila.aux }}</td>
                    </tr>
                </template>
            </tbody>
        </table>
</div>
        
        <FooterPage />

</template>
<style scoped>
.container{
padding:20px;
}

table{
width:100%;
border-collapse: collapse;
}

th,td{
border:1px solid #ccc;
padding:8px;
}

input{
width:100%;
}

.buscador{
margin-bottom:15px;
padding:8px;
width:300px;
}

</style>