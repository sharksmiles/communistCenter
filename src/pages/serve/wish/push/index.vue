<template>
  <div class="o-push bgcolor">
    <div class="o-push__main">
      <p>心愿标题</p>
      <input type="text">
      <p>心愿内容</p>
      <textarea name="" id="" rows="10" maxlength="1000"></textarea>
      <p>姓名</p>
      <input type="text">
      <p>联系方式</p>
      <input type="number">
    </div>
    <div class="o-push__button">
      <div>提交</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index"
  };
</script>

<style lang="scss" scoped>
  @import "../../../../scss/base";

  @include o('push') {
    background: #efefef;
    height: 100vh;
    overflow: hidden;
    @include e('main') {
      margin:0 16px;
      margin-bottom: 20px;
      padding: 30px 0;
      p {
        line-height: 2.5;
        color:grey;
      }
      input, textarea {
        border-radius: 3px;
        background: #fff;
        padding: 6px;
      }
      textarea {
        width: 96%;
        overflow: scroll;
      }
    }
    @include e('button') {
      margin: 0 16px;
      div {
        border-radius: 3px;
        text-align: center;
        line-height: 2.5;
        background: darkred;
        color: white;
        width: 100%;
      }
    }
  }
</style>

