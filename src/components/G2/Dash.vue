<template>
    <div id="mountNode" class='dashboard'>
 
    </div>
</template>
 
<script>
    //import * as G2 from '@antv/g2';
    var G2 = require('g2'); // 这里需要用require引入
    //var dashG2 = require('@/assets/g2.js');
    console.log('G22222',G2)
    //console.log('g33333',dashG2)
    export default {
        //name: 'mountNode',
        data() {
            return {
                personInfo:{user_score:60},  //数据
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
               this.drawChart(this.personInfo);
            },
            //仪表
            drawChart(personInfo) {
                //var _this = this;
                var Shape = G2.Shape;// 自定义Shape 部分
                console.log('G444444',G2)
                  debugger
                Shape.registShape('point', 'pointer', {
                    //绘制指针，不需要的可以去掉
                    drawShape:function drawShape(cfg, group) {
                        var center = this.parsePoint({ // 获取极坐标系下画布中心点
                            x: 0,
                            y: 0
                        });
                    group.addShape('line', {
                      attrs: {
                        x1: center.x,
                        y1: center.y,
                        x2: cfg.x,
                        y2: cfg.y,
                        stroke: cfg.color,
                        lineWidth: 5,
                        lineCap: 'round'
                      }
                    });
                    console.log('cfg',cfg)
                    console.log('group',group)

                    debugger
                     console.log('center',center)
                    return group.addShape('circle', {
                      attrs: {
                        x: center.x,
                        y: center.y,
                        r: 9.75,
                        stroke: cfg.color,
                        lineWidth: 4.5,
                        fill: '#fff'
                      }
                     })
                    }
                });
                //数据
                var data = [{
                    //value: this.personInfo.user_score
                    value: 6
                }];
                debugger
                //chart初始化
                var chart = new G2.Chart({
                    container: 'mountNode', //标签id
                    //forceFit: true,  // 这个属性不要打开
                    height:360,
                    //padding: [0, 0, 30, 0]
                });
                chart.source(data);
    
                chart.coord('polar', {
                    startAngle: -9 / 8 * Math.PI, //开始角度
                    endAngle: 1 / 8 * Math.PI,  //结束角度
                    radius: 0.75
                });
                //刻度分数值设置
                chart.scale('value', {
                    min: 0,
			        max: 9,
                    ticks: [2.25, 3.75, 5.25, 6.75], //分数值
                    tickInterval: 1,
                    nice: false
                });
                debugger
                chart.axis('1', false);
                chart.axis('value', {
                    zIndex: 2,
                    line: null,
                    //表盘中样式设置
                    label: {
                        offset: -20,
                        formatter: function formatter(val) {
                            if (val === '2.25') {
                                return '差';
                            } else if (val === '3.75') {
                                return '中';
                            } else if (val === '5.25') {
                                return '良';
                            }
                            return '优';
                        },
                        textStyle: {
                            fontSize: 12,
                            fill: '#fff',
                            textAlign: 'center',
                            textBaseline: 'middle'
                        }
                    },
                    subTickCount: 4,
                    //副刻度线的设置
                    subTickLine: {
                        length: -8,
                        stroke: '#fff',
                        strokeOpacity: 1
                    },
                    //刻度线的设置
                    tickLine: {
                        length: -17,
                        stroke: '#fff',
                        strokeOpacity: 1
                    },
                    grid: null
                });
                chart.legend(false);
                chart.point().position('value*1').shape('pointer').color('#1890FF').active(false);
                // 绘制仪表盘刻度线
                chart.guide().line({
                    start: [3, 0.905],
                    end: [3.0035, 0.85],
                    lineStyle: {
                        stroke: '#19AFFA', // 线的颜色
                        lineDash: null, // 虚线的设置
                        lineWidth: 3
                    }
                });
                chart.guide().line({
                    start: [4.5, 0.905],
                    end: [4.5, 0.85],
                    lineStyle: {
                        stroke: '#19AFFA', // 线的颜色
                        lineDash: null, // 虚线的设置
                        lineWidth: 3
                    }
                });

                chart.guide().line({
                    start: [6, 0.905],
                    end: [6.0035, 0.85],
                    lineStyle: {
                        stroke: '#19AFFA', // 线的颜色
                        lineDash: null, // 虚线的设置
                        lineWidth: 3
                    }
                });
                // 绘制仪表盘背景
                chart.guide().arc({
                    zIndex: 0,
                    top: false,
                    start: [0, 0.965],
			        end: [9, 0.965],
                    style: { // 底灰色
                        stroke: '#FEA7AC',
                        lineWidth: 10
                    }
                });
                // 绘制指标
                chart.guide().arc({
                    zIndex: 1,
                    start: [0, 0.965],
			        end: [data[0].value, 0.965],
                    style: {
                        stroke: '#FFEBEC',
                        lineWidth: 10
                    }
                });
                // 绘制指标数字
                // chart.guide().html({
                //     position: ['50%', '80%'],
                //     html:  `${this.isShow(personInfo)}`
                // });
 
                // 绘制指标数字
                chart.guide().html({
                    position: ['50%', '95%'],
                    html: '<div style="width: 300px;text-align: center;">' + '<p style="font-size: 20px; color: #545454;margin: 0;">合格率</p>' + '<p style="font-size: 36px;color: #545454;margin: 0;">' + data[0].value * 10 + '%</p>' + '</div>'
                });
                chart.render();
            },
            //显示的刻度中的一些html元素，如：中间的分数
            // isShow(personInfo){
            //     var html='';
            //     //判断无需理会，直接取其中的一段即可
            //     if(this.show=='home'){
            //         html=
            //            ` <div style="width: 300px;color: #fff;text-align: center;">
            //             <p style="font-size: 12px;">BETA</p>
            //             <p style="font-size: 38px;font-weight: bold;"> ${personInfo.user_score}</p>
            //             <p style="font-size: 15px;" class="abc">分</p>
            //             </div>`;
 
            //     }else {
            //         html= ` <div style="width: 300px;color: #fff;text-align: center;">
            //             <p style="font-size: 19px;font-weight: bold;">分：${personInfo.user_score}</p>
            //             <p style="margin-top:8px;font-size: 19px;font-weight: bold;">度：${personInfo.user_amount}</p>
            //             </div>`;
            //     }
            //     return html;
            // }
        }
 
    }
</script>
 
<style scoped>
 #mountNode{
  width:400px;height:400px;
 }

</style>
