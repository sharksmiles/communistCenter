<template>
  <div class="bgcolor">
    <div class="o-money">
      <div class="o-money__icon">
        <span class="iconfont icon-love"></span>
      </div>
      <div>
        <button>确认缴纳</button>
      </div>
    </div>

    <div class="o-history">
      <span class="iconfont icon-Home"></span>
      <span>缴纳记录</span>
      <span>></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "money"
  };
</script>

<style lang="scss" scoped>
  @import "../../../scss/base";

  @include o('money') {
    background: #fff;
    text-align: center;
    padding: 0 20px 20px 20px;
    @include e('icon') {
      padding: 46px;
      .iconfont {
        font-size: 97px;
      }
    }
    @include e('nav') {
      color: grey;
    }
    @include e('money') {
      font-size: 50px;
      padding: 20px 0;
    }
    button {
      background: darkred;
      color: white;
      border: none;
    }
  }

  @include o('history') {
    text-align: center;
    padding: 20px;
    margin-top: 20px;
    background: white;
    span:nth-child(2) {
      padding: 0 6px;
    }
  }
</style>
