import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import routerConfig from './router.config.js';
require('./assets/index.css') ;

// var moment = require('moment');

Vue.use(VueRouter);//重要
var router = new VueRouter(routerConfig);
new Vue({
  el: '#app',
  data:{
    msg:"sss"
  },
  methods:{
  },
  render:h=>h(App),
  router:router
});
