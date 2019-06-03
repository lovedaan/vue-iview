<template>
  <div id="app">
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
html, body, #app {
  height: 100%;
}
body{
  margin: 0;
}
  .active{
    color: red;
    font-size: 40px;
  }
</style>
