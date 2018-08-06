<template>
  <div class="o-serve">
    <div class="o-serve__topimg"></div>
    <div class="o-serve__icon gridicon">
      <div>
        <a href="../../component/page/center/main">
          <span class="iconfont icon-me"></span>
          <p>个人中心</p>
        </a>
      </div>
      <div>
        <a href="../../component/page/center/main">
          <span class="iconfont icon-me"></span>
          <p>个人中心</p>
        </a>
      </div>
      <div>
        <a href="../../component/page/center/main">
          <span class="iconfont icon-me"></span>
          <p>个人中心</p>
        </a>
      </div>
      <div>
        <a href="../../component/page/center/main">
          <span class="iconfont icon-me"></span>
          <p>个人中心</p>
        </a>
      </div>
      <div>
        <a href="../../component/page/center/main">
          <span class="iconfont icon-me"></span>
          <p>个人中心</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'serve'
  }
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
</style>
