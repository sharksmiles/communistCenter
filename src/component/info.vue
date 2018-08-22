<template>
  <div class="flex info">
    <div class="avator">
      <open-data type="userAvatarUrl"></open-data>
    </div>
    <span class="content">
      {{name}}{{type?' | '+type:''}}</span>
  </div>
</template>

<script>
  export default {

    name: "info.vue",
    data(){
      return{
        name:"",
        type:""
      }
    },
    onLoad:function(){
      let that =this
      const OPENID = wx.getStorageSync('openid')
      wx.request({
        url:"https://hanzhengjie.tenqent.com/index.php/Api/GetUserinfo/userinfo",
        data: {
          openid: OPENID
        },
        method:"post",
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        success:function(res) {
          that.name = res.data.data.name;
          that.type = res.data.data.shenfen
        }
      })
    }
  };
</script>

<style lang="scss" scoped>
  @import "../scss/base";

  .info {
    margin: 12px 10px;
    .avator {
      width: 65px;
      height: 65px;
      text-align: left;
      margin-top: -32px;
      background-size: cover;
      border-radius: 50%;
      overflow: hidden;
    }
    .content {
      font-size: 16px;
      width: 78%;
      text-align: left;
    }
    .right {
      font-size: 16px;
    }
  }

</style>
