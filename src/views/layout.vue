<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
        <Sider breakpoint="md" collapsible v-model="collapsed" hide-trigger>
          <sideMenu :collapsed="collapsed" />
        </Sider>
        <Layout>
            <Header class="layout-header">
              <Icon @click.native="handleClick" :class="collapsedMenu" type="md-menu" size="32" />
            </Header>
            <Content class="layout-content">
              <Card shadow class="page-card">
                <router-view />
              </Card>
            </Content>
        </Layout>
    </Layout>
  </div>
</template>
<script type="text/javascript">
  import sideMenu from '_c/side-menu/side-menu.vue'
  export default {
    name: 'layout',
    components: {
      sideMenu
    },
    data() {
      return {
        collapsed: false
      }
    },
    computed: {
      collapsedMenu () {
        return [
          'trigger-icon',
          this.collapsed ? 'rotate' : ''
        ];
      }
    },
    methods: {
      handleClick() {
        this.collapsed = !this.collapsed;
      }
    }
  }
</script>
<style type="text/css" lang="less">
  .layout-wrapper, .layout-outer {
    height: 100%;
    .layout-header {
      background: #fff;
      box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
      padding-left: 23px;
      .trigger-icon {
        cursor: pointer;
        transition: all 0.3s ease;
        &.rotate{
          transform: rotateZ(-90deg);
          transition: all 0.3s ease;
        }
      }
    }
    .layout-content {
      padding: 10px;
      .page-card {
        min-height: ~"calc(100vh - 84px)";
      }
    }
  }
</style>