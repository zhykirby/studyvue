<template>
    <div>
        <my-header :title="title"></my-header>
        <div>
            <ul>
                <li v-for="(course,index) in courses" :key="index">
                    <router-link :to="course.route" class="demo">
                        <img :src="course.picurl" width="100px" height="100px">
                        <div>
                            <span class="title">{{course.title}}</span>
                            <div>
                                <p>浏览次数：考试时间：{{course.time | convertTime('YYYY-MM-DD')}}</p>
                                <p>小标题：</p>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <!--<h3>超声波定位的原理</h3>
        <p>
            超声波定位系统由若干个应答器和一个主测距器组成，主测距器放置在被测物体上，在微机指令信号的作用下向位置固定的应答器发射同频率的无线电信号，应答器在收
            到无线电信号后同时向主测距器发射超声波信号，得到主测距器与各应答器之间的距离，当同时有三个或三个以上不在同一直线上的应答器做出回应时，可以根据相关计
            算确定出被测物体所在的二维坐标系下的位置，但是这类系统需要大量的底层硬件设施投资，成本太高，无法大面积推广。
        </p> -->
    </div>
</template>

<script>
export default {
    name:'Dw',
    data(){
        return{
            title:'校考列表',
            courses:[{
                title:'物联网定位技术',route:{name:'Preview'},picurl:require('../../../static/image/list1.png'),time:'2019.6.24'
            },
            {
                title:'物联网工程规划与设计',route:{name:'User'},picurl:require('../../../static/image/list2.png'),time:'2019.6.27'
            },
            {
                title:'传感器网络及应用',route:{name:'User'},picurl:require('../../../static/image/list3.png'),time:'2019.7.1'
            },
            {
                title:'物联网信息安全',route:{name:'User'},picurl:require('../../../static/image/list4.png'),time:'2019.7.4'
            }
            ]
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
ul{padding: 0;margin: 0;}
li{list-style: none;height: 100px;}
.demo{display: flex;flex-wrap: nowrap;}
.title{height: 50px;line-height: 50px;width: 250px;font-size: 1.3rem;vertical-align: middle;margin: 0;}
p{margin:0;font-size:1rem}
</style>
