// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
window.$ = require('jquery');
window.$ = $.extend(require('jquery-ui'));
require('popper.js');
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/js/bootstrap.min');
require('../public/scss/style.css');



import Vue from 'vue';
import App from './App';
import welcomeVue from './components/welcome';
import cvInputsVue from './components/cv-inputs.vue';
import selfInfoVue from './components/userInfoInputs/selfInfo.vue';
import careerObjectiveVue from './components/userInfoInputs/careerObjective.vue';
import experienceVue from './components/userInfoInputs/experience.vue';
import skillsVue from './components/userInfoInputs/skills.vue';
import projectsVue from './components/userInfoInputs/projects.vue';
import educationVue from './components/userInfoInputs/education.vue';



Vue.component('welcomePage', welcomeVue);
Vue.component('cvInputsPage',cvInputsVue);
Vue.component('selfInfoInput', selfInfoVue);
Vue.component('careerObjectiveInput', careerObjectiveVue);
Vue.component('experienceInput', experienceVue);
Vue.component('skillsInput', skillsVue);
Vue.component('projectsInput', projectsVue);
Vue.component('educationInput', educationVue);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
