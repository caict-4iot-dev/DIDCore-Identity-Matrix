import { createApp } from 'vue';
import pinia from '/@/stores/index';
import App from '/@/App.vue';
import router from '/@/router';

// 引入图标库
import other from '/@/assets/scripts/other';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import '/@/assets/scss/index.scss';
import VueGridLayout from 'vue-grid-layout';
import Pagination from '/@/components/pagination/index.vue';
//引入图片懒加载插件
import lazyload from '/@/assets/scripts/lazyload'
// img元素上使用v-lazy="src";<img v-lazy="showImage"/>
const app = createApp(App);

other.elSvg(app);
app.use(pinia).use(router).use(lazyload).use(ElementPlus,{locale: zhCn}).component('Pagination',Pagination).use(VueGridLayout).mount('#app');
