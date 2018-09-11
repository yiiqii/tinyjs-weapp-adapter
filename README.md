# Tiny.js weapp adapter

> Tiny.js 对微信小游戏的适配

基于 [weapp-adapter](https://developers.weixin.qq.com/minigame/dev/tutorial/weapp-adapter.zip)，改用 [rollup.js](https://rollupjs.org/) 进行编译，有如下改动：

- 增加 `Video` 类，但未做实现
- `navigator` 增加字段 `isCanvasPlus: true`，用于识别是否小游戏环境

## 使用

下载编译后文件 [tinyjs-weapp-adapter.js](https://github.com/yiiqii/tinyjs-weapp-adapter/blob/master/dist/tinyjs-weapp-adapter.js)，在小游戏项目中引入：

```
import './tinyjs-weapp-adapter'
```

## Demo

TODO
