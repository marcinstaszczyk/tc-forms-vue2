import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { GraphQLPlugin } from './graphQL';

Vue.config.productionTip = false;

Vue.use(GraphQLPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
