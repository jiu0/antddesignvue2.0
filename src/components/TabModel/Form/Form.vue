<template>
  <div id="myForm">
      <a-form :form="formaaa" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
        <a-form-item label="Note">
          <a-input
            v-decorator="['note', { rules: [{ required: true, message: 'Please input your note!' }] }]"
          />
        </a-form-item>
        <a-form-item label="Gender">
          <a-select
            v-decorator="[
              'gender',
              { rules: [{ required: true, message: 'Please select your gender!' }] },
            ]"
            placeholder="Select a option and change input text above"
            @change="handleSelectChange"
          >
            <a-select-option value="male">
              male
            </a-select-option>
            <a-select-option value="female">
              female
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit">
            Submit
          </a-button>
        </a-form-item>
      </a-form>
  </div>
</template>
<script>
export default {
  name: 'myForm',
  data () {
    return {
       // formLayout: 'horizontal',
       formaaa: this.$form.createForm(this, { name: 'coordinated' })
    }
  },
  methods:{
    handleSubmit(e) {
        e.preventDefault();
        this.formaaa.validateFields((err, values) => {
          console.log('err',err)
          console.log('values',values) //{note:'Hi, man!', gender: 'male'}
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    },
    handleSelectChange(value) {
        console.log('value2',value); //  male  female
        this.formaaa.setFieldsValue({
          note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`, // 为第1个输入框设置值
        });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
