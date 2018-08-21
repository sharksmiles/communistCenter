<template>
  <div
    style="overflow: hidden;height: 100vh;background: white;background-image: url('https://hanzhengjie.tenqent.com/public/wechat/images/hanzhengjieAPP/project.png');background-size: 100% 100%">
    <div class="o-project">
      <div class="o-project__push">
        <a :href="'/pages/serve/push/main?title='+baseUrl">
          我要发布
        </a>
      </div>
      <div class="o-project__block">
        <div class="o-project__section">
          <div>{{page.title}}</div>
          <!--<p class="o-project__author">8月7日 汉正街党委工作部</p>-->
          <p>{{page.content}}</p>
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
        type: null,
        baseUrl: "",
        page: {}
      };
    },
    mounted() {
      let _this = this;
      wx.request({
        url: "https://hanzhengjie.tenqent.com/index.php/Api/Qingdan/index",
        method: "post",
        data: {
          type: _this.type
        },
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        success: res => {
          _this.page = res.data.data;
        }
      });
    },
    onLoad: function(opts) {
      this.baseUrl = opts.title;
      switch (this.baseUrl) {
        case "need":
          this.type = 1;
          break;
        case "project":
          this.type = 2;
          break;
        case "resources":
          this.type = 3;
          break;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../scss/base";

  @include o('project') {
    padding: 20px;
    @include e('block') {
      background-color: #fff;
      margin-top: 25px;
      padding: 20px;
      border: 1px solid #eee;
      border-radius: 5px;
      height: 70vh;
      overflow: scroll;
    }
    @include e('section') {
      margin-bottom: 20px;
      div, p {
        word-break: break-word;
        color: $color-red;
      }
      div {
        color: $color-red;
        font-weight: 800;
        font-size: 17px;
        display: inline;
        line-height: 2;
        border-bottom: 2px solid $color-red;
      }
      p {
        font-size: 14px;
        line-height: 1.55;
      }
    }
    @include e('author') {
      color: #eeeeee !important;
    }

    @include e('push') {
      background: #fff;
      padding: 3px 5px;
      border-radius: 3px;
      color: $color-red;
      position: absolute;
      right: 20px;
      font-size: 15px;
      margin-top: -10px;
    }
  }
</style>
