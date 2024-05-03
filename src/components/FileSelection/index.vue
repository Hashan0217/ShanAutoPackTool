<template>
    <div class="file-selection-container">
        <div class="title">项目文件</div>
        <div class="contant">
            <div class="inputOrtext">
                <!-- <el-input v-model="inputContant"  :placeholder="info.text" /> -->
            </div>
            <div class="btn" :style="{'width':info.btnStyle.width+'px' || 10+'px','height':info.btnStyle.height+'px'|| 10+'px','borderRadius':info.btnStyle.borderRadius,'lineHeight':info.btnStyle.lineHeight}">
                上传文件
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

import { ref  } from 'vue'
 type typeFile = 'file'|'text'
 interface inputInfo  {
    text: string,
    btnText:string,
    btnStyle:{
        width: number,
        height: number,
        borderRadius: number,
        lineHeight: number,
    }
 }
 const inputContant = ref<string>('')
  defineProps<
 {
    type?:typeFile,
    info:inputInfo
 }
 >()
 

 
  
</script>

<style lang="scss" scoped>
    .file-selection-container{
        width: 100%;
        height: 100%;
        display: flex;
        .title{
            width: 100%;
            height: 40px;
            line-height: 40px;
            font-size: 16px;
            color: white;
            border-bottom: 1px solid #eee;
        }
        .btn{
            background-color:#6d91f4 ;
            color: white;
            text-align: center;
           
        }
    }

</style>