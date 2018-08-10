<template>
  <div class="o-login bgcolor">
    <div class="bgcolor">
      <div class="o-login__buttonblock">
        <div class="o-login__button flex">
          <div>登陆</div>
          <div>注册</div>
        </div>
      </div>
      <div class="o-login__form">
        <div class="flex">
          <div class="o-login__title">姓名</div>
          <div class="o-login__titleinput"><input type="text" placeholder="请输入姓名"/></div>
        </div>
        <div class="flex">
          <div class="o-login__title">手机号</div>
          <div class="o-login__titleinput">
            <input type="number" placeholder="请输入手机号"/>
            <span>发送验证码</span>
          </div>

        </div>
        <div class="flex">
          <div class="o-login__title">验证码</div>
          <div class="o-login__titleinput"><input type="text" placeholder="请输入验证码"/></div>
        </div>
        <div class="flex">
          <div class="o-login__title">身份证</div>
          <div class="o-login__titleinput"><input type="text" placeholder="请输入证件号"/></div>
        </div>
        <div class="flex">
          <div class="o-login__title">党组织</div>
          <div class="o-login__titleinput">
          </div>
        </div>
      </div>
      <div class="o-login__submit">
        <button>登陆</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index"
  };
</script>

<style lang="scss" scoped>
  @import "../../../scss/base";

  @include o('login') {
    width: 100%;
    background-color: #fff;
    @include e('buttonblock') {
      padding: 55px 0;
    }
    @include e('button') {
      width: 55%;
      margin: 0 auto;
      border-radius: 50px;
      border: 3px solid darkred;
      justify-content: space-around;
      overflow: hidden;
      @include e('button')
      :hover {
        color: #fff;
        background: darkred;
      }
      div {
        width: 50%;
        text-align: center;
        padding: 8px;
        font-size: 15px;
      }
    }
    @include e('form') {
      padding: 0 20px 100px 20px;
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
      span {
        padding: 0 10px;
        position: absolute;
        right: 25px;
        font-size: 14px;
        margin-top: -24px;
        border-radius: 10px;
        background-color: darkred;
        color: #fff;
      }
    }
    @include e('submit'){
      padding-bottom: 45px;
      button{
        width: 30%;
        line-height: 2;
        background-color: darkred;
        color: #ffffff;
      }
    }
  }


</style>
