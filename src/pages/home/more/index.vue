<!--
    页面功能
    1.根据外部传入过来的navtitle，自动渲染页面
    2.如果要新增title，请在navs里添加配置项，页面将自动渲染
-->
<template>
  <div class="bgcolor">
    <div class="flex">
      <span v-for="(item,index) of navs" :class="title.label=== item.label?'active':null" @click="getData(navs[index])">{{item.label}}</span>
    </div>
    <news :pageList="pageList"></news>
  </div>
</template>

<script>
  import news from "../../../component/news.vue";

  export default {
    name: "index",
    components: { news },
    data() {
      return {
        title: {},
        pageList: {},
        navs: [
          { label: "党建动态", url: "https://hanzhengjie.tenqent.com/index.php/Api/Dangjian/index" },
          { label: "市场信息", url: "https://hanzhengjie.tenqent.com/index.php/Api/Shichang/index" },
          { label: "活动预告", url: "https://hanzhengjie.tenqent.com/index.php/Api/Yugao/index" }]
      };
    },
    methods: {
      getData(objNav) {
        this.title = objNav;
        wx.request({
          url: objNav.url,
          method: "GET",
          success: res => {
            this.pageList = res.data.data;
          }
        });
      }
    },
    onLoad: function(options) {
      for (let item of this.navs) {
        if (item.label === options.title) {
          this.title = item;
          this.getData(this.title);
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../../../scss/base";

  .flex {
    line-height: 3.6;
    span {
      width: 30%;
      text-align: center;
    }
  }

  .active {
    border-bottom: 2px solid darkred;
    color: darkred;
  }
</style>
