<script setup>
import { ref } from 'vue'
import { useRouter  } from 'vue-router'
import FooterPage from '@/components/FooterPage.vue'
const router = useRouter()

const email = ref('')
const password = ref('')
const error = ref('')

function handleLogin() {
  error.value = ''
  if (email.value === 'ablancaa@gmail.com' && password.value === '123456') {
    alert('¡Bienvenido!')
    // Redirecció o gestió d'autenticació aquí
    router.push('/DashboardView')
  } else {
    error.value = 'Correo o contraseña incorrectos.'
  }
}
</script>

<template>
  <div class="d-flex align-items-center justify-content-center min-vh-100 bg-light">
  
    <div class="card shadow p-4" style="width: 100%; max-width: 400px;">
    <div class="justify-content-center">
      <img src="../assets/LogoUnitatCremats.png" class="navbar-brand rounded-3" alt="..." style="width: 50px; height: auto;">
    </div>
      <h2 class="text-center mb-4">Iniciar sesión</h2>

      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label for="email" class="form-label">Correo electrónico</label>
          <input
            v-model="email"
            type="email"
            id="email"
            class="form-control"
            placeholder="ejemplo@correo.com"
            required
          />
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">Contraseña</label>
          <input
            v-model="password"
            type="password"
            id="password"
            class="form-control"
            placeholder="********"
            required
          />
        </div>

        <button type="submit" class="btn btn-primary w-100">Entrar</button>

        <div v-if="error" class="alert alert-danger mt-3" role="alert">
          {{ error }}
        </div>

        <p class="mt-3 text-center text-muted">
          ¿No tienes una cuenta?
          <a href="#">Regístrate</a>
        </p>
      </form>
    </div>
  </div>
  <FooterPage />
</template>



