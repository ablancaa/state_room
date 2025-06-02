<template>
  <div class="breadcrumb">
    <div v-for="item in breadcrumb" :key="item.name" class="breadcrumb-item">
      {{ item.name }}
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({
  current: {
    type: String,
    required: true
  }
})

const link = function routerPush () {
  const router = useRouter()
  router.push({ name: props.current })
};

const breadcrumb = ref([
  { name: props.current, link  }
])
</script>

<style scoped>
.breadcrumb {
  display: flex;
  gap: 5px; /* Espacio entre los elementos */
  background-color: blue;
  color: white;
}
.breadcrumb-item {
  /* Opcional: puedes agregar estilos para los ítems */
  color: white;
}
</style>