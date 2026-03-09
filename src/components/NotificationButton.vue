<template>
  <button @click="sendNotification">Enviar Notificación</button>
</template>

<script>
export default {
  methods: {
    sendNotification() {
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
  }
}
</script>