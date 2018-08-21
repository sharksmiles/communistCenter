<template>
  <div class="o-wish bgcolor">
    <div class="flex o-wish__topBar">
      <div>微心愿：{{wishList.length}}条</div>
      <a href="/pages/serve/wish/mywish/main">
        <button>
          我的发布
        </button>
      </a>
    </div>
    <div
      style="height: 200px;background-image: url('http://pd37peogt.bkt.clouddn.com/c%281%29.png');background-size: cover"></div>
    <div class="flex o-wish__topBar">
      <span class="iconfont" style="background-image: url('https://hanzhengjie.tenqent.com/public/wechat/images/hanzhengjieAPP/wishLight.png');background-repeat:no-repeat;width: 38px"></span>
      <div style="width: 75%">微心愿</div>
      <a href="/pages/serve/push/main?title=wish">
        <button class="o-wish__button">
          发布心愿
        </button>
      </a>
    </div>

    <wishcard :wishList="wishList"></wishcard>
  </div>
</template>

<script>
  import wishcard from "../../../component/wishcard.vue";

  export default {
    name: "index",
    components: { wishcard },
    data() {
      return {
        wishList: []
      };
    },
    created() {
      wx.request({
        url: "https://hanzhengjie.tenqent.com/index.php/Api/Weixinyuan/index",
        method: "post",
        success: res => {
          this.wishList = res.data.data;
        }
      });
    }
  };

</script>

<style lang="scss" scoped>
  @import "../../../scss/base";

  @include o('wish') {
    padding-bottom: 20px;
    margin-bottom: 50px;
    @include e('topBar') {
      padding: 6px 12px;
      div, .iconfont {
        line-height: 30px;
      }
      button {
        width: 92px;
        font-size: 14px;
      }
      @include e('button'){
        border: none;
        background: $color-red;
        color: #ffffff;
      }
    }
  }
</style>


