import Vue from 'vue';
import App from './App.vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import router from '../src/router';
import Axios from 'axios';

Vue.config.productionTip = false;
Vue.use(MintUI);

Vue.prototype.$axios = Axios;

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
