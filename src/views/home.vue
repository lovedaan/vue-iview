<template>
  <div class="home">
    <Row class="row-line" :gutter="10">
      <Col span="12">11</Col>
      <Col span="12">11</Col>
    </Row>
    <Row class="row-line" :gutter="10">
      <Col :md="6" :sm="12" :xs="24">11</Col>
      <Col :md="6" :sm="12" :xs="24">11</Col>
      <Col :md="6" :sm="12" :xs="24">11</Col>
      <Col :md="6" :sm="12" :xs="24">11</Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      msg: 'hello'
    };
  },
  // 刚进去改路由页面触发，注意此时页面组件还没渲染，不能在这里拿到this对象
  /*beforeRouteEnter(to, form, next) {
    console.log(to.name, form.name)
    // 如果需要在这里拿到this
    next((vm) => {
      // vm 就是当前页面的this
      // console.log(vm)
    })
  },*/
  // 要离开路由页面时触发, 用户在离开页面时你需要提醒他
  /*beforeRouteLeave(to, form, next) {
    const leave = confirm('你确定要离开这里么')
    if(leave) next()
    else next(false) // false 就什么都不做留在当前页面
  },*/
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .home {
    .ivu-col {
      height: 50px;
      background: pink;
      margin-bottom: 10px;
      background-clip: content-box;
    }
  }
</style>
