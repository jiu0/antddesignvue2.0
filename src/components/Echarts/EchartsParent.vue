<template>
    <div id="EchartsParent">
        <EchartsChild :devicePressure="pressure"/>
        {{ getresturantName }}
        <button @click="modifyAName(msg)">echarts图表数据</button>
    </div>
</template>

<script>
import EchartsChild from '@/components/Echarts/EchartsChild'
import {mapActions, mapGetters,mapMutations} from 'vuex'
export default {
    name: 'EchartsParent',
    components:{
        EchartsChild
    },
    data () {
        return {
          pressure:10,
          msg:'echarts图表数据'
        }
    },
    mounted(){
        setInterval(()=>{
            var arr = this.creatData();
            //console.log('value',arr[0].value)
            this.pressure = arr[0].value
            //console.log('pressure',this.pressure)
        },4000)
    },
    computed:{
        ...mapGetters(['getresturantName'])
    },
    methods:{
         // 同步
        // ...mapMutations(
        //   ['modifyMutAName']
        // ),
        ...mapActions( // 语法糖
              ['modifyAName'] // 相当于this.$store.dispatch('modifyName'),提交这个方法
        ),
        creatData() {
            var data = [];
            var val = Math.random() * 10;
            val = val.toFixed(1);
            data.push({
               value: val * 10
            });
            //console.log('data',data)
            //this.pressure = data[0].value
            return data;
        }  
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
