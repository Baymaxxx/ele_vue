// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import goods from './components/goods/goods.vue';
import seller from './components/seller/seller.vue';
import ratings from './components/ratings/ratings.vue';
import './common/sass/index.scss';
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);
// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/seller',
      component: seller
    },
    {
      path: '/ratings',
      component: ratings
    }
  ]
});

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');

router.push('/goods');
