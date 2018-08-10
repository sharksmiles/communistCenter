<template>
  <div class="o-index">
    <div class="o-index__img"></div>
    <newstitle :title="'党建动态'"></newstitle>
    <news :pageList="content.pages1"></news>
    <newstitle :title="'市场信息'"></newstitle>
    <news :pageList="content.pages2"></news>
    <newstitle :title="'活动预告'"></newstitle>
    <news :pageList="content.pages3"></news>
  </div>
</template>

<script>
  import news from "../../news.vue";
  import newstitle from "../../newstitle.vue";

  export default {
    name: "index",
    components: { news, newstitle },
    data() {
      return {
        content: {
          pages1: [],
          pages2: [],
          pages3: []
        }
      };
    },
    created() {
      let _this = this;

      wx.request({
        url: "https://hanzhengjie.tenqent.com/index.php/Api/Dangjian/index",
        method: "GET",
        success: res => {
          _this.content.pages1 = res.data.data;
        }
      });

      wx.request({
        url: "https://hanzhengjie.tenqent.com/index.php/Api/Shichang/index",
        method: "GET",
        success: res => {
          _this.content.pages2 = res.data.data;
        }
      });

      wx.request({
        url: "https://hanzhengjie.tenqent.com/index.php/Api/Yugao/index",
        method: "GET",
        success: res => {
          _this.content.pages3 = res.data.data;
        }
      });
    }
  };
</script>

<style lang="scss">
  @import "../../../scss/base";

  /*
   * 只支持双层嵌套
   * o:root o-dd
   * e:fist o-dd__ddd
   */

  @include o('index') {
    background: #fff;
    /*顶部图片*/
    @include e('img') {
      width: 100%;
      height: 150px;
      background-image: url('http://pd37peogt.bkt.clouddn.com/f%281%29.png');
      background-size: cover;
    }
  }
</style>
