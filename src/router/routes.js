const Home = resolve => require(['@/views/home'], resolve)
const About = resolve => require(['@/views/about'], resolve)
const Login = resolve => require(['@/views/login'], resolve)
const Detail = resolve => require(['@/views/details'], resolve)
const Layout = resolve => require(['@/views/layout'], resolve)
// 路由匹配规则是从上往下匹配，如果有重复的路由地址那会以最上面的优先
export default [{
  path: '/',
  component: Layout,
  name: 'Layout',
  children: [
    {
      path: 'home',
      component: Home
    },
    {
      path: 'about',
      name: 'about',
      component: About,
      meta: {
        title: '关于'
      }
    }
  ]
}, {
  path: '/detail/:id',
  name: 'detail',
  component: Detail,
  meta: {
    title: '详情'
  }
}, {
  path: '/login',
  name: 'login',
  component: Login,
  meta: {
    title: '登录'
  }
}, /*{
  path: '*',
  redirect: '/home'
}*/]