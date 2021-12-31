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
                <a-layout-sider width="200" style="background: #fff" >
                  
                    <a-menu
                    mode="inline"
                    :default-selected-keys="['1']"
                    :style="{ height: '100%', borderRight: 0 }"
                    >
                    <template v-for="item in this.$router.options.routes">
                        <!-- 第一层 -->
                        <template v-if="item.children">
                          <a-sub-menu :key="item.id">
                             <span slot="title">
                               <span @click="changeMenu(item.name)">{{ item.title }}</span>
                              </span>
                              <template v-for="subitem in item.children">
                                <!-- 第二层 -->
                                <template v-if="subitem.children">
                                  <a-sub-menu :key="subitem.id">
                                    <span slot="title" @click="changeMenu(subitem.name)">{{ subitem.title }}</span>
                                    <template v-for="sub3 in subitem.children">
                                    <!-- 第三层 -->
                                    <template v-if="sub3.children">
                                      <a-sub-menu :key="sub3.id">
                                         <span slot="title" @click="changeMenu(sub3.name)">{{ sub3.title }}</span>
                                        <template v-for="sub4 in sub3.children">
                                          <a-menu-item
                                            :key="sub4.id"
                                          >
                                           <span slot="title" @click="changeMenu(sub4.name)"> {{ sub4.title }}</span>
                                          </a-menu-item>
                                        </template>
                                      </a-sub-menu>
                                    </template>
                                    <!-- 第三层 -->
                                    <template v-else>
                                      <a-menu-item :key="sub3.id">
                                        <span  @click="changeMenu(sub3.name)"> {{ sub3.title }}</span>
                                      </a-menu-item>
                                    </template>
                                  </template>
                                </a-sub-menu>
                              </template>
                              <!-- 第二层 -->
                              <template v-else>
                                <a-menu-item :key="subitem.id">
                                  <span  @click="changeMenu(subitem.name)"> {{ subitem.title }}</span>
                                </a-menu-item>
                              </template>
                            </template>
                          </a-sub-menu>
                        </template>
                        <!-- 第一层 -->
                        <template v-else>
                          <a-menu-item
                            :key="item.id"
                            :class="item.fileType == 'file' ? 'actstyle' : ''"
                          >
                          <span @click="changeMenu(item.name)"> {{ item.title }}</span>
                          </a-menu-item>
                        </template>
                      </template>
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
  created(){
   console.log('options',this.$router.options.routes)
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