<template>
    <div>
        <my-header :title="title"></my-header>
        <h3>超声波定位的原理</h3>
        <p>
            超声波定位系统由若干个应答器和一个主测距器组成，主测距器放置在被测物体上，在微机指令信号的作用下向位置固定的应答器发射同频率的无线电信号，应答器在收
            到无线电信号后同时向主测距器发射超声波信号，得到主测距器与各应答器之间的距离，当同时有三个或三个以上不在同一直线上的应答器做出回应时，可以根据相关计
            算确定出被测物体所在的二维坐标系下的位置，但是这类系统需要大量的底层硬件设施投资，成本太高，无法大面积推广。
        </p>
    </div>
</template>

<script>
export default {
    name:'Dw',
    data(){
        return{
            title:'无线定位系统'
        }
    },
    methods:{
        goback(){
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>

</style>
