<template>
  <div id="BaiduMapNavigation" ref="BaiduMapNavigation" v-nodata="nodata">
      <div id="all">
         <a-input placeholder="请输入搜索地址" id="suggestId" name="address_detail" v-model="address_detail"  class="input-with-select" style="color:blue;">
        </a-input>  
        <div id="allmap"></div>
    </div>
  </div>
</template>

<script>
 import $ from 'jquery'
export default {
  name: 'BaiduMapNavigation',
  data(){
     return{
          address_detail: null, //详细地址
          center: {lng: "", lat: ""},
          nodata:true,
     }
  },
  mounted(){
     this.$nextTick(function(){
          var th = this;
          // setTimeout(() => {
          //   console.log('th',th)
          //   th.removeClass(th.$refs.BaiduMapNavigation.parentNode,'addHostParent')
          // }, 5000);
          th.getNavigation();
          th.getParentDom();
          setTimeout(()=>{
            th.getLocation()
         },3000)
        // 创建Map实例
        var map = new BMap.Map("allmap");
        // 初始化地图,设置中心点坐标，
        var point = new BMap.Point(121.51713,31.079655); // 创建点坐标，联航路的经纬度坐标
        map.centerAndZoom(point, 15);
        map.enableScrollWheelZoom();
        //添加缩略图控件
        map.addControl(new BMap.OverviewMapControl({isOpen:false,anchor:BMAP_ANCHOR_BOTTOM_RIGHT}));
        //添加缩放平移控件
        map.addControl(new BMap.NavigationControl());
        //添加比例尺控件
        map.addControl(new BMap.ScaleControl());
        //添加地图类型控件
        //map.addControl(new BMap.MapTypeControl());
        var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
          {
            "input": "suggestId"
            , "location": map
          })
            var myValue
            ac.addEventListener("onconfirm", function (e) {    //鼠标点击下拉列表后的事件
            var _value = e.item.value;
            myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
            this.address_detail = myValue
            setPlace();
        });
        function setPlace() {
            map.clearOverlays();    //清除地图上所有覆盖物
            function myFun() {
                    th.center = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
                    map.centerAndZoom(th.center, 18);
                    map.addOverlay(new BMap.Marker(th.center));    //添加标注
            }
            var local = new BMap.LocalSearch(map, { //智能搜索
                onSearchComplete: myFun
            });
            local.search(myValue);
            console.log('local',local)
            //测试输出坐标（指的是输入框最后确定地点的经纬度）
            map.addEventListener("click",function(e){
                console.log(e)
                //经度
                console.log('lng',th.center.lng);
                //维度
                console.log('lat',th.center.lat);
                th.address()
                })
            };
            // 初始化获取经纬度转化地址
            map.addEventListener("click",function(e){
                console.log('this',this)
                console.log('th',th)
                console.log('point0',e.point)
                th.center.lng = e.point.lng;
                th.center.lat = e.point.lat;
                //经度
                console.log('point1',e.point.lng);
                //维度
                console.log('point2',e.point.lat);
                th.address()
            })
      })
  },
  methods:{
     // 判断是否有样式
    //  hasClass( elements,cName ){
	  //   	return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") ); // ( \\s|^ ) 判断前面是否有空格 （\\s | $ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断
	  //  },
    //  // 去除指定元素的样式
    //  removeClass( elements,cName){
    //     if( this.hasClass( elements,cName ) ){
    //         elements.className = elements.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" )," " ); // replace方法是替换
    //     };
    //  },
      // 找到当前元素的父元素
      getParentDom(){
         var parentDom = this.$refs.BaiduMapNavigation.parentNode;
         parentDom.style.position = 'relative'
      },
      getLocation(){
            this.nodata = false;   // 控制loading 图标 显隐
            //this.getNavigation()
      },
      //定义方法
      getNavigation(){
           
      },
      address(){
            let that = this;
            $.ajax({
            type : "get",
            async:false,
            url : 'http://api.map.baidu.com/geocoder/v2/',
            dataType : "jsonp",
            data:{
                location:this.center.lat+','+this.center.lng,
                output:'json',
                pois:'1',
                ak:'QsVXkxxkfjL9W9A1EbsXsY80vtEFIQ6j'
            },
            success: function(json){
                console.log('json',json);
                that.address_detail = json.result.formatted_address
            },
            error: function() {
                alert("失败");
             }
            });
        },  
      },
}
</script>

<style>
#allmap{
    height:500px;
    margin: 0 auto;
}

</style>
