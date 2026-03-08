<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const fechaHora = ref("")

let intervalo

const actualizarHora = () => {
  const ahora = new Date()
  fechaHora.value = ahora.toLocaleString()
}

onMounted(() => {
  actualizarHora()
  intervalo = setInterval(actualizarHora, 1000)
})

onUnmounted(() => {
  clearInterval(intervalo)
})
</script>

<template>
  <footer class="bg-light text-lg-start">
    <div class="footer-content p-3 border">
      
      <div>
        <p>© 2026 Copyright:
          <a class="text-white"
          href="https://hospital.vallhebron.com/assistencia/especialitats/cirurgia-plastica-i-cremats">
          Unitat de Cremats
          </a>
        </p>
        <p>Designer: Alberto Blanca Alcaide</p>
      </div>

      <div class="hora">
        {{ fechaHora }}
      </div>

    </div>
  </footer>
</template>

<style scoped>

.footer-content{
  background-color: rgb(27, 0, 255);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
}

p,a{
  color: white;
  font-size: 14px;
  margin: 0;
}

.hora{
  color: white;
  font-size: 14px;
}

</style>