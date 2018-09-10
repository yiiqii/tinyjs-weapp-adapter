import performance from './performance'

const { screenWidth, screenHeight, devicePixelRatio } = wx.getSystemInfoSync()

export const innerWidth = screenWidth
export const innerHeight = screenHeight
export {
  performance,
  devicePixelRatio,
}
export const screen = {
  availWidth: innerWidth,
  availHeight: innerHeight,
}
export const ontouchstart = null
export const ontouchmove = null
export const ontouchend = null
