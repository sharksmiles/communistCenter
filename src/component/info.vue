<template>
  <div class="flex info">
    <div class="avator">
    </div>
    <span class="content">蔡豪杰 | 党员</span>
    <div class="right"> ></div>
  </div>
</template>

<script>
  export default {
    name: "info.vue"
  };
</script>

<style lang="scss" scoped>
  @import "../scss/base";

  .info {
    margin: 12px 10px;
    .avator {
      width: 65px;
      height: 65px;
      text-align: left;
      margin-top: -32px;
      background-image: url("http://pd37peogt.bkt.clouddn.com/avator.jpg");
      background-size: cover;
      border-radius: 50%;

    }
    .content {
      font-size: 16px;
      width: 70%;
      text-align: left;
    }
    .right {
      font-size: 16px;
    }
  }

</style>
