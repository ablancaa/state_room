const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false)
      })
    ]
  },
    pwa: {
    name: 'Unitat de Cremats', // Nombre de tu aplicación
    short_name: 'Unitat de Cremats', // Nombre corto para la pantalla de inicio
    themeColor: '#1B00FF',       // Aquí pones tu color deseado
    msTileColor: '#1B00FF',      // Para Windows tiles (opcional)
    manifestOptions: {
      background_color: '#FFFFFF', // Fondo de splash screen
    }
  }
})
