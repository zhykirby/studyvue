import Vue from 'vue';
import App from './App.vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
//import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';
import router from '../src/router';
import Axios from 'axios';
import Installer from '@/plugins/installer';
import VuePreview from 'vue-preview';
import store from '@/store/index';

Vue.config.productionTip = false;
Vue.use(MintUI);
//Vue.use(ElementUI);
Vue.use(Installer);
Vue.use(VuePreview);

//注册全局组件
import MyUL from './components/common/MyUL';
import MyLi from './components/common/MyLi';
import MyHeader from './components/common/MyHeader';
Vue.component(MyUL.name,MyUL);
Vue.component(MyLi.name,MyLi);
Vue.component(MyHeader.name,MyHeader);

//时间过滤器
import Moment from 'moment';
Vue.filter('convertTime',function(data,formatStr){
  return Moment(data).format(formatStr);
});

Vue.prototype.$axios = Axios;
//拦截器
Axios.interceptors.request.use(function(config){
  MintUI.Indicator.open({
    text:'转圈圈，转圈圈……',
    spinnerType:'fading-circle'
  });
  return config;
});
Axios.interceptors.response.use(function(response){
  MintUI.Indicator.close();
  return response;
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
