<script setup>
import SearchBar from './SearchBar.vue';
</script>
<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <img src="../assets/LogoUnitatCremats.png" class="navbar-brand  rounded-3" alt="..." style="width: 50px; height: auto;">
    <a class="navbar-brand" href="#"><router-link to="/DashboardView">Unitat de Cremats</router-link></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/DashboardView" class="nav-link active" aria-current="page" href="#">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/DirectoriView" class="nav-link active" aria-current="page" href="#">Directori</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Èines Avançades
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" aria-disabled="true">About</a>
        </li>
      </ul>
      <!-- <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
      <SearchBar />
    </div>
  </div>
</nav>

</template>
