<template>
  <div id="BaiduMapLocation" style="height:500px" :title="location">
  </div>
</template>

<script>
import BMap from 'BMap'
export default {
  name: 'BaiduMapLocation', // BaiduMapLocation 这个名字和引入的组件同名时  会报错
  data(){
     return{
         location:'',
         center:{
            lng:116.40387397,
            lat:39.91488908
         }
     }
  },
  mounted(){
     this.$nextTick(()=>{
         this.getCity()
     })
  },
  methods:{
    //定义方法
      getCity(){
            let point = new BMap.Point(this.center.lng, this.center.lat)
            let map = new BMap.Map('BaiduMapLocation')
                map.centerAndZoom(point, 10)
                map.enableScrollWheelZoom(true)
                map.enableDoubleClickZoom(true)
            var geolocation = new BMap.Geolocation()
                    geolocation.getCurrentPosition((r) => {
                            var str =JSON.stringify(r.address.province+','+r.address.city);
                            this.location = str
                            //$('#BaiduMapLocation').attr('title',str);
                        // if(r.accuracy=='null'){
                        //     new BMap.Geocoder().getLocation(new BMap.Point(point,data=>{
                        //        console.log('data',data)
                        //     if (data.addressComponents) {
                        //          const result = data.addressComponents
                        //          const location = {
                        //           creditLongitude: r.point.lat, // 经度
                        //           creditLatitude: r.point.lng, // 纬度
                        //           creditProvince: result.province || '', // 省
                        //           creditCity: result.city || '', // 市
                        //           creditArea: result.district || '', // 区
                        //           creditStreet: (result.street || '') + (result.streetNumber || '') // 街道
                        //        }
                        //           console.log('location',location)
                        //           this.location = location
                        //     }
                        //   }))
                        // }
                        if (r.point) {
                          this.center.lng = r.longitude
                          this.center.lat = r.latitude
                          let markers = new BMap.Marker(r.point)
                          let locationPoints = new BMap.Marker(this.location)
                          map.addOverlay(markers,locationPoints)
                          map.panTo(r.point)
                          map.centerAndZoom(r.point, 16)
                        }
                    }, 
                    {     enableHighAccuracy: true   }
                )    
          },
      }
}
</script>

<style>

</style>
