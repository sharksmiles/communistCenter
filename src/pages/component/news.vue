<template>
  <div class="o-news flex container">
    <div>收看中共十九大法制专题专座</div>
    <div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "news.vue"
  };
</script>

<style lang="scss" scoped>
  @import "../../scss/base";

  @include o('news') {
    div:last-child {
      width: 130px;
      height: 80px;
      background: grey;
    }
  }
</style>
