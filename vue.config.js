const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    Proxy: 'http://localhost:7070/insert.php'
  },
}

)
