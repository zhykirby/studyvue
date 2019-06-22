<template>
  <div id="app">
    <mt-header title="学习了吗？"></mt-header>
    <div class="to-fixed">
      <transition name='fade' mode='out-in'>
        <router-view></router-view>
      </transition>
      
    </div>
    <mt-tabbar class="fixed" v-model="selected">
      <mt-tab-item id="Home">
        <img slot="icon" src="./assets/home.png">
        学
      </mt-tab-item>
      <mt-tab-item id="Book">
        <img slot="icon" src="./assets/book.png">
        习
      </mt-tab-item>
      <mt-tab-item id="List">
        <img slot="icon" src="./assets/list.png">
        了
      </mt-tab-item>
      <mt-tab-item id="User">
        <img slot="icon" src="./assets/user.png">
        吗
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      selected:''
    }
  },
  watch:{
    selected:function(newV){
      this.$router.push({
        name:newV     
      })
    }
  }
}
</script>

<style scoped>
.fade-enter-active,.fade-leave-active{
  transition: opacity .5s;
}
.fade-enter,.fade-leave-to{
  opacity: 0;
}
header{width: 100vw;z-index: 999;position: fixed;}
.fixed{position: fixed;}
.to-fixed{padding-top:40px;}
</style>
