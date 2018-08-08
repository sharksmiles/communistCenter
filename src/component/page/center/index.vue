<template>
  <div class="bgcolor">
    <div class="o-center">
      <div class="o-center__navimg">
        <div class="o-center__avator">
          <div class="info">
            <div class="img"></div>
            <div class="name">蔡豪杰</div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex menu">
      <div class="img iconfont icon-fabu-copy" style="background-color: #c9a4f2"></div>
      <div class="content">我的发布：<span>3件</span></div>
      <div class="iconfont icon-right"></div>
    </div>
    <div class="flex menu">
      <div class="img iconfont icon-geti" style="background-color: #48cfae"></div>
      <div class="content">我的认领：<span>3件</span></div>
      <div class="iconfont icon-right"></div>
    </div>
    <div class="flex menu">
      <div class="img iconfont icon-jifen" style="background-color: #ff9623"></div>
      <div class="content">我的积分：<span>3件</span></div>
      <div class="iconfont"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "cente"
  };
</script>
<style lang="scss" scoped>
  @import "../../../scss/base";

  @include o('center') {
    @include e('navimg') {
      height: 150px;
      background-image: url("http://pd37peogt.bkt.clouddn.com/a%281%29.png");
      background-size: cover;
    }
    @include e('avator') {
      display: table-cell;
      vertical-align: center;
      top: 30px;
      width: 80vw;
      height: 121px;
      margin: 0 10vw;
      position: absolute;
      border-radius: 10px 10px 0 0;
      background-image:linear-gradient(90deg, #ffd45b, #fff 95%, #ffe22d);
      .info {
        width: 60vw;
        padding: 36px;
        position: absolute;
        .img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-image: url("http://pd37peogt.bkt.clouddn.com/avator.jpg");
          background-size: cover;
          float: left;
          margin-right: 12px;
          overflow: hidden;
        }
        .name {
          line-height: 50px;
        }
      }
    }
  }

  .menu{
    padding: 15px;
    border-bottom: 1px solid #eeeeee;
    line-height: 35px;
    .img{
      color: #fff;
      width: 35px;
      text-align: center;
      font-size: 23px;
      border-radius: 50%;
      background: darkred;
    }
    .content{
      width: 260px;
    }
    .right{

    }
  }

</style>
