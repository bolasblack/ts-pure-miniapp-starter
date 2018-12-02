App({
  async onLaunch() {
    wx.showLoading({ title: '加载中...', mask: true })
    wx.hideLoading()
  },
  globalData: {
  },
})
