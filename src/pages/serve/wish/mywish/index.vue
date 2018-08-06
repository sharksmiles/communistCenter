<template>
  <div class="bgcolor" style="padding:20px 0">
    <wishcard></wishcard>
    <wishcard></wishcard>
  </div>
</template>

<script>
  import wishcard from '../../../../component/wishcard.vue'
  export default {
    name: "index",
    components:{wishcard}
  };

</script>

<style lang="scss" scoped>
  @import "../../../../scss/base";

</style>

