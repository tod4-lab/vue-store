import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import store from '@/store'
// 引入mockService.js mock数据，这样访问mock url就能转到mock的数据
import '@/mock/service'
import 'swiper/css/swiper.css'
import Carousel from "@/components/Carousel";
import Pagination from "@/components/Pagination"

Vue.config.productionTip = false;
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);

new Vue({
  render: h => h(App),
  router,
  store,
  // 创建全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
