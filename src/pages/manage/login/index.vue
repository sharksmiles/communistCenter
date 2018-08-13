<template style="background: #fff">
  <div class="o-login">
    <div style="display: flex">
      <div class="o-login__button">
        <div :class="loginButton?'active':null" @click="loginButton=!loginButton">登陆</div>
        <div :class="loginButton?null:'active'" @click="loginButton=!loginButton">注册</div>
      </div>
    </div>
    <div class="o-login__form">
      <div class="flex">
        <div class="o-login__title">姓名</div>
        <div class="o-login__titleinput">
          <input type="text" placeholder="请输入姓名" v-model="postData.name"/>
        </div>
      </div>
      <div class="flex">
        <div class="o-login__title">手机号</div>
        <div class="o-login__titleinput">
          <input type="number" placeholder="请输入手机号" v-model="postData.tel" maxlength="11"/>
          <button @click="getConfirmCode">{{confirm.time?confirm.time:"发送验证码"}}</button>
        </div>
      </div>
      <div class="flex">
        <div class="o-login__title">验证码</div>
        <div class="o-login__titleinput">
          <input type="text" placeholder="请输入验证码" v-model="postData.yzcode" maxlength="6"/>
        </div>
      </div>
      <div class="flex" v-if="loginButton?false:true">
        <div class="o-login__title">身份证</div>
        <div class="o-login__titleinput">
          <input type="text" placeholder="请输入证件号" v-model="postData.card" maxlength="18"/>
        </div>
      </div>
      <div class="flex">
        <div class="o-login__title">党组织</div>
        <div class="o-login__titleinput">
          <picker @change="bindPickerChange" :value="index" :range="partyOrganizationList" range-key="title">
            <view class="picker">
              {{partyOrganizationList[index].title}}
            </view>
          </picker>
        </div>
      </div>
    </div>
    <div class="o-login__submit">
      <button @click="postAllData">{{loginButton?"登陆":"注册"}}</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        loginButton: true,
        confirm: {
          time: null,
          code: null
        },
        index: 0,
        partyOrganizationList: [{ id: "", title: "" }],
        postData: {
          openid: "",
          name: "",
          tel: "",
          card: "",
          dzz_id: 1,
          yzcode: ""
        }
      };
    },
    created() {
      let _this = this;
      // 通过loginCode获取到openid
      wx.login({
        success: function(res) {
          _this.getOpenId(res.code);
        }
      });
      // 获取党组织列表
      wx.request({
        url: "https://hanzhengjie.tenqent.com/index.php/Api/Dangyuan/index",
        method: "get",
        success: function(res) {
          _this.partyOrganizationList = res.data.data;
        }
      });
    },
    onShow: function() {
      let _this = this;
      _this.isLogin(_this.postData.openid);
    },
    methods: {
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
        wx.request({
          url: "https://hanzhengjie.tenqent.com/index.php/Api/Dangyuan/is_user",
          method: "get",
          data: {
            openid: openid
          },
          success: res => {
            if (res.data.msg != "未登录") {
              wx.navigateTo({
                url: "/pages/fouronone/main"
              });
            }
          }
        });
      },
      getConfirmCode() {
        let _this = this;
        wx.request({
          url: "https://hanzhengjie.tenqent.com/index.php/Api/Dangyuan/yzcode",
          method: "get",
          header: {
            "content-type": "application/x-www-form-urlencoded" // 默认值
          },
          data: {
            tel: _this.postData.tel
          },
          success: function(res) {
            if (res.data.code === 200) {
              wx.showToast({
                title: "验证码获取成功",
                icon: "success",
                duration: 2000
              });
              _this.timeTic();
            }
            else {
              wx.showToast({
                title: "手机号填写有误",
                icon: "none",
                duration: 2000
              });
            }
          }
        });
      },

      bindPickerChange: function(e) {
        let INDEX = e.target.value;
        this.index = INDEX;
        this.postData.dzz_id = this.partyOrganizationList[INDEX].id;
      },
      postAllData() {
        let _this = this;
        wx.request({
          url: "https://hanzhengjie.tenqent.com/index.php/Api/Dangyuan/register",
          method: "post",
          header: {
            "content-type": "application/x-www-form-urlencoded"
          },
          data: {
            openid: _this.postData.openid,
            name: _this.postData.name,
            tel: _this.postData.tel,
            card: _this.postData.card,
            dzz_id: _this.postData.dzz_id,
            yzcode: _this.postData.yzcode
          },
          success: function(res) {
            console.log(res)
            if (res.data.code === 200) {

              wx.setStorage({
                key: "openid",
                data: _this.postData.openid
              });
              wx.navigateTo({
                url: "/pages/fouronone/main"
              });
            }
          }
        });
      },

      timeTic() {
        let _this = this;
        _this.confirm.status = false;
        _this.confirm.time = 60;
        if (_this.confirm.time) {
          var timer = setInterval(function() {
            if (_this.confirm.time <= 0) {
              _this.confirm.time = null;
              clearInterval(timer);
            } else _this.confirm.time--;
          }, 1000);
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../scss/base";

  @include o('login') {
    width: 100%;
    background-color: #fff;
    height: 100vh;
    overflow: hidden;
    @include e('form') {
      padding: 20px 8px;
      .flex {
        padding: 12px 0;
        border-bottom: 1px solid #fafafa;
        justify-content: flex-start;
      }
    }
    @include e('title') {
      width: 100px;
    }

    @include e('titleinput') {
      width: 100%;
      button {
        float: right;
        z-index: 999;
        font-size: 14px;
        margin-top: -29px;
        border-radius: 10px;
        background-color: $color-red;
        color: #fff;
      }
    }
    @include e('submit') {
      button {
        margin-top: 30px;
        width: 45%;
        line-height: 2;
        background-color: $color-red;
        color: #ffffff;
      }
    }
    @include e('button') {
      display: flex;
      margin: 30px auto;
      margin-top: 50px;
      border: 5px solid $color-red;
      border-radius: 50px;
      overflow: hidden;
      div {
        padding: 5px 20px;
        font-size: 18px;
        color: $color-red;
      }
      .active {
        background: $color-red;
        color: white;
      }
    }
  }
</style>
