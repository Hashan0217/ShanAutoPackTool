<template>
    <div class="announ-cement-container">
        <div class="box">
            <div class="tile">公告：</div>
            <div class="text">欢迎使用Shan-AutoTool自动化打包工具，请阅读基础配置页面的使用教程~</div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
    .announ-cement-container{
        width: 100%;
        height: 30px;
        margin-top: 10px;
        background-color: #3487b4;
        color: white;
        .box{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
           .tile{
               width: 60px;
               height: 30px;
               line-height: 30px;
               background-color: #f1c40f;
               text-align: center;
           }
           .text{
            width: 100%;
            height: 100%;
            margin-left: 10px;
            line-height: 30px;
           }
        }
    }

</style>