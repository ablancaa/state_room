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

        <button type="submit">Enviar Notificación</button>
      </form>
    </div>

    <FooterPage />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import NavBar from '@/components/NavBar.vue'
import BreadCrumb from '../components/BreadCrumb.vue'
import FooterPage from '@/components/FooterPage.vue'
// Datos reactivos para el formulario
const title = ref('')
const message = ref('')
const namePage = 'Notificacions'

// Pedir permiso de notificaciones al abrir
onMounted(() => {
  if ('Notification' in window) {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        console.log('Permiso de notificaciones concedido ✅')
      } else {
        console.log('Permiso de notificaciones denegado ❌')
      }
    })
  }
})

// Función para enviar notificación
const handleSubmit = () => {
  if (Notification.permission !== 'granted') {
    alert('No tienes permiso para enviar notificaciones')
    return
  }

  const notifTitle = title.value
  const notifMessage = message.value

  navigator.serviceWorker.getRegistration().then(reg => {
    if (reg) {
      reg.showNotification(notifTitle, {
        body: notifMessage,
        icon: '/img/icons/LogoUnitatCremats.png',
        badge: '/img/icons/LogoUnitatCremats.png'
      })
    }
  })

  // Limpiar formulario después de enviar
  title.value = ''
  message.value = ''
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* altura total de la ventana */
}

.form-wrapper {
  flex: 1; /* ocupa todo el espacio restante entre NavBar y Footer */
  display: flex;
  justify-content: center; /* centra horizontalmente */
  align-items: center;     /* centra verticalmente */
}

.form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  gap: 10px;
  width: 100%;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  border-radius: 10px;
  background-color: #fff;
}

input, textarea {
  width: 100%;
  padding: 6px;
  font-size: 14px;
}

button {
  padding: 8px 12px;
  background-color: #1B00FF;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0000cc;
}
</style>