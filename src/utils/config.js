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
CONFIG.OpenId=wx.getStorageSync('openid')

export default CONFIG;
