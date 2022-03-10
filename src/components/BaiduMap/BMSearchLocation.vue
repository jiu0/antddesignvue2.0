 <template>
    <div ref="addHospital">
            <div class="map" v-loading="loading">
                <a-input placeholder="请输入搜索地址" v-model="mapName" class="input-with-select" style="color:blue;width:93%">
                </a-input>
                <a-button slot="append" type="primary" icon="el-icon-search" @click="mapNameChange" @keyup.enter="mapNameChange">搜索</a-button>
                <div style="padding:10px 0;" v-if="mapPointName">当前选中：{{mapPointName}}</div>
                <div id="container" style="height:400px;width:100%" ref="allmap"></div>
            </div>
    </div>
</template>
<script>
let map = null,geoc = null;
export default {
  name: "addHospital",
  data() {
    return {
      mapName: "",
      mapPointName: "",
      loading:true,  // 执行loading 图标
      mapGetshow: true,
      dialogName: ""
    };
  },
  destroyed() {
    // 销毁事件
    window.removeEventListener("keydown", this.keyDown, false);
  },
  mounted(){
    // 绑定监听事件
    window.addEventListener("keydown", this.keyDown);
    this.$nextTick(()=>{
      this.addClassParent();
      this.getParentDom()  // ref= addHospital 元素的父元素添加了addHostParent 样式  .addHostParent:before 是制作背景弹层
      this.loadStyleString(".addHostParent:before{content:'';position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(55,55,55,.6);z-index:1000;pointer-events:none;}")
      this.removeClassParent();
   })
  },
  beforeRouteLeave (to, from, next) {
       if(to.path !== '/bmsearchlocation'){
          this.removeClass(this.$refs.addHospital.parentNode,'addHostParent')
       }else{
          this.addClass(this.$refs.addHospital.parentNode,'addHostParent')
       }
       next();
  },
  created() {
      this.mapBuild()
  },
  methods: {
     removeClassParent(){
       if(this.$refs.addHospital.parentNode){
          setTimeout(() => {
              console.log('this',this)
              this.removeClass(this.$refs.addHospital.parentNode,'addHostParent')
         }, 5000);
       }
     },
     addClass( elements,cName ){
        elements.className += " " + cName;
     },
     // 点击回车键登录
     keyDown(e) {
      // 回车则执行登录方法 enter键的ASCII是13
      if (e.keyCode === 13) {
        this.mapNameChange(); // 定义的登录方法
      }
     },
     // 为父元素添加样式实现弹层点破
     addClassParent(){
        this.$refs.addHospital.parentNode.setAttribute('pointer-events','auto')
     },
     // 为当前元素添加伪盒子
     loadStyleString(css) {
        var style = document.createElement("style");
        try {
            style.appendChild(document.createTextNode(css));
        } catch(ex) {
            style.styleSheet.cssText = css;
        }
            var head = document.getElementsByTagName('head')[0];
            head.appendChild(style);
     },
     // 找到当前元素的父元素
     getParentDom(){
        var parentDom = this.$refs.addHospital.parentNode;
        parentDom.style.position = 'relative'
        parentDom.className = 'addHostParent'
     },
     // 判断是否有样式
     hasClass( elements,cName ){
	    	return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") ); // ( \\s|^ ) 判断前面是否有空格 （\\s | $ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断
	   },
    // 去除指定元素的样式
     removeClass( elements,cName){
        if( this.hasClass( elements,cName ) ){
            elements.className = elements.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" )," " ); // replace方法是替换
        };
    },
    //搜索地图
    mapNameChange() {
      let that = this,
        point,
        marker = null;
      let local = new BMap.LocalSearch(map, {
        renderOptions: { map: map },
        onSearchComplete: res => {
          if (local.getResults() != undefined) {
              map.clearOverlays(); //清除地图上所有覆盖物
            if (local.getResults().getPoi(0)) {
              point = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
              map.centerAndZoom(point, 10);
              marker = new BMap.Marker(point); // 创建标注
              map.addOverlay(marker); // 将标注添加到地图中
              marker.enableDragging(); // 可拖拽
              geoc.getLocation(point, function(rs) {
                var addComp = rs.addressComponents;
                console.log(addComp);
                that.mapPointName =
                  addComp.province +
                  ", " +
                  addComp.city +
                  ", " +
                  addComp.district +
                  ", " +
                  addComp.street +
                  ", " +
                  addComp.streetNumber;
              });
            } else {
              alert("未匹配到地点!可拖动地图上的红色图标到精确位置");
            }
          } else {
            alert("未找到搜索结果");
          }
        }
      });
      local.search(this.mapName);
    },
    //地图显示
    mapBuild() {
      let that = this;
      setTimeout(function() {
        if (that.mapGetshow) {
          map = new BMap.Map("container");
          geoc = new BMap.Geocoder();
          let point = new BMap.Point(116.3964, 39.9093);
          map.centerAndZoom(point, 10);
          map.enableScrollWheelZoom();
          var geolocation = new BMap.Geolocation();
          //定位
          geolocation.getCurrentPosition(
            r => {
              console.log(r);
              var mk = new BMap.Marker(r.point);
              map.addOverlay(mk);
              map.panTo(r.point);
              geoc.getLocation(r.point, function(rs) {
                var addComp = rs.addressComponents;
                console.log(addComp);
                that.mapPointName =
                  addComp.province +
                  addComp.city +
                  addComp.district +
                  addComp.street +
                  addComp.streetNumber;
                  that.loading = false;
                that.mapGetshow = false;
              });
            },
            { enableHighAccuracy: true }
          );
          //鼠标点击
          map.addEventListener("click", function(e) {
            console.log(e);
            var pt = e.point;
            var marker = new BMap.Marker(pt); // 创建标注
            map.clearOverlays();
            map.addOverlay(marker);
            geoc.getLocation(pt, function(rs) {
              var addComp = rs.addressComponents;
              console.log(addComp);
              that.mapPointName =
                addComp.province +
                addComp.city +
                addComp.district +
                addComp.street +
                addComp.streetNumber;
            });
          });
        }
      }, 1000);
    }
  }
};
</script>

<style scoped>
/*遮罩层 :class=" '__charts_tip  __ald__mask' "  */

</style>