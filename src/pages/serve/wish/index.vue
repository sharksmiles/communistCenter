<template>
  <div class="o-wish bgcolor">
    <div class="flex o-wish__topBar">
      <div>微心愿：0条</div>
      <a href="/pages/serve/wish/mywish/main">
        <button>
          我的发布
        </button>
      </a>
    </div>
    <div style="height: 150px;background: green"></div>
    <div class="flex o-wish__topBar">
      <span class="iconfont icon-me"></span>
      <div style="width: 75%">微心愿</div>
      <a href="/pages/serve/wish/push/main">
        <button>
          发布
        </button>
      </a>
    </div>

    <wishcard></wishcard>

  </div>
</template>

<script>
  import wishcard from '../../../component/wishcard.vue'
  export default {
    name: "index",
    components:{wishcard}
  };

</script>

<style lang="scss" scoped>
  @import "../../../scss/base";

  @include o('wish') {
    @include e('topBar') {
      padding: 6px 12px;
      div ,.iconfont {
        line-height: 30px;
      }
      button {
        font-size: 14px
      }
    }
  }
</style>


