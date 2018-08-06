<template>
  <div class="o-hero bgcolor">
    <div>
      <div class="flexd">
        <div class="o-hero__block">
          <div class="o-hero__location">武汉首义路</div>
        </div>
        <div class="o-hero__block">
          <div class="o-hero__location">武汉首义路</div>
        </div>
        <div class="o-hero__block">
          <div class="o-hero__location">武汉首义路</div>
        </div>
        <div class="o-hero__block">
          <div class="o-hero__location">武汉首义路</div>
        </div>
        <div class="o-hero__block">
          <div class="o-hero__location">武汉首义路</div>
        </div>
        <div class="o-hero__block">
          <div class="o-hero__location">武汉首义路</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index"
  };
</script>

<style lang="scss" scoped>

  @import "../../../scss/base";

  @include o('hero') {
    @include e('location') {
      font-size: 15px;
      width: 84%;
      color: #fff;
      margin: 0 auto;
      margin-top: -8px;
      background: #cc0e2e;
      border-radius: 5px;
    }
    @include e('block') {
      width: 140px;
      height: 220px;
      margin: 30px 16px;
      text-align: center;
      background: greenyellow;
    }
  }

  .flexd {
    display: flex;
    justify-content: center;
    justify-items: center !important;
    flex-wrap: wrap;
  }
  .bgcolor{
    padding: 50px 0 50px 0;
  }
</style>
