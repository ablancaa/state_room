<script setup>
import { ref } from 'vue'

import Breadcrumb from '@/components/BreadCrumb.vue'
import NavBar from '@/components/NavBar.vue';
//import { useRouter  } from 'vue-router'
/*const router = useRouter()*/

const namePage = ref('Board Status')
</script>

<template>
    <div class="container">
   <NavBar />
       <!-- Breadcrumb component -->
   <Breadcrumb :current="namePage"/>
    <h1>{{namePage}}</h1>
    </div>
</template>