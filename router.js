// router.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import Wa from './components/Wa.vue'; // 対応するコンポーネントをインポート
import Or from './components/Or.vue';
import Ca from './components/Ca.vue';
// 他の州のコンポーネントもインポート

Vue.use(VueRouter);

const routes = [
  { path: '/wa', component: Wa },
  { path: '/or', component: Or },
  { path: '/ca', component: Ca },
  // 他の州のパスもここに追加
];

const router = new VueRouter({
  routes // ルーティング設定
});

export default router;
