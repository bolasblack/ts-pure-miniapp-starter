declare module "mp_canvas_drawer" {
  export interface PaintConfig {
    width: number
    height: number
    views: PaintView[]
  }

  export type PaintView =
    | PaintView$Image
    | PaintView$Text
    | PaintView$Rect

  export interface PaintView$Image {
    type: 'image'
    url: string /** 绘制的图片地址，可以是本地图片，如：/images/1.jpeg */
    top: number /** 左上角距离画板顶部的距离 */
    left: number /** 左上角距离画板左侧的距离 */
    width?: number /** 要画多宽，默认值 0	*/
    height?: number /** 要画多高，默认值 0 */
  }

  export interface PaintView$Text {
    type: 'text'
    content?: number /** 绘制文本，默认值 '' */
    color?: string /** 颜色，默认值 black */
    fontSize?: number /** 字体大小，默认值 16 */
    textAlign?: 'left' | 'center' | 'right' /** 文字对齐方式，默认值 left */
    /*
    lineHeight	行高，只有在多行文本中才有用	20
    top	文本左上角距离画板顶部的距离	0
    left	文本左上角距离画板左侧的距离	0
    breakWord	是否需要换行	false	true
    MaxLineNumber	最大行数，只有设置 breakWord: true ，当前属性才有效，超出行数内容的显示为...	2
    width	和 MaxLineNumber 属性配套使用，width 就是达到换行的宽度
    bolder	是否加粗	false	true
    textDecoration	显示中划线、下划线效果	none	underline（下划线）、line-through（中划线）
    */
  }

  export interface PaintView$Rect {
    type: 'rect'
    background?: string /** 背景颜色，默认值: black */
    top: number /** 左上角距离画板顶部的距离 */
    left: number /** 左上角距离画板左侧的距离 */
    width?: number /** 要画多宽，默认值 0 */
    height?: number /** 要画多高，默认值 0 */
  }
}
