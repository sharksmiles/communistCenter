<template>
  <div class="o-manage">
    <div class="o-manage__topimg"></div>
    <div class="flex">
      <div class="o-manage__avator">
      </div>
      <span class="o-manage__info">蔡豪杰 | 党员</span>
      <div class="o-manage__right"> > </div>
    </div>
    <div class="gridicon">
      <div>
        <a href="">
          <span class="iconfont icon-love"></span>
          <p>爸爸爱你</p>
        </a>
      </div>
      <div>
        <a href="">
          <span class="iconfont icon-love"></span>
          <p>爸爸爱你</p>
        </a>
      </div>
      <div>
        <a href="">
          <span class="iconfont icon-love"></span>
          <p>爸爸爱你</p>
        </a>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  @import "../../scss/base";

  @include o('manage') {
    @include e('topimg') {
      height: 150px;
      background: black;
    }
    @include e('avator'){
      width: 65px;
      height: 65px;
      text-align: left;
      margin-top: -32px;
      background: #cc0e2e;
      border-radius: 50%;
    }
    @include e('info'){
      font-size:16px ;
      width: 70%;
      text-align: left;
    }
    @include e('right'){
      font-size: 16px;
    }

    .flex{
      margin: 10px;
    }
  }
</style>
