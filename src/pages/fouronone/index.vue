<template>
  <div>
    <index v-if="com==='index'"></index>
    <manage v-if="com==='manage'"></manage>
    <serve v-if="com==='serve'"></serve>
    <cente v-if="com==='cente'"></cente>

    <div class="o-footer center">
      <div class="flex">
        <div class="o-footer__active" @click="changePage('index')">
          <div class="iconfont icon-Home"></div>
          <p>新闻首页</p>
        </div>
        <div class="o-footer__active" @click="changePage('manage')">
          <div class="iconfont icon-function"></div>
          <p>党员管理</p>
        </div>
        <div class="o-footer__active" @click="changePage('serve')">
          <div class="iconfont icon-love"></div>
          <p>党员服务</p>
        </div>
        <div class="o-footer__active" @click="changePage('cente')">
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
        com: "index"
      };
    },
    methods: {
      changePage(value) {
        this.com = value;
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../scss/base";

  // 底部标题栏
  @include o('footer') {
    left: 0;
    bottom: 0;
    width: 100%;
    position: fixed;
    border-top: 1px solid #cfcfcf;
    .flex {
      padding: 6px 4px;
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
      &:hover {
        p,.iconfont {
          color: darkred !important;
        }
      }
    }
  }
</style>
