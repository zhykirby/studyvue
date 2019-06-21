<template>
    <div>
        vue-preview:
        <vue-preview :slides='img1' class="preview"></vue-preview>
        <mt-button size='large' type='danger' :disabled="disabled" plain @click="sendMsg">click</mt-button>
    </div>
    
</template>

<script>
import { setTimeout } from 'timers';
export default {
    name:'Preview',
    data(){
        return{
            disabled:false,
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

        },
        sendMsg(){
            let instance = this.$toast({
                message:'点击成功',
                iconClass:'icon icon-success'
            });
            setTimeout(()=>{
                instance.close();
                this.disabled = true;
            },2000);
            
        }
    }
}
</script>

<style>
.preview{margin:0 auto;}
figure{margin-left:calc(50% - 75px);}
</style>
