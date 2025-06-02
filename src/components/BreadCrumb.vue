<template>
  <nav class="breadcrumb" style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
    <div v-for="item in breadcrumb" :key="item.name" class="breadcrumb-item">
      <span class="m-3">{{item.name}}</span>
      
    </div>
  </nav>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({
  current: {
    type: String,
    required: true
  },
  pageView: {
    type: String,
    required: false
  }
})
const router = useRouter()


const breadcrumb = ref([
  // { name: 'Dashboard', action: () => router.push('/DashboardView') },
  { name: props.current, action: () => router.push(props.current) }
])
</script>

<style scoped>
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 5px; /* Espacio entre los elementos */
  background-color: rgb(0, 0, 255);
  color: white;
  height: 55px;
  font-size: 35px;
}
.breadcrumb-item {
  /* Opcional: puedes agregar estilos para los ítems */
  color: white;
}

.router-link {
  color: rgb(0, 34, 255);
  text-decoration: none; /* Elimina el subrayado */
}

.home-icon {
  width: 18px;
  /* height: 18px;
  vertical-align: middle; Alinea el icono verticalmente */
  /* margin-right: 4px; Espacio entre el icono y el texto */
}
</style>