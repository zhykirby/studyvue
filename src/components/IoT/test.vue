
<template>
    <div></div>
</template>

<script>
export default {
    created(){
        //获取ID
        let { categoryId } = this.$route.query;
        //发起请求
        this.$axios.get('getimages/'+categoryId).then(res=>{
            //渲染数据
            this.imgs = res.data.message;
        }).cathc(err =>{
            /*eslint no-console: ["error", { allow: ["warn", "error"] }] */
            console.error(err);
        })
    }

}
</script>

<style>

</style>
