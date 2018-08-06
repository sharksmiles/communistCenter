<template>
    <div class="bgcolor">
      <div style="height: 20vh;background:greenyellow "></div>
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
</style>
