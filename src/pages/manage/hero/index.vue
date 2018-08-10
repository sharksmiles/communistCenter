<template>
  <div class="o-hero">
    <div style="height: 100vh;overflow: hidden;margin-bottom: 50px">
    <div class="flexd">
      <div class="o-hero__block">
        <div class="o-hero__location">武汉首义路</div>
        <div class="o-hero__pic">
          <img src="http://pd37peogt.bkt.clouddn.com/%E5%9B%BE%E5%B1%82%204.png" alt="">
        </div>
        <div class="o-hero__name">小习</div>
      </div>
      <div class="o-hero__block">
        <div class="o-hero__location">武汉首义路</div>
        <div class="o-hero__pic">
          <img src="http://pd37peogt.bkt.clouddn.com/%E5%9B%BE%E5%B1%82%204.png" alt="">
        </div>
        <div class="o-hero__name">小习</div>
      </div>
      <div class="o-hero__block">
        <div class="o-hero__location">武汉首义路</div>
        <div class="o-hero__pic">
          <img src="http://pd37peogt.bkt.clouddn.com/%E5%9B%BE%E5%B1%82%204.png" alt="">
        </div>
        <div class="o-hero__name">小习</div>
      </div>
      <div class="o-hero__block">
        <div class="o-hero__location">武汉首义路</div>
        <div class="o-hero__pic">
          <img src="http://pd37peogt.bkt.clouddn.com/%E5%9B%BE%E5%B1%82%204.png" alt="">
        </div>
        <div class="o-hero__name">小习</div>
      </div>
      <div class="o-hero__block">
        <div class="o-hero__location">武汉首义路</div>
        <div class="o-hero__pic">
          <img src="http://pd37peogt.bkt.clouddn.com/%E5%9B%BE%E5%B1%82%204.png" alt="">
        </div>
        <div class="o-hero__name">小习</div>
      </div>
      <div class="o-hero__block">
        <div class="o-hero__location">武汉首义路</div>
        <div class="o-hero__pic">
          <img src="http://pd37peogt.bkt.clouddn.com/%E5%9B%BE%E5%B1%82%204.png" alt="">
        </div>
        <div class="o-hero__name">小习</div>
      </div>
      <div class="o-hero__block">
        <div class="o-hero__location">武汉首义路</div>
        <div class="o-hero__pic">
          <img src="http://pd37peogt.bkt.clouddn.com/%E5%9B%BE%E5%B1%82%204.png" alt="">
        </div>
        <div class="o-hero__name">小习</div>
      </div>
    </div>

    </div>
    <div style="width:100vw;position:absolute;bottom:-50px;opacity:0.9;">
      <img src="http://pd37peogt.bkt.clouddn.com/2.png" style="width: 100%">
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
    background: url("http://pd37peogt.bkt.clouddn.com/%E7%BB%84%204.png");
    background-size: cover;
    overflow: hidden !important;
    height: 100vh;
    @include e('location') {
      font-size: 15px;
      width: 84%;
      color: #fff;
      position: relative;
      top: 17px;
      margin: 0 auto;
      margin-top: -8px;
      background: #cc0e2e;
      border-radius: 5px;
    }
    @include e('block') {
      background-image: url("http://opinion.people.com.cn/mediafile/200908/14/F200908141426363722205192.gif");
      background-size: 86% 80%;
      background-repeat: no-repeat;
      background-position: center;
      background-position-y: 31px;
      width: 123px;
      height: 193px;
      margin: 20px 10px;
      text-align: center;
    }
    @include e('pic') {
      height: 177px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    @include e('name') {
      color: darkred;
    }
  }

  .flexd {
    display: flex;
    height: 100vh;
    justify-content: center;
    justify-items: center !important;
    flex-wrap: wrap;
    overflow-y: scroll;
  }
</style>
