<template>
  <div class="flex info">
    <div class="avator">
      <open-data type="userAvatarUrl"></open-data>
    </div>
    <span class="content">
      <open-data type="userNickName"></open-data> | 党员</span>
  </div>
</template>

<script>
  export default {
    name: "info.vue",
    created() {
      wx.getUserInfo({
        success: res => {
          console.log(res);
        }
      });
    }
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
      /*background-image: url("http://pd37peogt.bkt.clouddn.com/avator.jpg");*/
      background-size: cover;
      border-radius: 50%;
      overflow: hidden;
    }
    .content {
      font-size: 16px;
      width: 78%;
      text-align: left;
    }
    .right {
      font-size: 16px;
    }
  }

</style>
