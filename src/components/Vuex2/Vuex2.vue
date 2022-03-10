<template>
    <div style="margin:200px 0">
        <a-button @click="isLogin">点击</a-button>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
console.log('mapGetters',mapGetters)
export default {
  data() {
    return {
    };
  },
  methods: {
    async isLogin() {
        //使用 try/catch 抓取错误信息，如果登陆失败则会输出错误信息，不往下执行
        try {
            await this.$store.dispatch("user/login");
            //如果登陆成功才会 输出 ‘登陆成功’
            console.log('登陆成功')
        } catch (error) {
            console.log(error);
        }
      }
  },
  //计算属性
 computed:{
   //通过getter.js对外暴露的 phoneNo 值进行使用
   // {{phoneNo}} 数值使用
    ...mapGetters(['phoneNo'])
  },
  created(){
    console.log(...mapGetters(['phoneNo']))
  }
};
</script>
<style>
</style>