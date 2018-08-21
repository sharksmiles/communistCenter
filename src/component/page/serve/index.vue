<template>
  <div class="o-manage bgcolor">
    <div class="o-manage__topimg"></div>
    <info></info>
    <div class="gridicon">
      <div>
        <a href="/pages/serve/page/main?title=need">
          <span class="iconfont icon-xuqiu" style="color: #25a900"></span>
          <p>需求清单</p>
        </a>
      </div>
      <div>
        <a href="/pages/serve/page/main?title=resources">
          <span class="iconfont icon-ziyuan" style="color: #feb72b;"></span>
          <p>资源清单</p>
        </a>
      </div>
      <div>
        <a href="/pages/serve/page/main?title=project">
          <span class="iconfont icon-tubiaozhizuomoban-" style="color: #19aca6"></span>
          <p>项目清单</p>
        </a>
      </div>
      <div>
        <a href="/pages/serve/wish/main">
          <span class="iconfont">
            <img src="https://hanzhengjie.tenqent.com/public/wechat/images/hanzhengjieAPP/xinyuan@2x.png" id="wishImg" alt="">
          </span>
          <p>微心愿</p>
        </a>
      </div>
      <div>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>

<script>
  import info from "../../info.vue";

  export default {
    name: "manage",
    components: { info }
  };
</script>

<style lang="scss" scoped>
  @import "../../../scss/base";

  @include o('manage') {
    @include e('topimg') {
      height: 150px;
      background-image: url("https://hanzhengjie.tenqent.com/public/wechat/images/hanzhengjieAPP/serve.png");
      background-size: cover;
    }
    .flex {
      margin: 10px;
    }
  }

  #wishImg{
    width: 27px;
    height: 27px;
  }
</style>
