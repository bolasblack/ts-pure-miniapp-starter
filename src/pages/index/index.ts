import { MpPage, PageInstance } from '../../utils/wx'
import { wxp } from '@minapp/wx/wxp'

export interface IndexPageData$Loading {
  loading: true
}

export interface IndexPageData$Loaded {
  loading: false
  userInfo?: wx.getUserInfo.ParamPropSuccessParamPropUserInfo
}

export type IndexPageData =
  | IndexPageData$Loading
  | IndexPageData$Loaded

@PageInstance
export class IndexPage extends MpPage<IndexPageData> {
  readonly data: IndexPageData = {
    loading: true,
  }

  async onLoad() {
    wx.showLoading({ title: '载入中...' })

    const res = await wxp.getSetting()
    if (res.authSetting['scope.userInfo']) {
      const userInfo = await wxp.getUserInfo()
      this.setData({ loading: false, userInfo: userInfo.userInfo })
    } else {
      this.setData({ loading: false })
    }

    wx.hideLoading()
  }

  onGetUserInfo(event: MpEvent<wx.getUserInfo.ParamPropSuccessParam>) {
    this.setData({ userInfo: event.detail.userInfo })
  }
}
