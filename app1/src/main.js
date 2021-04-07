import Vue from "vue";
import App from "./App.vue";

console.log("in app1 main.js");
new Vue({
  el: "#app",
  render: (h) => h(App),
});
