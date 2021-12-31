<template>
    <div id="myTable">
      <div v-show="toggleShow">
          <a-table  :columns="columns" :bordered="true"  :data-source="dataInfo">
              <a slot="name" slot-scope="text">{{ text }}</a>
              <span slot="customTitle"><a-icon type="smile-o" /> 姓名</span>
              <span slot="tags" slot-scope="tags">
                  <a-tag v-for="tag in tags" :key="tag"
                      :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
                      {{ tag.toUpperCase() }}
                  </a-tag>
              </span>
              <template slot="operation" slot-scope="text,record">
                  <a @click="addTabveData">新增</a>
                  <a-divider type="vertical" />
                  <a-popconfirm
                      v-if="dataInfo.length"
                      title="Sure to delete?"
                      @confirm="() => deleteTabveData(record.key)"
                     >
                     <a>删除</a>
                  </a-popconfirm>
                  <a-divider type="vertical" />
                  <a @click="updateTabveData(record)" class="ant-dropdown-link">修改</a>
                </template>
            </a-table>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' },
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' },   
  }, 
  {
    title: '操作',
    key: 'operation',
    scopedSlots: { customRender: 'operation' },// operation 插槽的名字
  },
];

export default {
  name:'myTable',
  data() {
    return {
      columns,  // 表头
      dataInfo:[],  // 列表的数据
    };
  },
  computed:{
     toggleShow(){
	       return this.$route.meta.show
	    }
  },
  mounted(){
    this.initInfo()
  },
  created(){
    
  },
  methods:{
    initInfo(){
       this.$axios.post('/userInfo')
        .then(res=>{
            console.log('res',res)
            this.dataInfo = res.data.data
        })
        .catch(err=>{
        })
    },
     deleteTabveData(key){
       const dataInfo = [...this.dataInfo];
       this.dataInfo = dataInfo.filter(item => item.key !== key);
    },
    addTabveData(){
        this.$router.push({name:'addtable'})
    },
    updateTabveData(record){
        this.$router.push({name:'addtable',query:record})
        console.log('record',record)
    }
  },
};
</script>