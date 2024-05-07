<template>
    <div class="tab-container">
        <div class="logo">
            Shan-AtouTool
        </div>
        <div class="tabs">
            <div class="tab-item" v-for="item in tabsRef"  :key="item.id" @click="changeTab(item.id)">
                <div class="item-title" :class="{'item-active':item.isActive}">
                    {{ item.title }}
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    const router = useRouter();
    interface tabsItem{
        title: string;
        isActive: Boolean;
        readonly id: number;
        readonly path: string;
    }
    const tabsRef = ref<Array<tabsItem>>([
        {
            title: '基础配置',
            isActive: true,
            id: 1,
            path:'/'
        },
        {
            title: '替换内容',
            isActive: false,
            id: 2,
            path:'/replaceModule'
        },
        {
            title: '在线打包',
            isActive: false,
            id: 3,
            path:'/onlinePackage'
        },
        {
            title: '离线打包',
            isActive: false,
            id: 4,
            path:'/offlinePackage'
        },
        {
            title: '关于我们',
            isActive: false,
            id: 5,
            path:'/about'
        }
    ]);

    function changeTab(id: number):void{
        const item =   tabsRef.value[id-1];
        tabsRef.value.forEach(item => {
            item.isActive = false;
        });
        item.isActive = true;
        // 路由跳转
        router.push({
            path: item.path
        });
    }
   
</script>

<style lang="scss" scoped>
    
    .tab-container{
        width: 100%;
        margin: 0;
        padding: 0;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: #ffffff;
        
        // box-shadow: rgb(228, 226, 226) 0 0 10px 0px;
        .logo{
             width: 220px;
             height: 40px;
             line-height: 40px;
             font-size: 28px;
             font-weight: bolder;
             color: #003cff;
            
 
        }
        .tabs{
             height: 50px;
             line-height: 50px;
             text-align: center;
             font-size: 20px;
             font-weight: bold;
             display: flex;
            
            //  justify-content: space-around;
            
                .tab-item{
                    width: 200px;
                    height: 50px;
                    line-height: 50px;
                    text-align: center;
                    font-size: 20px;
                    font-weight: bold;
                    background-color: #6d91f4;
                    border-radius: 10px 0 10px 0px;
                    margin-left: 10px;
                    .item-title{
                        width: 100%;
                        height: 50px;
                        line-height: 50px;
                        text-align: center;
                        font-size: 20px;
                        font-weight: bold;
                        color: #ffffff;
                    
                       
                    }
                    .item-active{
                        background-color: #373434;
                        border-radius: 10px 0 10px 0px;
                        color: #003cff;
                    }
                }
        }

    }

</style>