<template>
  <div class="o-serve bgcolor">
    <div class="o-serve__topimg"></div>
    <info></info>
    <div class="o-serve__icon gridicon">
      <div>
        <a href="/pages/manage/map/main">
          <span class="iconfont icon-me"></span>
          <p>党建地图</p>
        </a>
      </div>
      <div>
        <a href="/pages/manage/hero/main">
          <span class="iconfont icon-me"></span>
          <p>党员风采</p>
        </a>
      </div>
      <div>
        <a href="/pages/manage/class/main">
          <span class="iconfont icon-me"></span>
          <p>党员微课</p>
        </a>
      </div>
      <div>
        <a href="/pages/manage/money/main">
          <span class="iconfont icon-me"></span>
          <p>党费缴纳</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import info from "../../info.vue";

  export default {
    name: "serve",
    components: { info }
  };
</script>

<style lang="scss" scoped>
  @import "../../../scss/base";

  @include o('serve') {

    @include e('topimg') {
      width: 100%;
      height: 150px;
      background-color: #333333;
    }

  }

  .gridicon {
    div {
      width: 185.5px;
      height: 137px;
    }
  }
</style>
