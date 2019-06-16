import Vue from 'vue';
import App from './App.vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
//import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';
import router from '../src/router';
import Axios from 'axios';
import Installer from '@/plugins/installer';

Vue.config.productionTip = false;
Vue.use(MintUI);
//Vue.use(ElementUI);
Vue.use(Installer);

//注册全局组件
import MyUL from './components/common/MyUL';
import MyLi from './components/common/MyLi';
Vue.component(MyUL.name,MyUL);
Vue.component(MyLi.name,MyLi);

Vue.prototype.$axios = Axios;

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
