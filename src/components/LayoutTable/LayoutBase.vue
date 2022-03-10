<template>
  <div>
     <a-layout id="components-layout-demo-top-side-2">
                <a-layout-header class="header">
                <div class="logo" />
                        <a-menu
                            theme="dark"
                            mode="horizontal"
                            :default-selected-keys="['2']"
                            :style="{ lineHeight: '64px' }"
                        >
                            <a-menu-item key="1">
                            nav 1
                            </a-menu-item>
                            <a-menu-item key="2">
                            nav 2
                            </a-menu-item>
                            <a-menu-item key="3">
                            nav 3
                            </a-menu-item>
                        </a-menu>
                </a-layout-header>
            <a-layout>
                <a-layout-sider width="200" style="background: #fff">
                    <a-menu
                    mode="inline"
                    :default-selected-keys="['1']"
                    :default-open-keys="['sub1']"
                    :style="{ height: '100%', borderRight: 0 }"
                    >
                        <a-sub-menu key="sub1">
                            <span slot="title" @click="changeMenu('layoutTable')"><a-icon type="user" />表格表单</span>
                            <a-menu-item key="1" @click="changeMenu('table')">
                              table 表格
                            </a-menu-item>
                            <a-menu-item key="2" @click="changeMenu('form')">
                              form表单
                            </a-menu-item>
                            <a-menu-item key="3" @click="changeMenu('curd')">
                              curd表单
                            </a-menu-item>
                            <a-menu-item key="4" @click="changeMenu('echarts')">
                              eCharts
                            </a-menu-item>
                            <a-menu-item key="5" @click="changeMenu('baidumapdraw')">
                              百度地图绘图
                            </a-menu-item>
                            <a-menu-item key="6" @click="changeMenu('baidumaplocation')">
                              百度地图定位
                            </a-menu-item>
                            <a-menu-item key="7" @click="changeMenu('bmsearchlocation')">
                              百度搜索定位
                            </a-menu-item>
                            <a-menu-item key="8" @click="changeMenu('baidumapnavigation')">
                              百度导航定位
                            </a-menu-item>
                        </a-sub-menu>
                        <a-sub-menu key="sub2">
                            <span slot="title"><a-icon type="laptop" />subnav 2</span>
                            <a-menu-item key="9" @click="changeMenu('vuex')">
                               Vuex
                            </a-menu-item>
                            <a-menu-item key="10" @click="changeMenu('vuex2')">
                               Vuex2
                            </a-menu-item>
                        </a-sub-menu>
                        <a-sub-menu key="sub3">
                            <span slot="title"><a-icon type="notification" />subnav 3</span>
                            <a-menu-item key="9">
                            option9
                            </a-menu-item>
                            <a-menu-item key="10">
                            option10
                            </a-menu-item>
                        </a-sub-menu>
                    </a-menu>
                </a-layout-sider>
                <a-layout style="padding: 0 24px 24px">
                    <a-breadcrumb style="margin: 16px 0">
                            <a-breadcrumb-item>Home</a-breadcrumb-item>
                            <a-breadcrumb-item>List</a-breadcrumb-item>
                            <a-breadcrumb-item>App</a-breadcrumb-item>
                    </a-breadcrumb>
                    <a-layout-content  :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }" >
                       <router-view/> 
                    </a-layout-content>
                </a-layout>
            </a-layout>
     </a-layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
     
    };
  },
  methods:{
    changeMenu(route){
        if(this.$route.path !== route){
        //获取路由对象并切换
        this.$router.push(route)
       }
    }
  }
}
</script>
<style>
#components-layout-demo-top-side .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>