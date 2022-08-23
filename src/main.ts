import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import '../src/styles/app.scss'

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(BootstrapVue3)
  .mount('#app')
