<template>
  <div class="bgcolor">
    <div class="flex">
      <span class="active">党建动态</span>
      <span>市场信息</span>
      <span>活动预告</span>
    </div>
    <news></news>
  </div>
</template>

<script>
  import news from '../../../component/news.vue'

  export default {
    name: "index",
    components:{news}
  };
</script>

<style lang="scss" scoped>
  @import "../../../scss/base";

  .flex {
    line-height: 3.6;
    span {
      width: 30%;
      text-align: center;
    }
  }

  .active {
    border-bottom: 2px solid darkred;
    color: darkred;
  }
</style>
