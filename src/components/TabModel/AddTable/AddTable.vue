<template>
    <div id="AddTable">
           <a-form-model ref="ruleForm" :rules="rules" layout="inline" :model="ruleForm" :label-col="labelCol" :wrapper-col="wrapperCol">
              <a-form-model-item label="姓名:" prop="name">
                <a-input v-model="ruleForm.name"  />
             </a-form-model-item>
             <a-form-model-item label="年龄:" prop="age">
                <a-input v-model.number="ruleForm.age" />
             </a-form-model-item>
             <a-form-model-item label="地址:" style="margin-top:3px;" :label-col="{span:4}" :wrapper-col="{span:20}" prop="adress">
                   <a-select v-model="ruleForm.adress" placeholder="上海">
                      >
                      <a-select-option value="shanghai">
                        上海
                      </a-select-option>
                      <a-select-option value="beijing">
                        北京
                      </a-select-option>
                    </a-select>
             </a-form-model-item>
        </a-form-model>   
        <a-button type="primary" @click="submitForm('ruleForm')">
              提交
        </a-button> 
    </div>
</template>

<script>
export default {
  // prop="age" 必输项
  name:'AddTable',
  data() {
    let checkPending;
    let checkAge = (rule, value, callback) => {
      clearTimeout(checkPending);
      if (!value) {
        return callback(new Error('Please input the age'));
      }
      checkPending = setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('Please input digits'));
        } else {
          if (value < 18) {
            callback(new Error('Age must be greater than 18'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    return {
      labelCol: { span: 4 },     // 控制表单左侧字体的宽度
      wrapperCol: { span: 20 }, // 控制表单的宽度
      ruleForm: {
          name: '',
          age: 0,
          adress:undefined
        },
        rules: {
          name: [
             { required: true, message: 'Please input Activity name', trigger: 'blur' },
           ],
         age: [{ validator: checkAge, trigger: 'change' }],
         adress: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],
      },  
    };
  },
  created(){
    let query = this.$route.query;
    console.log('query',query)
    if(query){
       this.ruleForm.name = query.name
       this.ruleForm.age = !isNaN(query.age) ? Number(query.age) : 0
       this.ruleForm.adress = query.adress
    }
  },
  methods:{
     submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            console.log('valid',valid); //true
            this.$router.push({path:'/table'})
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scope>
.ant-select-selection__placeholder, .ant-select-search__field__placeholder{
  position:static;
  line-height:28px;
  margin-top:-2px;
}
.ant-select-selection__rendered{
  width:162px;
  margin-top:4px;
}
.ant-select-selection-selected-value{
  margin-top:-2px;
}



</style>