<template>
  <div class="o-center">
    <div class="o-center__navimg">
      <div class="o-center__avator">
      </div>
    </div>
    div.
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

  @include o('center') {
    @include e('navimg') {
      height: 150px;
      background: green;
    }
    @include e('avator') {
      top: 30px;
      width: 80vw;
      height: 242rpx;
      margin: 0 10vw;
      position: absolute;
      border-radius: 10px 10px 0 0 ;
      background-color: #cc0e2e;
    }
  }
</style>
