<template>
   <div>
     <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 18 }" @submit="handleSubmit">
         <a-row>
            <a-col :xs="{ span: 8, offset: 1 }" :lg="{ span: 9, offset: 2 }">
                <a-form-item label="地区:">
                   <a-cascader  v-decorator="[
                        'residence',
                            {
                                initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                                rules: [
                                { type: 'array', required: true, message: 'Please select your habitual residence!' },
                                ],
                            },
                        ]"
                   :options="options" placeholder="Please select" @change="onChange" />
               </a-form-item>
            </a-col>
            <a-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 9, offset: 1 }">
               <a-form-item label="明天:">
                   <a-range-picker
                             
                            :disabled-date="disabledDate"
                            :disabled-time="disabledRangeTime"
                            :show-time="{
                                hideDisabledOptions: true,
                                defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
                            }"
                            format="YYYY-MM-DD HH:mm:ss"
                   /> 
               </a-form-item>
            </a-col>
            <a-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 9, offset: 2 }">
               <a-form-item label="月份:">
                   <a-range-picker
                      :ranges="{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }"
                      @change="onChangeRangPicker"
                  />
               </a-form-item>
            </a-col>
            <a-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 9, offset: 1 }">
               <a-form-item label="小时数数:">
                   <a-range-picker
                     v-decorator="['range-time-picker', rangeConfig]"
                    :ranges="{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }"
                    show-time
                    format="YYYY/MM/DD HH:mm:ss"
                    @change="onChangeRangPicker"
                    />  
               </a-form-item>
            </a-col>
            <a-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 9, offset: 2 }">
                <a-form-item label="多选">
                    <a-select :allowClear="true"
                        v-decorator="[
                            'select-multiple',
                            {
                                rules: [
                                { required: true, message: 'Please select your favourite colors!', type: 'array' },
                                ],
                            },
                        ]"
                        mode="multiple"
                        placeholder="Please select favourite colors"
                        >
                       <a-select-option  v-for="(item,index) in selectedData" :key="index" :value="item.colorVal">
                             {{item.name}}
                       </a-select-option>
                    </a-select>
                </a-form-item>
            </a-col>
            <a-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 9, offset: 1 }">
                <a-form-item label="Upload" extra="longgggggggggggggggggggggggggggggggggg">
                    <a-upload
                        v-decorator="[
                        'upload',
                            {
                                valuePropName: 'fileList',
                                getValueFromEvent: normFile,
                            },
                        ]"
                        name="logo"
                        action="http://localhost:8081"
                        list-type="picture"
                        >
                        <a-button> <a-icon type="upload" /> Click to upload </a-button>
                    </a-upload>
                </a-form-item>
            </a-col>
            <a-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 9, offset: 2 }">
                <a-form-item label="Dragger">
                    <div class="dropbox">
                        <a-upload-dragger
                            v-decorator="[
                                'dragger',
                                {
                                valuePropName: 'fileList',
                                getValueFromEvent: normFile,
                                },
                            ]"
                            name="files"
                            action="http://localhost:8081"
                            >
                            <p class="ant-upload-drag-icon">
                                <a-icon type="inbox" />
                            </p>
                            <p class="ant-upload-text">
                                Click or drag file to this area to upload
                            </p>
                            <p class="ant-upload-hint">
                                Support for a single or bulk upload.
                            </p>
                        </a-upload-dragger>
                    </div>
                 </a-form-item>
            </a-col>   
         </a-row>
         <a-form-item v-bind="tailFormItemLayout" style="text-align:center" :class=" 'btnCenter' ">
                 <a-button type="primary" html-type="submit">
                     submit
                 </a-button>
        </a-form-item>
     </a-form> 
   </div>
</template>
<script>
import moment from 'moment';
export default {
    data() {
        return {
        // 校验时间框的必输
        rangeConfig: {
          rules: [{ type: 'array', required: true, message: 'Please select time!' }],
        },    
        //多选的数据
        selectedData:[
           {name:'红色',colorVal:'red'},
           {name:'蓝色',colorVal:'blue'},
           {name:'黑色',colorVal:'blank'},
        ],     
        // 提交按钮的位置
        tailFormItemLayout: {
                    wrapperCol: {
                    lg:{ 
                        span: 24, 
                        offset: 0 
                    },   
                    xs: {
                        span: 12,
                        offset: 0,
                    },
                    sm: {
                        span: 12,
                        offset: 0,
                    },
               },   
        },
        form: this.$form.createForm(this, { name: 'coordinated' }),    
        dateFormat: 'YYYY/MM/DD',
        monthFormat: 'YYYY/MM',   
        options: [
            {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
                {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                    value: 'xihu',
                    label: 'West Lake',
                    },
                  ],
                },
            ],
            },
            {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
                {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                    value: 'zhonghuamen',
                    label: 'Zhong Hua Men',
                    },
                ],
                },
            ],
            },
          ],
        };
    },
    methods: {
             moment,
             //上传图片
             normFile(e) {
                console.log('Upload event:', e);
                if (Array.isArray(e)) {
                    return e;
                }
                return e && e.fileList;
             },
             //地区值改变触发
             onChange(value) {
                console.log(value);
             },
             //选择月份/小时数
             onChangeRangPicker(dates, dateStrings) {
                console.log('From: ', dates[0], ', to: ', dates[1]);
                console.log('From2: ', dateStrings[0], ', to: ', dateStrings[1]);
             },
             //选择今天以及今天以后的时间 
             range(start, end) {
                const result = [];
                for (let i = start; i < end; i++) {
                    result.push(i);
                }
                return result;
            },
            disabledDate(current) {
                // Can not select days before today and today
                return current && current < moment().endOf('day');
            },
            disabledDateTime() {
                return {
                    disabledHours: () => this.range(0, 24).splice(4, 20),
                    disabledMinutes: () => this.range(30, 60),
                    disabledSeconds: () => [55, 56],
                };
            },
            disabledRangeTime(_, type) {
                if (type === 'start') {
                    return {
                    disabledHours: () => this.range(0, 60).splice(4, 20),
                    disabledMinutes: () => this.range(30, 60),
                    disabledSeconds: () => [55, 56],
                    };
                }
                return {
                    disabledHours: () => this.range(0, 60).splice(20, 4),
                    disabledMinutes: () => this.range(0, 31),
                    disabledSeconds: () => [55, 56],
                };
            },
            // 表单提交
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if (!err) {
                    console.log('Received values of form: ', values);
                    }
                });
            },
        },
};
</script>

<style scoped>
.btnCenter{width:100%;}


</style>