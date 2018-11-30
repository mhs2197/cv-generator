// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
window.$ = require('jquery');
require('popper.js');
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/js/bootstrap.min');
require('../public/scss/style.css');


import Vue from 'vue';
import App from './App';
import welcomeVue from './components/welcome';
import cvInputsVue from './components/cv-inputs.vue'



Vue.component('welcomePage', welcomeVue);
Vue.component('cvInputsPage',cvInputsVue);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
