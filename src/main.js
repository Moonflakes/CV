import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'animate.css'
import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'

Vue.config.productionTip = false

Vue.use(SequentialEntrance);
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
