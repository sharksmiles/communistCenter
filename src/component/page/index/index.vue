<template>
  <div class="o-index">
    <div class="o-index__img">
      <swiper :indicator-dots="indicatorDots"
              :autoplay="autoplay" :interval="interval" :duration="duration">
        <swiper-item v-for="(item,index) in imgUrls" :key="index" class="o-index__image">
          <img class="o-index__image" :src="item">
        </swiper-item>
      </swiper>
    </div>
    <div style="margin-top: -8px">
      <newstitle :title="'党建动态'"></newstitle>
    </div>
    <news :itemList="content.pages1"></news>
    <newstitle :title="'市场信息'"></newstitle>
    <news :itemList="content.pages2"></news>
    <newstitle :title="'活动预告'"></newstitle>
    <news :itemList="content.pages3"></news>
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
        imgUrls: [
          "https://hanzhengjie.tenqent.com/public/wechat/images/hanzhengjieAPP/ddd.jpg",
          "https://hanzhengjie.tenqent.com/public/wechat/images/hanzhengjieAPP/two%402x.png",
          "https://hanzhengjie.tenqent.com/public/wechat/images/hanzhengjieAPP/swiper1-1.png",
          "https://hanzhengjie.tenqent.com/public/wechat/images/hanzhengjieAPP/swiper1-2.png",
          "https://hanzhengjie.tenqent.com/public/wechat/images/hanzhengjieAPP/swiper1-3.png"
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 3000,
        duration: 300,
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
          _this.content.pages1.length > 3 ? _this.content.pages1.length = 3 : "";
        }
      });

      wx.request({
        url: "https://hanzhengjie.tenqent.com/index.php/Api/Shichang/index",
        method: "GET",
        success: res => {
          _this.content.pages2 = res.data.data;
          _this.content.pages2.length > 3 ? _this.content.pages2.length = 3 : "";
        }
      });

      wx.request({
        url: "https://hanzhengjie.tenqent.com/index.php/Api/Yugao/index",
        method: "GET",
        success: res => {
          _this.content.pages3 = res.data.data;
          _this.content.pages3 > 3 ? _this.content.pages3.length = 3 : "";
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

  swiper {
    display: initial;
    height: 190px;
  }

  @include o('index') {
    background: #fff;
    margin-bottom: 80px;
    /*顶部图片*/
    @include e('img') {
      width: 100%;
      height: 190px;
    }
    @include e('image') {
      width: 100%;
      height: 190px;
    }
  }
</style>
