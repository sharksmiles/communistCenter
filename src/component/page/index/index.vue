<template>
  <div class="o-index">
    <div class="o-index__img"></div>
    <mewstitle></mewstitle>
    <news></news>
    <mewstitle></mewstitle>
    <news></news>
  </div>
</template>

<script>
  import news from "../../news.vue";
  import mewstitle from "../../newstitle.vue";

  export default {
    name: "index",
    components: { news, mewstitle },
    created() {
      wx.request({
        url: "http://whschoolbbs.tenqent.com/html/hanzhengjie/index.php/Api/Qingdan/index",
        data: {
          type: 1
        },
        method: 'GET',
        header: {
          'content-type': 'application/json'
        },
        success:function(res) {
          console.log(res.data)
        }
      });
    }
  };
</script>

<style lang="scss">
  @import "../../../scss/base";

  /*
  * 只支持双层嵌套
  * o:root o-dd
  * e:fist o-dd__ddd
   */

  @include o('index') {
    background: #fff;
    /*顶部图片*/
    @include e('img') {
      width: 100%;
      height: 150px;
      background-image: url('http://pd37peogt.bkt.clouddn.com/f%281%29.png');
      background-size: cover;
    }
  }
</style>
