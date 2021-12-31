# vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

vue2.0 项目打包上线
1 修改 config 下的index.js  里面的 build 下 的  assetsPublicPath 为 ./ 和 productionSourceMap: false, 
2 开始打包 


 vue3.0 打包上线 在vue.config.js  里把  publicPath:'./', 就可以了
