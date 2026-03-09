<script setup>
import BreadCrumb from '../components/BreadCrumb.vue'
import NavBar from '@/components/NavBar.vue';
import FooterPage from '@/components/FooterPage.vue';
import CardPatien from '@/components/CardPatien.vue';   
</script>
<template>
    <div class="container fixed-top mb-5">
        <NavBar />
        <BreadCrumb current="Pruebas Comp" />
</div>
<br/><br/>
<div class="container mt-5 pt-5">
<CardPatien />

        <FooterPage />
</div>

</template>