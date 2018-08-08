<template>
  <div class="o-news flex container">
    <div>收看《中共十九大精神的法制解读》专题专座</div>
    <div></div>
  </div>
</template>

<script>
  export default {
    name: "news.vue"
  };
</script>

<style lang="scss" scoped>
  @import "../scss/base";

  @include o('news') {
    border-bottom: 1px solid #eeeeee;
    div:first-child {
      font-size: 16px;
    }
    div:last-child {
      width: 180px;
      height: 70px;
      background-image: url("http://pd37peogt.bkt.clouddn.com/a%281%29.png");
      background-size: cover;
    }
  }
</style>
