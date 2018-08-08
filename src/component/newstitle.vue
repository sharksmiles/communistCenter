<template>
  <div class="news-title row">
    <span class="news-title__nav">党建动态</span>
    <a href="/pages/home/more/main">
      <span class="iconfont icon-right" style="line-height: 2"></span>
    </a>
  </div>
</template>

<script>
  export default {
    name: "newstitle"
  };
</script>

<style lang="scss" scoped>
  @import "../scss/base";

  /*全文标题*/
  .news-title {
    padding: 2px 6px;
    background-image: url("http://pd37peogt.bkt.clouddn.com/%E4%BF%A1%E6%81%AF%E5%8F%91%E5%B8%83.png");
    background-size: cover;
    backdrop-filter: blur(10px);
    .news-title__nav {
      line-height: 2;
      padding-left: 6px;
      border-left: 6px solid $color-red;
    }
    a {
      float: right;
    }
  }
</style>
