declare interface MpEventTouch {
  clientX: number
  clientY: number
  force: number
  identifier: number
  pageX: number
  pageY: number
}

declare interface MpEventTarget<D = any> {
  dataset: D
  id: string
  offsetLeft: number
  offsetTop: number
}

declare interface MpEvent<D = any> {
  type: string
  timeStamp: number
  target: EventTarget
  currentTarget: EventTarget
  touches: MpEventTouch[]
  changedTouches: MpEventTouch[]
  detail: D
}
