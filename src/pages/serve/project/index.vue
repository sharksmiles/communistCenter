<template>
  <div style="overflow: hidden;height: 100vh;background: white;background-image: url('http://pd37peogt.bkt.clouddn.com/e%281%29.png');background-size: 100% 100%">
    <div class="o-project">
      <div style="color: darkred;position: absolute;right: 20px;font-size: 15px">我要发布</div>
      <div class="o-project__block">
        <div class="o-project__section">
          <div>1、市场党建架构革新</div>
          <p class="o-project__author">8月7日 汉正街党委工作部</p>
          <p>
            icehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzi
          </p>
        </div>
        <div class="o-project__section">
          <div>1、市场党建架构革新</div>
          <p class="o-project__author">8月7日 汉正街党委工作部</p>
          <p>
            icehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzi
          </p>
        </div>
        <div class="o-project__section">
          <div>1、市场党建架构革新</div>
          <p class="o-project__author">8月7日 汉正街党委工作部</p>
          <p>
            icehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzicehiswenzi
          </p>
        </div>
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

  @include o('project') {
    padding: 20px;
    @include e('block') {
      background-color: #fff;
      margin-top: 25px;
      padding: 20px;
      border: 3px solid darkred;
      border-radius: 5px;
      height: 70vh;
      overflow: scroll;
    }
    @include e('section') {
      margin-bottom: 20px;
      div, p {
        word-break: break-word;
      }
      div {
        color: darkred;
        font-weight: 800;
        font-size: 17px;
        display: inline;
        line-height: 2;
        border-bottom: 2px solid darkred;
      }
      p {
        font-size: 14px;
        line-height: 1.55;
      }
    }
    @include e('author') {
      color: #bbbbbb
    }
  }
</style>
