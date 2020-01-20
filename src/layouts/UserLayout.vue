<template>
  <div
    class="ant-row-flex ant-row-flex-center ant-row-flex-middle"
    :class="$style.login"
  >
    <div :class="$style.content">
      <div :class="$style.heading">
        <a-icon type="dingding" :class="$style.icon" />
        <h5 :class="$style.title">
          {{ pathname === "/signup" ? "Sign up" : "Sign in" }}
        </h5>
        <p :class="$style.norm">get started with our service</p>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "UserLayout",
  components: {},
  data() {
    return {
      pathname: this.$router.history.current.path
    };
  },
  created() {}
};
</script>

<style lang="less" module>
.login {
  height: 100vh;
  .content {
    min-width: 350px;
    max-width: 350px;
  }
}
.heading {
  padding-bottom: 10px;
  .icon {
    font-size: 40px;
    color: #007bff;
  }
  .title {
    font-size: 18px;
    line-height: 18px;
    margin-top: 10px;
  }
  .norm {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.45);
  }
}
</style>
