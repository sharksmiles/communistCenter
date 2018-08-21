<template>
  <div class="o-hero">
    <div style="height: 100vh;overflow: hidden">
      <div class="flexd">
        <a class="o-hero__block" v-for="(item,index) of heroList" :key="index" :href="'/pages/manage/hero/detail/main?userid='+item.id">

            <img :src="item.image" style="width:80%;height:80%;margin-bottom:-208px;z-index:999;">
            <div class="o-hero__location">{{item.danwei}}</div>
            <div class="o-hero__pic">
              <img src="https://hanzhengjie.tenqent.com/public/wechat/images/hanzhengjieAPP/heroPerson.png" alt="">
            </div>
            <div class="o-hero__name">{{item.name}}</div>
          </a>

        <div class="o-hero__block" style="opacity: 0">
        </div>
        <div class="o-hero__block" style="opacity: 0">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        heroList: []
      };
    },
    created() {
      let _this = this;
      wx.request({
        url: "https://hanzhengjie.tenqent.com/index.php/Api/Fengcai/index",
        method: "GET",
        success: res => {
          _this.heroList = res.data.data;

          console.log(_this.heroList)
        }
      });
    }
  };
</script>

<style lang="scss" scoped>

  @import "../../../scss/base";

  @include o('hero') {
    background: url("https://hanzhengjie.tenqent.com/public/wechat/images/hanzhengjieAPP/heroBg.png");
    background-size: cover;
    overflow: hidden !important;
    height: 100vh;
    @include e('location') {
      font-size: 13px;
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
      background-size: 80% 76%;
      background-repeat: no-repeat;
      background-position: center;
      background-position-y: 31px;
      width: 123px;
      height: 193px;
      margin: 20px 10px;
      text-align: center;
      &:first-child,&:nth-child(2){
        margin-top: 0;
      }
    }
    @include e('pic') {
      background-color: #eedddd;
      height: 177px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    @include e('name') {
      color: $color-red;
    }
  }

  .flexd {
    display: flex;
    height: 75vh;
    margin-top: 25vh;
    justify-content: center;
    justify-items: center !important;
    flex-wrap: wrap;
    overflow-y: scroll;
  }
</style>
