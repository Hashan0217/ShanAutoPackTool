<template>
    <div class="layout-container">
        <div class="top">
            <Tab></Tab>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts" setup>
 import Tab from "@/components/Tab/index.vue"
</script>

<style lang="scss" scoped>
    .layout-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        
    }

</style>