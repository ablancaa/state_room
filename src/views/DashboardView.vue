<script setup>

//import { useRouter } from 'vue-router'
//import {ref} from 'vue';
import BreadCrumb from '../components/BreadCrumb.vue'
import NavBar from '@/components/NavBar.vue';
//import {useFloating} from '@floating-ui/vue';

const namePage = 'Dashboard';
//const reference = ref(null);
//const floating = ref(null);
//const {floatingStyles} = useFloating(reference, floating);
//const pageName = 'Dashboard'

</script>
<template>

  <div class="container">
   <NavBar />
       <!-- Breadcrumb component -->
   <BreadCrumb :current="namePage"/>
    <h1>Dashboard</h1>


<div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Rooms</h5>
        <img src="../assets/logo.png" class="card-img-left me-3" alt="..." style="width: 60px; height: auto;">
        <p class="card-text">Control de material a les habitacions.</p>
        <router-link to="/RoomsView" class="btn btn-primary">Rooms</router-link>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Esterilizacion</h5>
        <img src="../assets/logo.png" class="card-img-left me-3" alt="..." style="width: 60px; height: auto;">
        <p class="card-text">Control de material per esterilitzar.</p>
        <router-link to="/EsterilitzacioView" class="btn btn-primary">Esterilització</router-link>
      </div>
    </div>
  </div>
</div>
<br/>
<div class="row">
  <div class="col-sm-4 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Board</h5>
        <img src="../assets/logo.png" class="card-img-left me-3" alt="..." style="width: 60px; height: auto;">
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <router-link to="/BoardstautsView" class="btn btn-primary">Board</router-link>
      </div>
    </div>
  </div>
  
  <div class="col-sm-4 mb-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Tasks</h5>
        <img src="../assets/logo.png" class="card-img-left me-3" alt="..." style="width: 60px; height: auto;">
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4 mb-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Tasks</h5>
        <img src="../assets/logo.png" class="card-img-left me-3" alt="..." style="width: 60px; height: auto;">
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
  

</div>
</template>
<style scoped>

.card-img-left {
  width: 60px;
  height: auto;
}

.card {
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.08), 0 1.5px 4px 0 rgba(0,0,0,0.06);
  border: none;
  transition: box-shadow 0.2s;
}
.card:hover {
  box-shadow: 0 8px 32px 0 rgba(0, 13, 255, 0.188), 0 3px 8px 0 rgba(0,0,0,0.10);
}
.card-img-left {
  width: 60px;
  height: auto;
}
</style>