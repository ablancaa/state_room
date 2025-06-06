<script setup>
import { ref, onMounted } from 'vue'

import BreadCrumb from '@/components/BreadCrumb.vue'
import NavBar from '@/components/NavBar.vue';
import FooterPage from '@/components/FooterPage.vue';
//import { useRouter  } from 'vue-router'
/*const router = useRouter()*/

const namePage = ref('Equips de Treball')

const arrayEnf = ["Carvajales", "Enf2", "Enf3", "Enf4", "Enf5", "Enf6", "Enf7", "Enf8", "Enf9",
    "Enf10", "Enf11", "Enf12", "Enf13"];
const arrayAux = ["Miriam", "María", "P. Manjón", "Vanessa", "Montse. G", "P. Sebastian", "Alberto", "Mª Luz", "Lourdes",
    "Elena", "Sandra/Dalila"];
const arrayHab = ["1-2", "11-12", "3-4", "SOP", "COR P", "13-14", "H DIA", "5-6", "15-16",
    "7-8", "SOP", "9-10", "COR G"];
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
        <FooterPage />
    </div>
</template>