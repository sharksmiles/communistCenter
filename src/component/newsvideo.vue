<template>
  <div class="o-news flex container">
    <div>收看《中共十九大精神的法制解读》专题专座</div>
    <div>
      <video src="http://onh46c3oi.bkt.clouddn.com/hd%20-%20Blowing%20In%20The%20Wind%20%E4%B8%AD%E8%8B%B1%E5%AD%97%E5%B9%95.mp4"></video>
    </div>
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
      height: 80px;
      background: grey;
      video{
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
