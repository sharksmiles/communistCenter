<template>
  <div>
    <div class="o-news flex container" v-for="item in pageList" :key="item.id">
      <div>{{item.post_title}}</div>
      <div :style="'background-image: url('+item.image+')'"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "news.vue",
    props: ["pageList"]
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
