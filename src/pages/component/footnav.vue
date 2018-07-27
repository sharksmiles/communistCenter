<template>
  <div class="o-footer center">
    <div class="flex">
      <div>
        <div class="iconfont icon-me"></div>
        <p>新闻首页</p>
      </div>
      <div>
        <div class="iconfont icon-me"></div>
        <p>党员管理</p>
      </div>
      <div>
        <div class="iconfont icon-me"></div>
        <p>党员服务</p>
      </div>
      <div>
        <div class="iconfont icon-me"></div>
        <p>个人中心</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "footer"
  };
</script>

<style lang="scss" scoped>
  @import "../../scss/base";

  // 底部标题栏
  @include o('footer') {
    left: 0;
    bottom: 0;
    width: 100%;
    position: fixed;
    border-top: 1px solid #cfcfcf;
    .flex {
      padding: 12px 6px;
    }
    .iconfont {
      font-size: 24px;
    }
    p {
      font-size: 12px;
    }
    .iconfont, p {
      color: $color__grey;
    }
  }
</style>
