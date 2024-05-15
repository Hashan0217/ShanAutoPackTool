<template>
    <div class="home-container">
        <div class="announcement">
            <Announcement/> 
        </div>
        
        <div class="tutorial">
            <Tutorial/>
        </div>

        <div class="fileSelection">
            <FileSelection selfType="file"  title="项目文件夹" text="请选择项目文件夹" v-model="path" />
        </div>

        <div class="saveBt">
            <SaveBtn title="保存配置文件" name="test" :data="{
                path: path,
                name: 'projectConfig'
            }"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Announcement from "@/components/Announcement/index.vue";
import Tutorial from "@/components/Tutorial/index.vue";
import FileSelection from "@/components/FileSelection/index.vue";
import SaveBtn from "@/components/SaveBtn/SaveBtn.vue";
import {ref} from "vue"

const path =ref('')


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

        .saveBt{
            width: 80%;
            height: 40px;
            margin: 20px auto;
            line-height: 40px;
        }
    }

</style>