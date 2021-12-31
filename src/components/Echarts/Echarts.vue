<template>
    <div id="myEcharts">
         <a-row :gutter="24" style="margin-bottom:24px;">
            <a-col :xs="24" :sm="24" :md="12" :lg="12">
              <a-card :bordered="false" >
                <Pie></Pie>
              </a-card>
            </a-col>
            <a-col :xs="24" :sm="24" :md="12" :lg="12">
              <a-card :bordered="false" >
                <Pie2></Pie2>
              </a-card>
            </a-col>
         </a-row> 
         <a-row :gutter="24" style="margin-bottom:24px;">
            <a-col :xs="24" :sm="24" :md="12" :lg="12">
              <a-card :bordered="false" >
                 <G2></G2>
              </a-card>
            </a-col>
            <a-col :xs="24" :sm="24" :md="12" :lg="12">
              <a-card :bordered="false" >
                <EchartsParent></EchartsParent>
              </a-card>
            </a-col>
           <!-- <a-col :xs="24" :sm="24" :md="12" :lg="12">
              <a-card :bordered="false" >
                <DashBoard></DashBoard>
              </a-card>
            </a-col>-->
         </a-row> 
          <!--<a-row :gutter="24" style="margin-bottom:24px;">
            <a-col :xs="24" :sm="24" :md="12" :lg="12">
              <a-card :bordered="false" >
                 <Dash></Dash>
              </a-card>
            </a-col>
            <a-col :xs="24" :sm="24" :md="12" :lg="12">
                <a-card :bordered="false" >
                  <DirShape></DirShape>
                </a-card>
              </a-col>
           </a-row>-->
    </div>
</template>

<script>
import Pie from '@/components/Echarts/Pie'
import Pie2 from '@/components/Echarts/Pie2'
import G2 from '@/components/G2/G2'
import EchartsParent from '@/components/Echarts/EchartsParent'
//import DashBoard from '@/components/G2/DashBoard'
//import Dash from '@/components/G2/Dash'
//import DirShape from '@/components/G2/DirShape'
export default {
  name: 'myEcharts',
  components:{
    Pie,
    Pie2,
    G2,
    //DashBoard,
    //Dash,
    //DirShape
    EchartsParent,
  },
  data () {
    return {
  
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
