<template>
  <div id="BaiduMapDraw">
    <!--<baidu-map class="bm-view" :center="center" :zoom="zoom" @ready="handler"></baidu-map>-->
        <baidu-map class="map" :class="'bm-view'" style="height:500px"
            :center="{lng: 116.404, lat: 39.915}"
            :zoom="14"
            @mousemove="syncPolyline"
            @click="paintPolyline"
            @rightclick="newPolyline">
            <bm-control>
                <!--<button @click="toggle('polyline')">{{ polyline.editing ? '停止绘制' : '开始绘制' }}</button>-->
                <button @click="polyline.editing=!polyline.editing">{{ polyline.editing ? '停止绘制' : '开始绘制' }}</button>
            </bm-control>
            <bm-polyline :path="path" v-for="(path,index) in polyline.paths" :key="index"></bm-polyline>
        </baidu-map>
        {{ getresturantName }}
        <button @click="modifyMutAName(msgB)">百度地图</button>
  </div>
</template>

<script>
import {mapActions, mapGetters,mapMutations} from 'vuex'
export default {
  name: 'BaiduMapDraw', // BaiduMapDraw 这个名字和引入的组件同名时  会报错
  data(){
     return{
         center: {lng: 0, lat: 0},
         zoom: 3,
         polyline: {
            editing: false,
            paths: []
         },
         msgB:'百度地图'
     }
  },
  computed:{
    ...mapGetters(['getresturantName']) // this.$store.getters.getresturantName
  },
  methods: {
    // 同步
    // ...mapMutations(
    //   ['modifyMutBName']
    // ),
    // 异步
    ...mapActions( // 语法糖
          ['modifyBName'] // 相当于this.$store.dispatch('modifyName'),提交这个方法
    ),
    //鼠标移动
    syncPolyline(e){
      //console.log('e',e)
      if(!this.polyline.editing){
          return;
      }
      const {paths} = this.polyline
      //console.log('paths',paths)
      if(!paths.length){
          return;
      }
      const path = paths[paths.length-1]
      if(!path.length){
          return;
      }
      if(path.length===1){
          path.push(e.point)
      }
      this.$set(path,path.length-1,e.point)
    },  
    paintPolyline(e){
       if(!this.polyline.editing){
           return;
       }
       const {paths} = this.polyline
       !paths.length && paths.push([])
       paths[paths.length-1].push(e.point)
    },
    //右击
    newPolyline(e){
      //console.log('e2',e)
      if(!this.polyline.editing){
          return;
      }
      const {paths} = this.polyline;
      if(!paths.length){
          paths.push([])
      }
      const path = paths[paths.length-1]
      path.pop();
      if(path.length){
          paths.push([])
      }
    },
    handler ({BMap, map}) {
      this.center.lng = 116.404  //  lng  lat 地图上的经纬度
      this.center.lat = 39.915  // x y 地图上某一点的像素坐标  sw ne 某一块区域上由西南到东北2个坐标围成的区域
      this.zoom = 15
    }
  }
}
</script>

<style>

</style>
