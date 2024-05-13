<template>
    <div class="home-container">
        <div class="announcement">
            <Announcement/> 
        </div>
        
        <div class="tutorial">
            <Tutorial/>
        </div>

        <div class="fileSelection">
            <FileSelection selfType="file"  title="项目文件夹" text="请选择项目文件夹"/>
        </div>

    </div>
</template>

<script lang="ts" setup>
import Announcement from "@/components/Announcement/index.vue";
import Tutorial from "@/components/Tutorial/index.vue";
import FileSelection from "@/components/FileSelection/index.vue";

</script>

<style lang="scss" scoped>
    .home-container{

        .tutorial{
            width: 98%;
            margin: 20px auto;
            height: 300px;
        }

        .fileSelection{
            margin-top: 50px;
     
        }
    }

</style>