<template>
    <div class="file-selection-container">
        <div class="title">{{ title }}</div>
        <div class="contant">
            <div class="flies-input">
                <el-input v-model="input" style="width: 98%;" :placeholder="text">
                    <template #append>
                        <el-button :icon="Files" @click="selcetFile(selfType)" />
                    </template>
                </el-input>
            </div>
            <input type="file" @change="fileEvent" ref="fileInput" style="display: none;" webkitdirectory>
        </div>
    </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue'
import { Files } from '@element-plus/icons-vue'
const input = ref('')
const fileInput = ref<HTMLInputElement | null>(null)
// const inputContant = ref<string>('')
defineProps<
    {
        selfType: string,
        title:string,
        text:string
    }
>()


const selcetFile = async (type: string) => {
    if(type === 'file'){
        console.log('选择文件')
        fileInput.value?.click()
        
    }else{
        console.log('选择文件夹')
    }
}

const fileEvent = async (e: Event) => {
    const target = e.target as HTMLInputElement
    const files:FileList|null = target.files
    console.log('target: ' , files);
    
    if(files){
    
        const path = files[0].path.split('\\')
        //  path的最后一项不要 其他的拼接起来
        const filesPath:string = path.slice(0,path.length-1).join('\\')
        input.value =filesPath
    }
}




</script>

<style lang="scss" scoped>
.file-selection-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .title {
        margin-left: 16px;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        color: white;
        // border-bottom: 1px solid #eee;
    }

    .contant {
        margin-top: 10px;
        .flies-input{
            width: 100%;
            height: 40px;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>