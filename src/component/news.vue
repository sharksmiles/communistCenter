<template>
  <div>
    <a v-for="(item,index) in itemList" :key="index" :href="'/pages/home/detail/main?id='+item.id+'&type=b'">
      <div class="o-news flex container">
        <div>
          {{item.post_title}}
        </div>
        <div class="o-news__img">
          <img :src="item.image"/>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: "news.vue",
    props: ["itemList"]
  };
</script>

<style lang="scss" scoped>
  @import "../scss/base";

  @include o('news') {
    border-bottom: 1px solid #eeeeee;
    div:first-child {
      font-size: 16px;
      width: 64vw;
    }
    @include e('img') {
      width: 36vw;
      height: 80px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
