<template>
  <div>
    当前的ID是：{{$route.params.id}}
  </div>
</template>

<script>
  export default {
    beforeRouteUpdate(to, form, next) {
      console.log('当前组件更新了========')
      next()
    }
  }
</script>

<style scoped>

</style>