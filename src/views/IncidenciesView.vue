<script setup>
import BreadCrumb from '@/components/BreadCrumb.vue'
import NavBar from '@/components/NavBar.vue';
import FooterPage from '@/components/FooterPage.vue';

const namePage = 'Incidències';
</script>
<template>
  <div class="container">
    <NavBar />
    <BreadCrumb :current="namePage" />

    <div class="form-wrapper">
      <form @submit.prevent="handleSubmit" class="form">
        <div>
          <label for="title">Título:</label>
          <input id="title" v-model="title" required />
        </div>

        <div>
          <label for="message">Mensaje:</label>
          <textarea id="message" v-model="message" required></textarea>
        </div>

        <button type="submit">Enviar Incidencia</button>
      </form>
    </div>

    <FooterPage />
  </div>
</template>