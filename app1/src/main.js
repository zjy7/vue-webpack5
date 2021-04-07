import Vue from "vue";
import App from "./App.vue";
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);

console.log('in app1 main.js')
new Vue({
    el: '#app',
    render: h => h(App)
  })