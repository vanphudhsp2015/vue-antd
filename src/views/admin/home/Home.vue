<template>
  <div>
    home
  </div>
</template>

<script>
export default {
  name: "home",
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
</style>
