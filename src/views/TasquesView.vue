<script setup>
import { ref } from 'vue'

import BreadCrumb from '@/components/BreadCrumb.vue'
import NavBar from '@/components/NavBar.vue';
import FooterPage from '@/components/FooterPage.vue';
//import { useRouter  } from 'vue-router'
/*const router = useRouter()*/

const namePage = ref('Tasques TCAI')
</script>

<template>
    <div class="container">
   <NavBar />
       <!-- Breadcrumb component -->
   <BreadCrumb :current="namePage" :pageView="'BoardstautsView.vue'"/>
    <h1>{{namePage}}</h1>
    
    <FooterPage />
    </div>
</template>