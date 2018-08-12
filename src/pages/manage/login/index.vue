<template>
  <div class="o-login bgcolor">
    <div class="bgcolor">
      <div class="o-login__buttonblock" style="text-align: center">
        <img src="http://pd37peogt.bkt.clouddn.com/WechatIMG359.png" style="width: 100px;height: 100px" alt="">
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
        <div class="flex">
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
        <button @click="postAllData">登陆</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
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
            console.log("写入缓存");
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
            console.log(res);
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
        console.log("dd");
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
            console.log(res);
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

        console.log(_this.postData);

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
          success:function(res) {
            if(res.data.msg==="注册成功"){
              wx.setStorage({
                key: "openid",
                data: _this.postData.openid
              });
              wx.navigateTo({
                url: "/pages/fouronone/main"
              });
            }
          }
        })
      },

      timeTic() {
        let _this = this;
        _this.confirm.status = false;
        _this.confirm.time = 10;
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
    @include e('buttonblock') {
      padding: 30px 0;
    }
    @include e('button') {
      width: 55%;
      margin: 0 auto;
      border-radius: 50px;
      border: 3px solid $color-red;
      justify-content: space-around;
      overflow: hidden;
      @include e('button');
      :hover {
        color: #fff;
        background: $color-red;
      }
      div {
        width: 50%;
        text-align: center;
        padding: 8px;
        font-size: 15px;
      }
    }
    @include e('form') {
      padding: 0 20px 60px 20px;
      .flex {
        padding: 10px 0;
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
        margin-top: -30px;
        border-radius: 10px;
        background-color: $color-red;
        color: #fff;
      }
    }
    @include e('submit') {
      padding-bottom: 45px;
      button {
        width: 30%;
        line-height: 2;
        background-color: $color-red;
        color: #ffffff;
      }
    }
    @include e('loginButton') {
      width: 100%;
      text-align: center;
      font-size: 38px;
      color: $color-red;
      font-weight: 800;
      opacity: 0.6;
    }
  }


</style>
