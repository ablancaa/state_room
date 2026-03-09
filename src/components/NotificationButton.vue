<template>
  <button @click="sendNotification">Enviar Notificación</button>
</template>

<script setup>
import { onMounted } from 'vue'

// Pedir permiso de notificaciones al montar el componente
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

// Función para enviar la notificación
const sendNotification = () => {
  if (Notification.permission === 'granted') {
    navigator.serviceWorker.getRegistration().then(reg => {
      if (reg) {
        reg.showNotification('¡Hola!', {
          body: 'Esta es tu notificación local desde Vue PWA',
          icon: '/img/icons/LogoUnitatCremats.png',
          badge: '/img/icons/LogoUnitatCremats.png'
        })
      }
    })
  } else {
    alert('No tienes permiso para recibir notificaciones')
  }
}
</script>