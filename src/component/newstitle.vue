<template>
  <a :href="'/pages/home/more/main?title='+title">
    <div class="news-title row">
    <span class="news-title__nav">
      {{title}}
    </span>
      <span class="iconfont icon-right" style="line-height: 2"></span>
    </div>
  </a>
</template>

<script>
  export default {
    name: "newstitle",
    props: ["title", "url"]
  };
</script>

<style lang="scss" scoped>
  @import "../scss/base";

  /*全文标题*/
  .news-title {
    padding: 2px 6px;
    background-image: url("https://hanzhengjie.tenqent.com/public/wechat/images/hanzhengjieAPP/indexNav.png");
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
