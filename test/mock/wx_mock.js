import Audio from './Audio_mock'
import Image from './Image_mock'
import Canvas from './Canvas_mock'

const wx = {
  getSystemInfoSync() {
    return {
      SDKVersion: '2.2.3',
      batteryLevel: 100,
      benchmarkLevel: 1,
      brand: 'devtools',
      devicePixelRatio: 2,
      fontSizeSetting: 16,
      language: 'zh_CN',
      model: 'iPhone 7',
      pixelRatio: 2,
      platform: 'devtools',
      screenHeight: 667,
      screenWidth: 375,
      statusBarHeight: 20,
      system: 'iOS 10.0.1',
      version: '6.6.3',
      windowHeight: 667,
      windowWidth: 375,
    }
  },
  getStorageInfoSync() {
    return {
      keys: [],
    }
  },
  getPerformance() {
    return performance
  },
  createCanvas() {
    return new Canvas()
  },
  createImage() {
    return new Image()
  },
  createAudio() {
    return new Audio()
  },
  createInnerAudioContext() {
    return new Audio()
  },
  onTouchStart(callback) {},
  offTouchStart() {},
  onTouchMove(callback) {},
  offTouchMove() {},
  onTouchEnd(callback) {},
  offTouchEnd() {},
  onTouchCancel(callback) {},
  offTouchCancel() {},
}

module.exports = wx
