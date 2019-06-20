<template>
    <div>
        vue-preview:
        <vue-preview :slides='img1' class="preview"></vue-preview>
    </div>
    
</template>

<script>
export default {
    name:'Preview',
    data(){
        return{
            img1:[
                {
                    src:require('../../../static/image/2.jpg'),
                    msrc:require('../../../static/image/2.png'),
                    alt:'mini',
                    title:'缩略图test',
                    w:600,
                    h:372
                }
            ]
        }
    },
    methods:{
        handelClose(){

        }
    }
}
</script>

<style>
.preview{margin:0 auto;}
figure{margin-left:calc(50% - 75px);}
</style>
