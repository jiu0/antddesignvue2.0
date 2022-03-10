// import { router, routes } from '@core'
// export { routes }
// export default router


import Vue from 'vue'
import Router from 'vue-router'
//import Form from '@/components/TabModel/Form/Form'
//import Table from '@/components/TabModel/Table/Table'
//import AddTable from '@/components/TabModel/AddTable/AddTable'
import LayoutTable from '@/components/LayoutTable/LayoutTable'
import LayoutTwo from '@/components/LayoutTwo/LayoutTwo'

//解决菜单重复点击的问题
const original = Router.prototype.push;
Router.prototype.push = function push(location){
  return original.call(this,location).catch(err=>err)
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/layoutTable',
      title:'一级菜单',
      name: 'layoutTable',
    },
    // {
    //   path: '/form',
    //   name: 'form',
    //   component: Form
    // },
    // {
    //   path: '/table',
    //   name: 'table',
    //   component: () => import('@/components/TabModel/Table/Table'),
    // },
    // {
    //   path: '/addTable',
    //   name: 'addTable',
    //   component: AddTable
    // },
    {
      title:'表格表单',
      path: '/layoutTable',
      name: 'layoutTable',
      component: LayoutTable,
      children:[
          {
            title:'表格',
            path: '/table',
            name: 'table',
            meta:{show:true},
            component: () => import('@/components/TabModel/Table/Table'),
            children:[
              {
                title:'新增表格',
                path: '/addtable',
                name: 'addtable',
                component: () => import('@/components/TabModel/AddTable/AddTable'),
              },
            ]
          },
          {
            title:'表单',
            path: '/form',
            name: 'form',
            component: () => import('@/components/TabModel/Form/Form'),
          },
          {
            title:'表单验证',
            path: '/curd',
            name: 'curd',
            component: () => import('@/components/TabModel/Curd/Curd'),
          },
          {
            title:'图表',
            path: '/echarts',
            name: 'echarts',
            component: () => import('@/components/Echarts/Echarts'),
            children:[
              // 使用vuex
              {
                title:'父级图表',
                path: '/echartsparent',
                name: 'echartsparent',
                component: resolve => require(['@/components/Echarts/EchartsParent'], resolve) ,
              },
            ]
          },
          // 百度地图绘图
          {
            title:'百度绘图',
            path: '/baidumapdraw',
            name: 'baidumapdraw',
            component: () => import('@/components/BaiduMap/BaiduMapDraw'),
          },
          // 百度地图定位
          {
            title:'百度定位',
            path: '/baidumaplocation',
            name: 'baidumaplocation',
            component: () => import('@/components/BaiduMap/BaiduMapLocation'),
          },
           // 百度地图搜索定位
           {
            title:'百度搜索', 
            path: '/bmsearchlocation',
            name: 'bmsearchlocation',
            component: resolve => require(['@/components/BaiduMap/BMSearchLocation'], resolve) ,
          },
           // 百度地图导航定位
          {
            title:'百度导航',
            path: '/baidumapnavigation',
            name: 'baidumapnavigation',
            component: resolve => require(['@/components/BaiduMap/BaiduMapNavigation'], resolve) ,
          },
          // 使用vuex
          {
            title:'vuex学习',
            path: '/vuex',
            name: 'vuex',
            component: resolve => require(['@/components/Vuex/Vuex'], resolve),
            meta:{show:true},
            children:[
                // 使用vuex
                {
                  title:'vuex三级菜单',
                  path: '/vuex2',
                  name: 'vuex2',
                  component: resolve => require(['@/components/Vuex2/Vuex2'], resolve) ,
                },
            ]
         },
      ]
    },
    {
      path: '/layouttwo',
      name: 'layouttwo',
      component: LayoutTwo,
      title:'一级菜单2',
    },
  ]
})

