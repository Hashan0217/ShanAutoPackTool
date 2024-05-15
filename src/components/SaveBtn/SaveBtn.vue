<template>
    <div v-loading.fullscreen.lock="fullscreenLoading" class="save-btn-container" @click="write(name,data)">
        <div class="btn">{{ title }}</div>
    </div>
 
</template>

<script lang="ts" setup>
import { ref } from "vue"

import { toRefs } from "vue";
import { writeFun } from "@/utils/saveProjecaktConfig.ts"
import { ElMessage } from 'element-plus'
const props = defineProps({
    title: {
        type: String,

    },
    name: {
        type: String,
    },
    data: {
        type: Object,

    }
})

const { name, data } = toRefs(props)

const fullscreenLoading = ref(false)

const text =ref('')

const write = async (name:any,data:any) => {
   
    
    if(name.length === 0 || data.length === 0) {
        text.value = '配置文件内容'
        ElMessage.error(text.value)
        return
    }
    fullscreenLoading.value = true
    await writeFun( name, data, window)
    fullscreenLoading.value = false
}



</script>

<style lang="scss" scoped>
.save-btn-container {
    width: 100%;
    height: 100%;

    .btn {
        width: 100%;
        height: 100%;
        background-color: #075ec0;
        text-align: center;
        border-radius: 8px;
        text-align: center;
      
        color: #fff;
    }
}
</style>