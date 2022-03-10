import Vue from 'vue'
//import Vue from 'vue/dist/vue.min.js'
import Antd from 'ant-design-vue';
// import {
// FormModel,
// Breadcrumb,LayoutSider,
// } from 'ant-design-vue/lib';  // 按需引入
import App from './App'
import Axios from 'axios'
import 'ant-design-vue/dist/antd.css';
import router from './router'
import $ from 'jquery'
window.$=$

import store from './store/index'
//import store2 from './store2/index'

import * as G2 from '@antv/g2';
Vue.use(G2)

//全局引入百度地图组件
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'CjvGwXYdPkO45WoOBA1xGuulTwQdGbF6'
})

import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts;

//import formCreate from "@form-create/ant-design-vue"
//Vue.use(formCreate)
Vue.prototype.$axios = Axios

Vue.use(Antd); 
//引入Mock 数据
const mock = true;
if(mock){
  var arr2 =require('./mock/mock')
  console.log('arr2',arr2)
}

// Vue.component(Form.Item.name, Form.Item);
// Vue.component(Select.Option.name, Select.Option);
// Vue.component(FormModel.Item.name,FormModel.Item);
// Vue.component(Breadcrumb.name,Breadcrumb);
// Vue.component(Layout.Header.name,Layout.Header);
// Vue.component(Layout.Sider.name,Layout.Sider);
// Vue.component(Layout.Content.name,Layout.Content);
// Vue.component(Layout.Footer.name,Layout.Footer);
// Vue.component(Breadcrumb.Item.name,Breadcrumb.Item);
// Vue.component(Menu.Item.name,Menu.Item);
// Vue.component(Menu.SubMenu.name,Menu.SubMenu);

import * as filters from '@/api/firtes'
import * as directives from '@/api/directives'
//全局注册directive
Object.keys(directives).forEach(key=>{
  Vue.directive(key,directives[key]())
})
//注册全局filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});


router.beforeEach((to,from,next)=>{
    if(to.fullPath === '/'){
        next('/layoutTable')  //避免陷入无限循环中...
    }else{
        next()
    }
      var obj ={};
      obj.toName = to.fullPath;
      obj.fromName = from.fullPath;
      localStorage.setItem('baiduUrl',JSON.stringify(obj))  // "" '' 效果一样
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  //store2,
  components: { App },
  template: '<App/>'
})
