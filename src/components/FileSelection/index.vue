<template>
    <div class="file-selection-container">
        <div class="title">{{ title }}</div>
        <div class="contant">
            <div class="flies-input">
                <el-input v-model="input" style="width: 98%;" :placeholder="text">
                    <template #append>
                        <el-button :icon="Files" @click="selcetFile()" />
                    </template>
                </el-input>
            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue'
import { Files } from '@element-plus/icons-vue'


const input = ref('')

// const fileInput = ref<HTMLInputElement | null>(null)
// const inputContant = ref<string>('')
defineProps<
    {
        selfType: string,
        title: string,
        text: string
    }
>()


const selcetFile = async () => {
    const folderPath = await window.electronAPI.pickFolder();
    input.value = folderPath;
    console.log('Selected Folder Path:', folderPath);
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

        .flies-input {
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