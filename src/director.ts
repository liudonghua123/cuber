import Vue from "vue";
import Director from "./vue/Director";
import "material-design-icons/iconfont/material-icons.css";
import "vuetify/dist/vuetify.css";
import "typeface-roboto";
import Vuetify from 'vuetify'

Vue.use(Vuetify);
const opts = {};
const vuetify = new Vuetify(opts);

new Vue({
  vuetify,
  el: "#app",
  render: h => h(Director)
});