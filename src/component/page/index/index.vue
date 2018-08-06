<template>
  <div class="o-index">
    <div class="o-index__img"></div>
    <div class="o-index__nav row">
      <span class="o-index__title">党建动态</span>
      <a href="../home/more/main">
        <span>></span>
      </a>
    </div>
    <news></news>
    <news></news>
  </div>
</template>

<script>
  import news from "../../news.vue";

  export default {
    name: "index",
    components: { news }
  };
</script>

<style lang="scss">
  @import "../../../scss/base";

  /*
  * 只支持双层嵌套
  * o:root o-dd
  * e:fist o-dd__ddd
   */

  @include o('index') {
    background: #fff;
    /*顶部图片*/
    @include e('img') {
      width: 100%;
      height: 150px;
      background-color: grey;
    }

    /*全文标题*/
    @include e('nav') {
      padding: 2px 6px;
      background-color: #ff978e;
      @include e('title') {
        line-height: 2;
        padding-left: 6px;
        border-left: 6px solid $color-red;

      }
      a {
        float: right;
      }
    }
  }
</style>
