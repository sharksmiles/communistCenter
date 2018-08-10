<template>
  <div class="bgcolor">
    <div class="topimg"></div>
    <news :videoList="videoList" v-if="videoList"></news>
  </div>
</template>

<script>
  import news from "../../../component/newsvideo.vue";

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
      // _this.videoList="日你妈"
      console.log('fuck')
      wx.request({
        url: "https://hanzhengjie.tenqent.com/index.php/Api/Weike/index",
        method: "get",
        success: function(res) {
          // _this.videoList="rinima"
          console.log(res)
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
