<template>
  <a-layout :class="$style.layout" >
    <a-layout-header 
      :class="$style.header"      
      breakpoint="lg"
    >
      <a-menu v-model="current" mode="horizontal" :class="$style['menu-horizontal']">
        <a-menu-item key="dingding" :class="$style.logo"> <a-icon type="dingding" :class="$style.icon" />One</a-menu-item>
        <a-menu-item key="calendar">Calendar</a-menu-item>
        <a-menu-item key="social">Social</a-menu-item>
        <a-menu-item key="chat" rel="noopener noreferrer" :class="$style['mr-auto']">Chat</a-menu-item>
        <a-menu-item key="social1"><a-icon type="setting" /></a-menu-item>
        <a-menu-item key="notifi"> 
          <a-badge count="5">
            <a-icon type="bell" :class="$style.icon" />
          </a-badge>
        </a-menu-item>
        <a-menu-item key="user"> 
          <a-dropdown :placement="placement">
            <a class="ant-dropdown-link" href="#">
              <a-avatar size="small" icon="user" />
            </a>
            <a-menu slot="overlay" :class="$style.drowdown">
              <a-menu-item>
                <a href="javascript:;">Setting</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">Profile</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">Notifications</a>
              </a-menu-item>
                 <a-menu-item :class="$style.dot">
                <a href="javascript:;">Help?</a>
              </a-menu-item>
                 <a-menu-item>
                <a href="javascript:;">Signout</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider :class="$style.sidebar">
       <a-menu
      :defaultSelectedKeys="['1']"
      :defaultOpenKeys="['sub1']"
      mode="vertical"
      theme="light"
      :class="$style.menu"
      :inlineCollapsed="collapsed"
    >
      <a-menu-item key="1">
        <a-icon type="pie-chart" />
        <span>Option 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="desktop" />
        <span>Option 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="inbox" />
        <span>Option 3</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
        <a-menu-item key="9">Option 9</a-menu-item>
        <a-menu-item key="10">Option 10</a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="11">Option 11</a-menu-item>
          <a-menu-item key="12">Option 12</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
      </a-layout-sider>
        <a-layout-content>
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
</template>

<script>
export default {
  name: "UserLayout",
  components: {},
  data() {
    return {
      pathname: this.$router.history.current.path,
      current: ['dingding'],
      placement: 'bottomCenter',
      collapsed: false,
    };
  },
  created() {
  }
};
</script>

<style lang="less" module>
.drowdown {
  width: 150px;
  .dot {
    border-top: 1px solid rgba(0,0,0,0.15);
  }
}
.layout {
  min-height: 100vh !important;
  .header {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    background-color: #fff;
    height: 60px;
    line-height: 60px;
    z-index: 9999;
    padding: 0 20px;
    .logo {
      color:#007bff;
      font-weight: bold;
    font-size: 20px;
    }
    .menu-horizontal {
      display: flex;
      border-bottom: unset;
      line-height: 60px;
    }
    .mr-auto {
      margin-right: auto;
    }
    .icon{
      font-size: 20px;
    }
    sup {
      right: 10px;
    }
  }
  .sidebar {
    overflow: auto; 
    height: 100vh; 
    position: fixed; 
    left: 0 ;
    top: 60px;
    .menu{
      height: 100%;
    }
  }
}
</style>
