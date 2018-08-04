<template>
  <div class="o-serve">
    <div class="o-serve__topimg"></div>
    <div class="o-serve__icon gridicon">
      <div>
        <a href="../center/main">
          <span class="iconfont icon-me"></span>
          <p>个人中心</p>
        </a>
      </div>
      <div>
        <a href="../center/main">
          <span class="iconfont icon-me"></span>
          <p>个人中心</p>
        </a>
      </div>
      <div>
        <a href="../center/main">
          <span class="iconfont icon-me"></span>
          <p>个人中心</p>
        </a>
      </div>
      <div>
        <a href="../center/main">
          <span class="iconfont icon-me"></span>
          <p>个人中心</p>
        </a>
      </div>
      <div>
        <a href="../center/main">
          <span class="iconfont icon-me"></span>
          <p>个人中心</p>
        </a>
      </div>
    </div>
    <footnav></footnav>
  </div>
</template>

<script>
  import footnav from "../../component/footnav";

  export default {
    components: { footnav }
  };
</script>

<style lang="scss" scoped>
  @import "../../scss/base";

  @include o('serve') {

    @include e('topimg') {
      width: 100%;
      height: 150px;
      background-color: #333333;
    }

  }
</style>
