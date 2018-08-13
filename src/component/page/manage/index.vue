<template>
  <div class="o-serve bgcolor">
    <div class="o-serve__topimg"></div>
    <info></info>
    <div class="o-serve__icon gridicon">
      <div>
        <a href="/pages/manage/map/main">
          <span class="iconfont icon-map" style="background-color: #fe6e4c"></span>
          <p>党建地图</p>
        </a>
      </div>
      <div>
        <a href="/pages/manage/hero/main">
          <span class="iconfont icon-score" style="background-color: #27b1d8"></span>
          <p>党员风采</p>
        </a>
      </div>
      <div>
        <a href="/pages/manage/class/main">
          <span class="iconfont icon-class" style="background-color: #27d8aa"></span>
          <p>党员微课</p>
        </a>
      </div>
      <div>
        <a href="/pages/manage/money/main">
          <span class="iconfont icon-party" style="background-color: #e71522"></span>
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
      background-image: url("http://pd37peogt.bkt.clouddn.com/b%281%29.png");
      background-size: cover;
    }
  }

  .gridicon {
    div {
      width: 185.5px;
      height: 137px;
      a p {
        font-size: 13px;
        line-height: 3;
      }
    }
  }

  .iconfont {
    padding: 8px !important;
    border-radius: 3px !important;
    color: #ffffff !important;
    background: red;
    font-size: 30px !important;

  }
</style>
