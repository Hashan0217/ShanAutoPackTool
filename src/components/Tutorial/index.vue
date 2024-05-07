<template>
    <div class="tutorial-container">
        <div class="text" v-for="item in textList" :key="item.sort">
            <p><span>{{ item.sort }}.</span>{{ item.text }}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
    interface textList {
        text: string;
        sort:number;
    }
    const textList: Array<textList> =[
        {
            text: "项目文件名称等任何配置项不得出现中文字符，否则会导致项目无法正常运行",
            sort: 1
        },
        {
            text: "填写配置项时，严格提示的格式填写，否则会导致项目无法正常运行",
            sort: 2
        },
        {
            text: "打包工具启动时，不要修改项目推送git，避免冲突",
            sort: 3
        }
    ]
</script>

<style lang="scss" scoped>
    .tutorial-container{
        width: 98%;
        height: 100%;
        background-color: white;
        border-radius: 10px;
        padding: 10px;
    }

</style>