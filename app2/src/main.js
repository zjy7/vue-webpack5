import Vue from "vue";
import store from './store'
import App from "./App.vue";
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);
new Vue({
    store,
    el: '#app',
    render: h => h(App)
  })