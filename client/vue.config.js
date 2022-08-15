/* 
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
*/

module.exports = {
  transpileDependencies: ["Vuetify"],
  devServer: {
    proxy: ""
  }
}
