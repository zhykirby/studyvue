<template>
  <div>
    <div class="swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item class="swipe">
          <img src="../../static/image/1.jpeg" class="img">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../static/image/2.jpg" class="img">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../static/image/3.jpg" class="img">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../static/image/4.jpg" class="img">
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <div class="flex">
      <my-ul class="flex">
        <my-li v-for="(module,index) in modules" :key="index">
          <router-link :to="module.route">
            <span :class="module.className"></span>
            <div>{{module.title}}</div>
          </router-link>
        </my-li>
      </my-ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data(){
    return{
      modules:[{
        title:'学习吗？',className:'study-img',route:{name:'Dw'}
      },{
        title:'学个锤子',className:'study-ass',route:{name:'Home'}
      },{
        title:'学到傻了',className:'study-silly',route:{name:'Home'}
      },{
        title:'我不学了',className:'study-shit',route:{name:'Home'}
      },{
        title:'还是得学',className:'study-time',route:{name:'Home'}
      },
      ]
    }
  }
}
</script>

<style scoped>
@import '../../static/css/home.css';
</style>
