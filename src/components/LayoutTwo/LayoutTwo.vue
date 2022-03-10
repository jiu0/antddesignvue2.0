<template>
    <div id="LayoutTwo">
            <a-layout id="components-layout-demo-top-side-2">
                <a-layout-header class="header" style="background: #ccc">
                       头部
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
                        <span slot="title"><a-icon type="user" /> </span>
                            <a-menu-item key="1">
                              侧边栏
                            </a-menu-item>
                      </a-sub-menu>
                    </a-menu>
                </a-layout-sider>
                <a-layout style="padding: 0 24px 24px">
                    <a-layout-content  :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }" >
                       <router-view/> 
                    </a-layout-content>
                </a-layout>
            </a-layout>
      </a-layout>
    </div>
</template>

<script>
//import {Header,Layout,Sider,Content,Footer} from 'ant-design-vue/lib';  // 按需引入
export default {
  name:'LayoutTwo',
  // components:{
  //    Header,
  //    Layout,
  //    Sider,
  //    Content,
  //    Footer
  // },
  data(){
    return{
      msg:''
    }
  }
};
</script>

<style scope>
</style>