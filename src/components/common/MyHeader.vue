<template>
    <div>
        <mt-header :title="title">
            <div @click="goback" slot="left">
                <mt-button icon="back">返回</mt-button>
            </div>
        </mt-header>
    </div>
</template>

<script>
export default {
    name:'my-header',
    props:['title'],
    created(){},
    methods:{
        goback(){
            this.$router.go(-1);
        }
    },
    data(){
        return{}
    }
}
</script>

<style scoped>
header{background-color: #f1f1f1;color:black;}
</style>
