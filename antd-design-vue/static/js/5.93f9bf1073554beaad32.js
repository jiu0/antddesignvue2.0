webpackJsonp([5],{PKzu:function(t,e){},mU0w:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{margin:"200px 0"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.toggleShow,expression:"toggleShow"}]},[s("p",[t._v("登录状态:"+t._s(t.userLogin))]),t._v(" "),s("p",[t._v("用户信息:"+t._s(t.userInfo))]),t._v(" "),s("button",{on:{click:function(e){return t.loginIn()}}},[t._v("登录")]),t._v(" "),s("button",{on:{click:function(e){return t.loginOut()}}},[t._v("退出")])]),t._v(" "),s("router-view")],1)},staticRenderFns:[]};var o=s("VU/8")({computed:{toggleShow:function(){return this.$route.meta.show},userLogin:function(){return this.$store.state.user.userLogin?this.$store.state.user.userLogin:(this.$store.commit("USER_INFO_COMMIT"),this.$store.state.user.userLogin)},userInfo:function(){return this.$store.state.user.userLogin?this.$store.state.user.userInfo:(this.$store.commit("USER_INFO_COMMIT"),this.$store.state.user.userInfo)}},data:function(){return{userMsg:{name:"小明",age:"18",sex:"男"}}},methods:{loginIn:function(){this.$store.commit("USER_SIGNIN",this.userMsg)},loginOut:function(){this.$store.commit("USER_SIGNOUT")}}},n,!1,function(t){s("PKzu")},null,null);e.default=o.exports}});