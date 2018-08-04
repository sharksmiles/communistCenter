<template>
  <div class="o-footer center">
    <div class="flex">
      <a href="../index/main">
        <div class="iconfont icon-Home"></div>
        <p>新闻首页</p>
      </a>
      <a href="../manage/main">
        <div class="iconfont icon-function"></div>
        <p>党员管理</p>
      </a>
      <a href="../serve/main">
        <div class="iconfont icon-love"></div>
        <p>党员服务</p>
      </a>
      <a href="../center/main">
        <div class="iconfont icon-me"></div>
        <p>个人中心</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "footer"
  };
</script>

<style lang="scss" scoped>
  @import "../scss/base";

  // 底部标题栏
  @include o('footer') {
    left: 0;
    bottom: 0;
    width: 100%;
    position: fixed;
    border-top: 1rpx solid #cfcfcf;
    .flex {
      padding: 12rpx 8rpx;
    }
    .iconfont {
      font-size: 48rpx;
    }
    p {
      font-size: 24rpx;
    }
    .iconfont, p {
      color: $color__grey;
    }
    a:hover *{
      color: darkred;
    }
  }
</style>
