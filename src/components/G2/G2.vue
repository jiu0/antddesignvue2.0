<template>
  <div id="c1"></div>
</template>
<script>
import * as G2 from '@antv/g2';
export default{
  name:'pieId',
  data(){
    return{
     
    }
  },
  mounted(){
    this.$nextTick(function(){
        this.drawG2()
    })
  },
  created(){
    
  },
  methods:{
     // 绘制G2条形图
     drawG2(){
        this.$axios.post('/g2LineData').then(res=>{
          const data = res.data.data;
          const chart = new G2.Chart({
              container: 'c1',
              width: 466,
              height: 300,
            
          });
          // chart.axis('xField', {
          //    title: '这里设置标题的别名'
          // });
          // chart.axis('xField', {
          //   title: {
          //   } // 不展示 xField 对应坐标轴的标题
          // });
          // chart.axis('xField', {
          //     line: {
          //         lineWidth: 2, // 设置线的宽度
          //         stroke: 'red', // 设置线的颜色
          //         lineDash: [ 3, 3 ] // 设置虚线样式
          //     }
          // });
          // chart.axis('yField', {
          //     label: {
          //         textStyle: {
          //         title:'uuuuuu',
          //         textAlign: 'center', // 文本对齐方向，可取值为： start middle end
          //         fill: '#404040', // 文本的颜色
          //         fontSize: '18', // 文本大小
          //         fontWeight: 'bold', // 文本粗细
          //         rotate: 30, 
          //         textBaseline: 'top' // 文本基准线，可取 top middle bottom，默认为middle
          //         } 
          //     }
          // });
          chart.source(data); //chart.source(data);
          chart.interval()
          .position('item*name')
          .color('item')
          // .label('item', {
          //     textStyle: {
          //             textAlign: 'left',
          //             fontSize: 16,
          //             // shadowBlur: 2,
          //             // shadowColor: 'rgba(0, 0, 0, .45)'
          //         }
          // })
          .size('item', [50, 50]);  // color 给每个条形图增加颜色
          chart.render();
        })
        .catch(err=>{
            console.log('err',err)
        })
     }  
   }
}
</script>
