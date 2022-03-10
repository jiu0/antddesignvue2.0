<template>
    <div>
        {{ devicePressure }}
       <div id="EchartsChild" style="height:300px;">
       </div>
    </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: 'EchartsChild',
  props:{
    devicePressure:{
        type:Number,
        required:true,
    }
  },
  data () {
    return {
       // upPressure:this.devicePressure
    }
  },
  mounted(){
    this.drawLine();
  },
  methods:{
        drawLine(){
            // 基于准备好的dom，初始化echarts实例
            let visualOneChart = this.$echarts.init(document.getElementById("EchartsChild"));
            let options = {
                tooltip: {
                    formatter: "{a} <br/>{b} : {c}Pa",
                },
                series: [{
                    name: "压力值",
                    type: "gauge",
                    clockwise: true,
                    detail: {
                        formatter: 0,
                        textStyle: {
                        fontSize: 14,
                            },
                    },
                        data: [{ value: 0, name: "压力值" }],
                        radius: "90%",
                        axisLabel: {// 刻度标签。
                        show: true,
                        distance: -5,
                        color: "blue", 
                        fontSize: 12, 
                        formatter: "{value}", 
                    },
                    axisLine: {// 仪表盘轴线(轮廓线)相关配置。
                        show: true, 
                        lineStyle: {// 仪表盘轴线样式。
                            opacity: 1, 
                            width: 15, 
                            shadowBlur: 10, 
                            color: [[0.2, 'red'], [0.8, 'green'], [1, 'blue']]
                        },
                    },
                    pointer: { // 仪表盘指针。
                        show: true,
                        length: "70%", 
                        width: 4, 
                        color:'green',
                        },
                    }],
                }
                setInterval(()=> { 
                        options.series[0].data[0].value = (Math.random() * 100).toFixed(0) - 0; 
                         // 绘制图表
                        visualOneChart.setOption(options, true); 
                },2000);
         },
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
