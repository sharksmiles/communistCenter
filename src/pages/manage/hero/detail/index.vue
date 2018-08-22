<template>
  <div class="o-hero">
    <div style="height: 100vh;overflow: hidden">
      <div class="flexd">
        <div class="o-hero__show">
        <div style="height: 100%;overflow: scroll">
          <div class="o-hero__title">
            <img src="/static/location.png"></img>
            {{page.name}}</div>
     
            <wxParse :content="page.content" @preview="preview" @navigate="navigate"/>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import wxParse from "mpvue-wxparse";

export default {
  components: {
    wxParse
  },
  name: "index",
  data() {
    return {
      userid: "",
      page: {}
    };
  },
  created() {},
  onLoad: function(opt) {
    console.log(opt);
    this.userid = opt.userid;
  },
  onShow: function() {
    let _this = this;
    wx.request({
      url: "https://hanzhengjie.tenqent.com/index.php/Api/Fengcai/xq",
      method: "GET",
      header: {
        "content-type": "application/x-www-form-urlencoded" // 默认值
      },
      data: {
        id: _this.userid
      },
      success: function(res) {
        console.log(res);
        _this.page = res.data.data;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
@import url("~mpvue-wxparse/src/wxParse.css");
@import "../../../../scss/base";

@include o("hero") {
  background: url("https://hanzhengjie.tenqent.com/public/wechat/images/hanzhengjieAPP/heroBg.png");
  background-size: cover;
  overflow: hidden !important;
  height: 100vh;
  @include e("location") {
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
  @include e("block") {
    background-size: 80% 76%;
    background-repeat: no-repeat;
    background-position: center;
    margin: 20px 10px;
    text-align: center;
  }
  @include e("pic") {
    background-color: #eedddd;
    height: 177px;
    image {
      width: 100%;
      height: 100%;
      margin-right: 5px;
    }
  }
  @include e("show") {
    width: 80%;
    border: 3px solid $color-red;
    border-radius: 3px;
    padding: 10px 16px;
    background: rgba(255, 255, 255, 0.8);
  }
  @include e("title") {
    display: flex;
    font-size: 28px;
    letter-spacing: 2px;
    line-height: 1.55;
    margin-bottom: 10px;
    image {
      width: 38px;
      height: 38px;
      margin-right: 10px;
    }
  }
  rich-text {
    font-size: 12px;
    line-height: 1.55;
  }
}

.flexd {
  display: flex;
  height: 66vh;
  margin-top: 28vh;
  justify-content: center;
  justify-items: center !important;
  flex-wrap: wrap;
  overflow-y: scroll;
}
</style>
