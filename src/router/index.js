import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})


/**
 *  导航守卫在进入路由之前,在此可以做登录校验，是否有携带token
 *   to: 是即将要去到的路由对象信息
 *   form: 是当前所在的路由对象信息
 *   next 执行要跳到哪一个路由
 */
const USER_TOKEN = true
router.beforeEach((to, form, next) => {
  /* console.log(to)
  console.info('tag', form)
  return next(); */
  if(to.meta && to.meta.title) {
    window.document.title = to.meta.title
  }
  next()
  /*if(to.name !== 'login') {
    if(USER_TOKEN) next()
    else next({name: 'login'})
  }else{
    if(USER_TOKEN) next({name: 'home'})
    else next()
  }*/
});
// 进入路由页面后触发, 一般在路由进去时设置loading，在进入之后设置为false
router.afterEach((to, form) => {
  // loading = false
 console.log(to, form)
});

// 完整的路由过程
/*
  1. 导航被触发
  2. 在失活的组件（即将要离开的页面组件）里面调用了离开守卫 beforeRouteLeave
  3. 调用全局的前置守卫 beforeEach
  4. 在重用的组件里调用 beforeRouteUpdate
  5. 调用路由独享的守卫 beforeEach
  6. 解析异步路由组件
  7. 在被激活的组件（即将进入的页面组件）里调用beforeRouteEnter
  8. 调用全局的解析守卫 beforeResolve
  9. 导航被确认
  10. 调用全局的后置守卫 afterEach
  11. 触发DOM更新
  12. 用创建好的实例调用beforeRouteEnter守卫里 next的回调函数
*/

export default router