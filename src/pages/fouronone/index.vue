<template>
  <div>
    <index v-if="com==='index'"></index>
    <manage v-if="com==='manage'"></manage>
    <serve v-if="com==='serve'"></serve>
    <cente v-if="com==='cente'"></cente>
    <div class="o-footer">
      <div class="flex center">
        <div class="o-footer__active" :class="com==='index'?'active':''" @click="changePage('index')">
          <div class="iconfont icon-Home"></div>
          <p>新闻首页</p>
        </div>
        <div class="o-footer__active" :class="com==='manage'?'active':''" @click="changePage('manage')">
          <div class="iconfont icon-function"></div>
          <p>党员管理</p>
        </div>
        <div class="o-footer__active" :class="com==='serve'?'active':''" @click="changePage('serve')">
          <div class="iconfont icon-love"></div>
          <p>党员服务</p>
        </div>
        <div class="o-footer__active" :class="com==='cente'?'active':''" @click="changePage('cente')">
          <div class="iconfont icon-me"></div>
          <p>个人中心</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import index from "../../component/page/index/index";
  import manage from "../../component/page/manage/index";
  import serve from "../../component/page/serve/index";
  import cente from "../../component/page/center/index";

  export default {
    components: { index, manage, serve, cente },
    data() {
      return {
        com: "index",
        arr: [],
        count: 0,
        postData: {
          openid: ""
        }
      };
    },
    created() {
      let _this = this;
      wx.login({
        success: function(res) {
          _this.getOpenId(res.code);
        }
      });
    },
    onShow: function() {
      let _this = this;
      _this.isLogin(_this.postData.openid);
    },
    methods: {
      changePage(value) {
        this.com = value;
      },
      // 获取openid并写入缓存
      getOpenId(userCode) {
        let _this = this;
        wx.request({
          url: "https://hanzhengjie.tenqent.com/Api/GetUserinfo/index",
          method: "get",
          header: {
            "content-type": "application/x-www-form-urlencoded"
          },
          data: {
            code: userCode
          },
          success: function(res) {
            _this.postData.openid = res.data.openid;
            wx.setStorage({
              key: "openid",
              data: res.data.openid
            });
          }
        });
      },
      // 查看用户是否注册
      isLogin(openid) {
        let _this = this;
        wx.request({
          url: "https://hanzhengjie.tenqent.com/index.php/Api/Dangyuan/is_user",
          method: "get",
          data: {
            openid: openid
          },
          success: res => {
            console.log(res);
            if (res.data.msg === "未登录") {
              wx.navigateTo({
                url: "/pages/manage/login/main"
              });
            }
          }
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../scss/base";

  // 底部标题栏
  @include o('footer') {
    background-color: #fff;
    left: 0;
    bottom: 0;
    width: 100%;
    position: fixed;
    border-top: 1px solid #cfcfcf;
    .flex {
      padding: 6px 4px;
      justify-content: space-around;
    }
    @include e('active') {
      .iconfont {
        font-size: 24px;
      }
      p {
        font-size: 12px;
      }
      .iconfont, p {
        color: $color__grey;
      }
    }
    .active {
      p, .iconfont {
        color: $color-red !important;
      }
    }
  }
</style>
