import Mock from 'mockjs'
// 表格数据
Mock.mock("/userInfo","post",{
  data:[
    {
      key: '1',
      name: 'jack',
      age: 32,
      address: '广东省广州市天河区',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'rose',
      age: 42,
      address: '湖南省长沙市芙蓉区',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'hello',
      age: 32,
      address: '湖北省武汉市洪山区',
      tags: ['cool', 'teacher'],
    },
    {
        key: '4',
        name: 'jack',
        age: 32,
        address: '广东省广州市天河区',
        tags: ['nice', 'developer'],
      },
      {
        key: '5',
        name: 'rose',
        age: 42,
        address: '湖南省长沙市芙蓉区',
        tags: ['loser'],
      },
      {
        key: '6',
        name: 'hello',
        age: 32,
        address: '湖北省武汉市洪山区',
        tags: ['cool', 'teacher'],
      },
      {
        key: '7',
        name: 'hello',
        age: 32,
        address: '湖北省武汉市洪山区',
        tags: ['cool', 'teacher'],
      },
      {
        key: '8',  
        name: 'hello',
        age: 32,
        address: '湖北省武汉市洪山区',
        tags: ['cool', 'teacher'],
      },
      {
        key: '9',
        name: 'hello',
        age: 32,
        address: '湖北省武汉市洪山区',
        tags: ['cool', 'teacher'],
      },
      {
        key: '10',  
        name: 'hello',
        age: 32,
        address: '湖北省武汉市洪山区',
        tags: ['cool', 'teacher'],
      },
      {
        key: '11',  
        name: 'hello',
        age: 32,
        address: '湖北省武汉市洪山区',
        tags: ['cool', 'teacher'],
      },
      {
        key: '12',  
        name: 'hello',
        age: 32,
        address: '湖北省武汉市洪山区',
        tags: ['cool', 'teacher'],
      },
      {
        key: '13',  
        name: 'hello',
        age: 32,
        address: '湖北省武汉市洪山区',
        tags: ['cool', 'teacher'],
      },
      {
        key: '14',  
        name: 'hello',
        age: 32,
        address: '湖北省武汉市洪山区',
        tags: ['cool', 'teacher'],
      },
      {
        key: '15',  
        name: 'hello',
        age: 32,
        address: '湖北省武汉市洪山区',
        tags: ['cool', 'teacher'],
      },
      {
        key: '16',  
        name: 'hello',
        age: 32,
        address: '湖北省武汉市洪山区',
        tags: ['cool', 'teacher'],
      },
      {
        key: '17',  
        name: 'hello',
        age: 32,
        address: '湖北省武汉市洪山区',
        tags: ['cool', 'teacher'],
      },
      {
        key: '18',  
        name: 'hello',
        age: 32,
        address: '湖北省武汉市洪山区',
        tags: ['cool', 'teacher'],
      },
  ]
})

Mock.mock("/list","get",{
   data:[
     {name:'jack2',sex:'男'},
     {name:'rose2',sex:'女'},
   ]
 })

 // 饼状图数据
 Mock.mock("/pieData","post",{
    data:[
      {
        name: '事例一',
        value: 40,
        percent: 0.4,
        selected:true
      },
      {
        name: '事例二',
        value: 21,
        percent: 0.21
      },
      {
        name: '事例三',
        value: 17,
        percent: 0.17
      },
      {
        name: '事例四',
        value: 13,
        percent: 0.13
      },
      {
        name: '事例五',
        value: 9,
        percent: 0.09
      }
    ]
})


Mock.mock("/g2LineData","post",{
  data:[
      {item:'aa',name:100},
      {item:'bb',name:200},
      {item:'cc',name:300},
    ]
})