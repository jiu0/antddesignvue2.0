<template>
  <div id="pieId2" style="height:340px;"></div>
</template>
<script>
export default{
  name:'pieId2',
  data(){
    return{
     // pieGetData:[], // 饼图的数据
    }
  },
  mounted(){
    this.$nextTick(function(){
       this.drawPie2()
    })
  },
  created(){
  
  },
  methods:{
        drawPie2(){
            let myChart = this.$echarts.init(document.getElementById('pieId2'))
            this.$axios.post('/pieData').then(res=>{
                myChart.setOption({
                    title:{ 
                        text: '在Vue中使用echarts2',
                        x:'center',//x轴方向对齐方式
                        // textStyle: {
                        //     color: '#000',
                        //     fontSize: 14,
                        //     fontWeight: 500,
                        // },
                    },
                    color: ['red', 'blue', 'green', 'pink', 'black'],
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c}元 ({d}%)", //模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比
                        textStyle : {
                            fontSize : 16,
                        },
                        //formatter(){}
                    },
                    legend: {
                        orient: 'vertical',
                        bottom: 'bottom',
                        data: ['事例一','事例二','事例三','事例四','事例五'], // 可以点击图例
                        //itemWidth: 30,  //图例标记的图形宽度
                        // itemHeight: 18,  //图例标记的图形高度
                        // itemGap: 30,  //图例每项之间的间隔
                        // formatter: function( name ) {
                        //     return '{a|' + name + '}';
                        // },
                    },
                    series:[
                        {
                           // name: '访问来源',
                            type: 'pie',
                            radius: ['50%', '70%'], // 内圆环  外圆环
                            center: ['50%', '50%'],
                            data:res.data.data,
                            //roseType : 'radius',  //是否展示成南丁格尔图：radius 半径模式；area 面积模式
                            //hoverAnimation:true, //鼠标经过是否放大
                            label: {
                                show: false,
                                position: 'center',
                                emphasis: {
                                show: true
                                }
                            },
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                });
            })
            .catch(err=>{
                console.log('err',err)
            })
       },
   }
}
</script>
