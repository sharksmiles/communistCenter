<template>
  <div class="o-manage bgcolor">
    <div class="o-manage__topimg"></div>
    <info></info>
    <div class="gridicon">
      <div>
        <a href="/pages/need/wish/main">
          <span class="iconfont icon-love"></span>
          <p>需求清单</p>
        </a>
      </div>
      <div>
        <a href="/pages/serve/resource/main">
          <span class="iconfont icon-love"></span>
          <p>资源清单</p>
        </a>
      </div>
      <div>
        <a href="/pages/serve/project/main">
          <span class="iconfont icon-love"></span>
          <p>项目</p>
        </a>
      </div>
      <div>
        <a href="/pages/serve/wish/main">
          <span class="iconfont icon-love"></span>
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
      background: black;
    }

    .flex {
      margin: 10px;
    }
  }
</style>
