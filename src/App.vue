<template>
  <div id="app">
    <div class="nav">
      <router-link to="/home">首页</router-link>
      <router-link to="/about">关于</router-link>
    </div>
    <!-- <keep-alive></keep-alive> -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {}
}
</script>

<style lang="less">
  .active{
    color: red;
    font-size: 40px;
  }
</style>
