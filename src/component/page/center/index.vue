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
      <div class="img"></div>
      <div class="content">我的发布：<span>3件</span></div>
      <div class="right">></div>
    </div>
    <div class="flex menu">
      <div class="img"></div>
      <div class="content">我的发布：<span>3件</span></div>
      <div class="right">></div>
    </div>
    <div class="flex menu">
      <div class="img"></div>
      <div class="content">我的发布：<span>3件</span></div>
      <div class="right">></div>
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
      background: green;
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
      background-color: #cc0e2e;
      .info {
        width: 60vw;
        padding: 36px;
        position: absolute;
        .img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rebeccapurple;
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
    padding: 10px;
    border-bottom: 1px solid #999999;
    line-height: 50px;
    .img{
      width: 50px;
      background: yellow;
    }
    .content{
      width: 260px;
    }
    .right{

    }
  }

</style>
