<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    const openid = wx.getStorageSync('openid')
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  }
}
</script>

<style>
  body{
    background: #efefef;
  }
</style>
