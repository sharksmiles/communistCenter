import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;
App.mpType = "app";

const app = new Vue(App);
app.$mount();

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      "^pages/fouronone/main",
      "pages/manage/map/main",
      "pages/home/detail/main",
      "pages/home/more/main",
      "pages/home/page/main",
      "pages/manage/class/main",
      "pages/manage/hero/main",
      "pages/manage/login/main",
      "pages/manage/money/main",
      "pages/serve/page/main",
      "pages/serve/push/main",
      "pages/serve/wish/main",
      "pages/serve/wish/mywish/main"
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#c00",
      navigationBarTitleText: "汉正街市场党建e家",
      navigationBarTextStyle: "#fff"
    }
  }
};
