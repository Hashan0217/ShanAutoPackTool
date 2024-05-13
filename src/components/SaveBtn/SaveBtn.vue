<template>
    <div class="save-btn-container">
        <div class="btn">{{ title  }}</div>
    </div>
</template>

<script lang="ts" setup>
    import { title } from "process";
import {toRefs} from "vue";
    
  const props =  defineProps({
        title: {
            type: String,
            required: true
        },
        name:{
            type: String,
            required: true
        },
        data:{
            type: Object,
            
        }
    })

const { name , data } =toRefs(props)


const save = () => {

}



</script>

<style lang="scss" scoped>
.save-btn-container{
    width: 100%;
    height: 100%;
    .btn{
        width: 100%;
        height: 100%;
        background-color: #003cff;
    }
}

</style>