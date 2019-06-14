<template>
  <div id="app">
    <mt-header title="学习了吗？"></mt-header>
    <router-view></router-view>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="item1">
        <img slot="icon" src="./assets/home.png">
        学
      </mt-tab-item>
      <mt-tab-item id="item2">
        <img slot="icon" src="./assets/book.png">
        习
      </mt-tab-item>
      <mt-tab-item id="item3">
        <img slot="icon" src="./assets/list.png">
        了
      </mt-tab-item>
      <mt-tab-item id="item4">
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
  }
}
</script>

<style>

</style>
