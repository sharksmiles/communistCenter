<template>
  <div class="bgcolor" style="padding:20px 0">
    <div v-if="!wishList.length" style="text-align: center">这里是空的，快去发布心愿吧~</div>
    <wishcard :wishList="wishList"></wishcard>
  </div>
</template>

<script>
  import CONFIG from "../../../../utils/config";
  import wishcard from "../../../../component/wishcard.vue";

  export default {
    name: "index",
    data() {
      return {
        wishList: []
      };
    },
    components: { wishcard },
    mounted() {
      let _this = this,
        openid = CONFIG.OpenId;
      console.log(CONFIG);
      wx.request({
        url: "https://hanzhengjie.tenqent.com/index.php/Api/Weixinyuan/my_add",
        method: "GET",
        header: {
          "content-type": "application/x-www-form-urlencoded" // 默认值
        },
        data: {
          openid: openid
        },
        success: res => {
          _this.wishList = res.data.date;
          console.log(res);
        }
      });
    }
  };

</script>

<style lang="scss" scoped>
  @import "../../../../scss/base";

</style>

