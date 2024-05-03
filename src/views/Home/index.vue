<template>
    <div class="home-container">
        <div class="announcement">
            <Announcement/> 
        </div>
        
        <div class="tutorial">
            <Tutorial/>
        </div>

        <div class="fileSelection">
            <!-- <FileSelection /> -->
        </div>

    </div>
</template>

<script lang="ts" setup>
import Announcement from "@/components/Announcement/index.vue";
import Tutorial from "@/components/Tutorial/index.vue";
// import FileSelection from "@/components/FileSelection/index.vue";
</script>

<style lang="scss" scoped>
    .home-container{

        .tutorial{
            width: 98%;
            margin: 20px auto;
            height: 300px;
        }
    }

</style>