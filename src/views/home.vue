<template>
  <div class="hello">
    <h1>{{ getCount }}</h1>
    <button @click="handleCountVal">改变count的值</button>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: 'hello'
    };
  },
  computed: {
    ...mapGetters(['getCount'])
  },
  // 刚进去改路由页面触发，注意此时页面组件还没渲染，不能在这里拿到this对象
  beforeRouteEnter(to, form, next) {
    console.log(to.name, form.name)
    // 如果需要在这里拿到this
    next((vm) => {
      // vm 就是当前页面的this
      // console.log(vm)
    })
  },
  // 要离开路由页面时触发, 用户在离开页面时你需要提醒他
  beforeRouteLeave(to, form, next) {
    const leave = confirm('你确定要离开这里么')
    if(leave) next()
    else next(false) // false 就什么都不做留在当前页面
  },
  methods: {
    handleCountVal() {
      this.SET_COUNT(20);
    },
    ...mapMutations(['SET_COUNT'])
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
