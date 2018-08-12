<template>
  <div class="o-push bgcolor">
    <div class="o-push__main">
      <p>{{nav}}标题</p>
      <input v-model="wishData.title" type="text">
      <p>{{nav}}内容</p>
      <textarea v-model="wishData.content" rows="10" maxlength="1000"></textarea>
      <p>姓名</p>
      <input v-model="wishData.name" type="text">
      <p>联系方式</p>
      <input v-model="wishData.tel" type="number" maxlength="11">
    </div>
    <div class="o-push__button">
      <div @click="postDate(wishData)">提交</div>
    </div>
  </div>
</template>

<script>
  import CONFIG from "../../../utils/config.js";

  export default {
    name: "index",
    data() {
      return {
        baseUrl: "",
        nav: "",
        postUrl: "https://hanzhengjie.tenqent.com/index.php/Api/Qingdan/add",
        listUrl: [{
          label: "need",
          url: "https://hanzhengjie.tenqent.com/index.php/Api/Qingdan/add"
        }, {
          label: "project,resources,wish",
          url: "https://hanzhengjie.tenqent.com/index.php/Api/Qingdan/add"
        }],
        wishData: {
          openid: "",
          title: "",
          name: "",
          tel: "",
          content: "",
          type: ""
        }
      };
    },
    mounted() {
      this.wishData.openid = CONFIG.OpenId;
      switch (this.baseUrl) {
        case "wish":
          this.postUrl = "https://hanzhengjie.tenqent.com/index.php/Api/Qingdan/add";
          this.nav = "心愿";
          break;
        case "need":
          this.wishData.type = 1;
          this.nav = "需求";
          break;
        case "project":
          this.wishData.type = 2;
          this.nav = "项目";
          break;
        case "resources":
          this.wishData.type = 3;
          this.nav = "资源";
          break;
      }
    },
    methods: {
      verifyDate: function() {
        let data = this.wishData;
        if (data.openid && data.title && data.name && data.tel && data.content) {
          return true;
        }
        else {
          wx.showToast({
            icon: "none",
            title: "您有内容未填写"
          });
          return false;
        }
      },
      postDate() {
        let _this = this;
        if (this.verifyDate()) {
          wx.request({
            url: _this.postUrl,
            method: "post",
            header: {
              "content-type": "application/x-www-form-urlencoded" // 默认值
            },
            data: _this.wishData,
            success: function(res) {
              wx.showToast({
                icon: "success",
                title: "提交成功！"
              });
              for (let item in _this.wishData) {
                item == "openid" ? null : _this.wishData[item] = null;
              }
            }
          });
        }
      }
    },
    onLoad: function(opts) {
      this.baseUrl = opts.title;
      console.log(opts.title);
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../scss/base";

  @include o('push') {
    background: #efefef;
    height: 100vh;
    overflow: hidden;
    @include e('main') {
      margin: 0 16px;
      margin-bottom: 20px;
      padding: 30px 0;
      p {
        line-height: 2.5;
        color: grey;
      }
      input, textarea {
        border-radius: 3px;
        background: #fff;
        padding: 6px;
      }
      textarea {
        width: 96%;
        overflow: scroll;
      }
    }
    @include e('button') {
      margin: 0 16px;
      div {
        border-radius: 3px;
        text-align: center;
        line-height: 2.5;
        background: $color-red;
        color: white;
        width: 100%;
      }
    }
  }
</style>

