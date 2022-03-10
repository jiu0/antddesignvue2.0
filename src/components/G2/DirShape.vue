<template>
    <div id="DirShape" class='dashboard'>
 
    </div>
</template>
 
<script>
    //import * as G2 from '@antv/g2';
    var G2 = require('g2'); // 这里需要用require引入
    console.log('G22222',G2)
    export default {
        //name: 'DirShape',
        data() {
            return {
               
            }
        },
        created() {
        },
        mounted() {
            this.$nextTick(function(){
               this.getScore();
            })
        },
 
        methods:{
            getScore() {
               //获取单个分数或者对象数据传入仪表方法中
               this.drawChart();
               //this.drawChart.getShapePoints()
               //this.drawChart.drawShape()
            },
            //仪表
            drawChart() {
                //var _this = this;
                var Shape = G2.Shape;// 自定义Shape 部分
                console.log('G444444',G2)
                  //debugger
                Shape.registShape('interval','triangle',{
                    getShapePoints(cfg){
                    var x = cfg.x;
                    var y = cfg.y;
                    var y0 = cfg.y0;
                    var width = cfg.size;
                    var arr = [
                        {x: x-width/2, y: y0},
                        {x: x, y: y},
                        {x: x+width/2, y: y0}
                    ]
                      return arr;
                    },
                    drawShape(cfg,group){// 自定义最终绘制
                        //const group = container.addGroup()
                        var points =this.parsePoints(cfg.points);// 将0-1空间的坐标转换为画布坐标
                        var polygon =group.addShape('polygon',{
                            attrs:{
                                points:[
                                    [points[0].x, points[0].y],
                                    [points[1].x, points[1].y],
                                    [points[2].x, points[2].y]
                         ],
                         fill: cfg.color
                        }
                     });
                        console.log('cfg',cfg)
                        console.log('group',group)
                        console.log('polygon',polygon)
                        return polygon;// 将自定义Shape返回
                   }
               });
                const data = [
                        { genre: 'Sports', sold: 20 },
                        { genre: 'Strategy', sold: 30 },
                        { genre: 'Action', sold: 40 },
                        { genre: 'Shooter', sold: 50 },
                        { genre: 'Other', sold: 60 }
                    ] // 创建chart对象
                    const chart = new G2.Chart({
                        container: 'DirShape',
                        width: 300,
                        height: 130,
                        padding: [10, 0, 20, 20]
                    })
                    // 载入数据源
                    chart.data(data)
                    // 图形配置
                    chart
                        .interval()
                        .position('genre*sold')
                        .shape('border-radius')
                        .color('genre * sold', BAR3D_CHART_COLOR_ARR)
                    chart.render() 
            },
        }
    }
</script>
 
<style scoped>
 
</style>
