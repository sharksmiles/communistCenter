<template>
    <div class="bgcolor">
      <div class="topimg"></div>
      <news></news>
      <news></news>
    </div>
</template>

<script>
  import news from '../../../component/newsvideo.vue'
  export default {
    name: "index",
    components:{news}
  };
</script>

<style lang="scss" scoped>

  @import "../../../scss/base";
  .topimg{
    height: 180px;
    background-image: url('http://pd37peogt.bkt.clouddn.com/f%281%29.png');
    background-size: cover;
  }
</style>
