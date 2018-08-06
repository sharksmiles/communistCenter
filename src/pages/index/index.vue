<template>
  <div class="o-index">
    <div class="o-index__img"></div>
    <div class="o-index__title row">
      <span>党建动态</span>
      <span>></span>
    </div>
    <news></news>
    <news></news>
  </div>
</template>

<script>
  import news from "../../component/news"

  export default {
    components: { news }
  };
</script>

<style lang="scss">
  @import "../../scss/base";

  /*
  * 只支持双层嵌套
  * o:root o-dd
  * e:fist o-dd__ddd
   */

  @include o('index') {
    /*顶部图片*/
    @include e('img') {
      width: 100%;
      height: 300rpx;
      background-color: grey;
    }

    /*全文标题*/
    @include e('title') {
      padding: 4rpx 12rpx;
      background-color: #ff978e;
      span {
        line-height: 2;
        &:first-child {
          padding-left: 12rpx;
          border-left: 12rpx solid $color-red;
        }
        &:last-child {
          float: right;
        }
      }
    }
  }
</style>
