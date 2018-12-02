/// <reference path="../typings/wx.d.ts" />
import { toObject } from './to_object'

export abstract class MpPage<T = {}> {
  readonly data: Readonly<T>
  readonly setData: (data: Partial<T>, callback?: () => void) => ReturnType<Page['setData']>

  /** 到当前页面的路径 */
  readonly route: string
}

export function PageInstance(PageClass: { new(): Page.Options }) {
  Page(toObject(new PageClass))
}
