import Vue from 'vue';
import Router from 'vue-router';
import items from './views/pim.vue';
import New from './views/new.vue';
import Show from './views/show.vue';
import Edit from './views/edit.vue';
import storeMain from './views/storeMain.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/storeMain'
    },
    {
      path: '/storeMain',
      name: 'storeMain',
      component: storeMain
    },
    {
      path: '/pim',
      name: 'pim',
      component: items
    },
    {
      path: '/pim/new',
      name: 'new-product',
      component: New
    },
    {
      path: '/pim/:id',
      name: 'show',
      component: Show
    },
    {
      path: '/pim/:id/edit',
      name: 'edit',
      component: Edit
    }
   
  ]
});