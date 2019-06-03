<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <Menu theme="light" v-if="!collapsed">

      <div v-for="(menu, index) of menuList" :key="index">
        <Submenu v-if="menu.subMenu && menu.subMenu.length" :name="menu.name">
          <template slot="title">
              <Icon :type="menu.icon" />
              {{menu.title}}
          </template>
          <MenuItem v-for="(m, i) of menu.subMenu" :key="i" :name="m.name">{{m.title}}</MenuItem>
        </Submenu>
          <MenuItem v-else :name="menu.name">
            <Icon :type="menu.icon" />
            {{menu.title}}`
          </MenuItem>
      </div>
    </Menu>
    <div v-else></div>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'sideMenu',
    props: {
      collapsed: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        menuList: [
          {
            icon: 'ios-home',
            name: '0',
            title: '首页',
            path: ''
          },
          {
            icon: 'ios-paper',
            name: '1',
            title: '内容管理',
            path: '',
            subMenu: [{
              name: '1-1',
              title: '文章管理',
              path: '',
            },{
              name: '1-2',
              title: '评论管理',
              path: '',
            },{
              name: '1-3',
              title: '举报管理',
              path: '',
            }]
          },
          {
            icon: 'ios-people',
            name: '2',
            title: '用户管理',
            path: '',
            subMenu: [{
              name: '2-1',
              title: '新增用户',
              path: '',
            },{
              name: '2-2',
              title: '活跃用户',
              path: '',
            }]
          },
          {
            icon: 'ios-stats',
            name: '3',
            title: '统计分析',
            path: '',
            subMenu: [{
              name: '3-1',
              title: '新增和启动',
              path: '',
            },{
              name: '3-2',
              title: '活跃分析',
              path: '',
            }]
          }
        ]
      }
    }
  }
</script>
<style type="text/css" lang="less">
  .side-menu-wrapper {
    color: #fff;
    .ivu-menu {
      width: 100% !important;
      background: #515a6e;
      .ivu-menu-item {
        color: #fff;
      }
      .ivu-menu-submenu-title {
        color:#fff !important;
      }
    }
  }
</style>