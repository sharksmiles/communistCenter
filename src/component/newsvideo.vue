<template>
  <div>
    <div class="o-news flex container" v-for="(item,index) in videoList" :key="index">
      <div>{{item.post_title}}
      </div>
      <div>
       <div :style="'background-image:url('+item.image+')'"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "news.vue",
    props: ['videoList']
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
      div {
        background-position:center ;
        background-size: 100% auto;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
