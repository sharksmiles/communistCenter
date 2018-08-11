<template>
  <div class="bgcolor">
    <div class="topimg"></div>
    <news :itemList="videoList" v-if="videoList"></news>
  </div>
</template>

<script>
  import news from "../../../component/news.vue";

  export default {
    name: "index",
    components: { news },
    data() {
      return {
        videoList:[]
      };
    },
    beforeMount() {
      let _this = this;
      wx.request({
        url: "https://hanzhengjie.tenqent.com/index.php/Api/Weike/index",
        method: "get",
        success: function(res) {
          _this.videoList = res.data.data
        }
      });
    }
  };
</script>

<style lang="scss" scoped>

  @import "../../../scss/base";

  .topimg {
    height: 180px;
    background-image: url('http://pd37peogt.bkt.clouddn.com/f%281%29.png');
    background-size: cover;
  }
</style>
