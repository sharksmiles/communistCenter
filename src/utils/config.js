let CONFIG = {
  AppID: "wx851c7ba551d1adff",
  AppSecret: "6d2b1f3b1a6483d2ead03f423e4650d1",
  OpenId: "",
  userInfo: ""
};

export function setUserInfo() {
  wx.getUserInfo({
    success: res => {
      CONFIG.userInfo = res;
    }
  });
}

wx.login({
  success: res => {
    wx.request({
      url: "https://api.weixin.qq.com/sns/jscode2session?appid=" + CONFIG.AppID + "&secret=" + CONFIG.AppSecret + "&js_code=" + res.code + "&grant_type=authorization_code",
      success: function(res) {
        CONFIG.OpenId = res.data.openid;
      }
    });
  }
});

export default CONFIG;
