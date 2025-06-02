<script setup>

//import { useRouter } from 'vue-router'
//import {ref} from 'vue';
import BreadCrumb from '../components/BreadCrumb.vue'
import NavBar from '@/components/NavBar.vue';
import FooterPage from '@/components/FooterPage.vue';
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
    <!-- <h1>Dashboard</h1> -->


<div class="row">
  <div class="col-sm-4 mb-3">
    <div class="card">
      <div class="card-body">
      <h5 class="card-title">Habitacions</h5>
      <div class="img-card">
        <img src="../assets/images/cama.gif" class="img-card" alt="..." style="width: 60px; height: auto;">
      </div><br/>   
        <p class="card-text">Control de material a les habitacions.</p>
        <router-link to="/RoomsView" class="btn btn-primary">Habitacions</router-link>
      </div>
    </div>
  </div>
  <div class="col-sm-4 mb-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Esterilització</h5>
        <div class="img-card">
          <img src="../assets/images/instrumental.png" class="img-card" alt="..." style="width: 60px; height: auto;">
        </div><br/>
        <p class="card-text">Control de material per esterilitzar.</p>
        <router-link to="/EsterilitzacioView" class="btn btn-primary">Esterilització</router-link>
      </div>
    </div>
  </div>
    <div class="col-sm-4 mb-3 ">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Control pacients Unitat</h5>
        <div class="img-card">
          <img src="../assets/images/pizarra-inteligente.png" class="img-card" alt="..." style="width: 60px; height: auto;">
        </div><br/>
        <p class="card-text">Control de pacients a l'unitat.</p>
        <router-link to="/BoardstautsView" class="btn btn-primary">Control Unitat</router-link>
      </div>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-sm-4 mb-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Tasques</h5>
        <div class="img-card">
          <img src="../assets/images/tareas.gif" class="img-card" alt="..." style="width: 60px; height: auto;">
        </div><br/>
        <p class="card-text">Tasques per les TCAI.</p>
        <router-link to="/TasquesView" class="btn btn-primary">Tasques</router-link>
      </div>
    </div>
  </div>
  
  <div class="col-sm-4 mb-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Materials</h5>
        <div class="img-card">
          <img src="../assets/images/materiales.gif" class="img-card" alt="..." style="width: 60px; height: auto;">
        </div><br/>
        <p class="card-text">Materials de l'unitat.</p>
        <a href="#" class="btn btn-primary">Materials</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4 mb-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Equips de treball</h5>
        <div class="img-card">
        <img src="../assets/images/trabajo-en-equipo.gif" class="img-card" alt="..." style="width: 60px; height: auto;">
        </div><br/>
        <p class="card-text">Asignació de equips de treball.</p>
        <a href="#" class="btn btn-primary">Equips de treball</a>
      </div>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-sm-4 mb-3 ">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Avisos</h5>
        <div class="img-card">
          <img src="../assets/images/alerta.gif" class="img-card" alt="..." style="width: 60px; height: auto;">
        </div><br/>
        <p class="card-text">Avisos de l'unitat.</p>
        <router-link to="/TasquesView" class="btn btn-primary">Tasques</router-link>
      </div>
    </div>
  </div>
  
  <div class="col-sm-4 mb-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Altres</h5>
        <div class="img-card">
          <img src="../assets/logo.png" class="img-card" alt="..." style="width: 60px; height: auto;">
        </div><br/>
        <p class="card-text">Altres continguts.</p>
        <a href="#" class="btn btn-primary">Altres</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4 mb-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Altres</h5>
        <div class="img-card">
        <img src="../assets/logo.png" class="img-card" alt="..." style="width: 60px; height: auto;">
        </div><br/>
        <p class="card-text">Altres continguts.</p>
        <a href="#" class="btn btn-primary">Altres</a>
      </div>
    </div>
  </div>
</div>
  

    <FooterPage />

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

.img-card {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  }
</style>