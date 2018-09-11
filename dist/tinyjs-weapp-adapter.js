var window$1 = /*#__PURE__*/Object.freeze({
  get document () { return document$$1; },
  get navigator () { return navigator; },
  get XMLHttpRequest () { return XMLHttpRequest; },
  get WebSocket () { return WebSocket; },
  get Image () { return Image; },
  get Audio () { return Audio; },
  get Video () { return Video; },
  get FileReader () { return FileReader; },
  get HTMLElement () { return HTMLElement; },
  get localStorage () { return localStorage; },
  get location () { return location; },
  get canvas () { return canvas; },
  get setTimeout () { return setTimeout; },
  get setInterval () { return setInterval; },
  get clearTimeout () { return clearTimeout; },
  get clearInterval () { return clearInterval; },
  get requestAnimationFrame () { return requestAnimationFrame; },
  get cancelAnimationFrame () { return cancelAnimationFrame; },
  get innerWidth () { return innerWidth; },
  get innerHeight () { return innerHeight; },
  get performance () { return performance$1; },
  get devicePixelRatio () { return devicePixelRatio; },
  get screen () { return screen; },
  get ontouchstart () { return ontouchstart; },
  get ontouchmove () { return ontouchmove; },
  get ontouchend () { return ontouchend; },
  get HTMLImageElement () { return HTMLImageElement; },
  get HTMLCanvasElement () { return HTMLCanvasElement; }
});

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var _events = new WeakMap();

var EventTarget = function () {
  function EventTarget() {
    classCallCheck(this, EventTarget);

    _events.set(this, {});
  }

  createClass(EventTarget, [{
    key: 'addEventListener',
    value: function addEventListener(type, listener) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      var events = _events.get(this);

      if (!events) {
        events = {};
        _events.set(this, events);
      }
      if (!events[type]) {
        events[type] = [];
      }
      events[type].push(listener);

      if (options.capture) {
        console.warn('EventTarget.addEventListener: options.capture is not implemented.');
      }
      if (options.once) {
        console.warn('EventTarget.addEventListener: options.once is not implemented.');
      }
      if (options.passive) {
        console.warn('EventTarget.addEventListener: options.passive is not implemented.');
      }
    }
  }, {
    key: 'removeEventListener',
    value: function removeEventListener(type, listener) {
      var listeners = _events.get(this)[type];

      if (listeners && listeners.length > 0) {
        for (var i = listeners.length; i--; i > 0) {
          if (listeners[i] === listener) {
            listeners.splice(i, 1);
            break;
          }
        }
      }
    }
  }, {
    key: 'dispatchEvent',
    value: function dispatchEvent() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var listeners = _events.get(this)[event.type];

      if (listeners) {
        for (var i = 0; i < listeners.length; i++) {
          listeners[i](event);
        }
      }
    }
  }]);
  return EventTarget;
}();

var Node = function (_EventTarget) {
  inherits(Node, _EventTarget);

  function Node() {
    classCallCheck(this, Node);

    var _this = possibleConstructorReturn(this, (Node.__proto__ || Object.getPrototypeOf(Node)).call(this));

    _this.childNodes = [];
    return _this;
  }

  createClass(Node, [{
    key: 'appendChild',
    value: function appendChild(node) {
      if (node instanceof Node) {
        this.childNodes.push(node);
      } else {
        throw new TypeError('Failed to executed \'appendChild\' on \'Node\': parameter 1 is not of type \'Node\'.');
      }
    }
  }, {
    key: 'cloneNode',
    value: function cloneNode() {
      var copyNode = Object.create(this);

      Object.assign(copyNode, this);
      return copyNode;
    }
  }, {
    key: 'removeChild',
    value: function removeChild(node) {
      var index = this.childNodes.findIndex(function (child) {
        return child === node;
      });

      if (index > -1) {
        return this.childNodes.splice(index, 1);
      }
      return null;
    }
  }]);
  return Node;
}(EventTarget);

var ELement = function (_Node) {
  inherits(ELement, _Node);

  function ELement() {
    classCallCheck(this, ELement);

    var _this = possibleConstructorReturn(this, (ELement.__proto__ || Object.getPrototypeOf(ELement)).call(this));

    _this.className = '';
    _this.children = [];
    return _this;
  }

  return ELement;
}(Node);

function noop() {}

var performance = void 0;

if (wx.getPerformance) {
  var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
      platform = _wx$getSystemInfoSync.platform;

  var wxPerf = wx.getPerformance();
  var initTime = wxPerf.now();

  var clientPerfAdapter = Object.assign({}, wxPerf, {
    now: function now() {
      return (wxPerf.now() - initTime) / 1000;
    }
  });

  performance = platform === 'devtools' ? wxPerf : clientPerfAdapter;
}

var performance$1 = performance;

var _wx$getSystemInfoSync$1 = wx.getSystemInfoSync(),
    screenWidth = _wx$getSystemInfoSync$1.screenWidth,
    screenHeight = _wx$getSystemInfoSync$1.screenHeight,
    devicePixelRatio = _wx$getSystemInfoSync$1.devicePixelRatio;

var innerWidth = screenWidth;
var innerHeight = screenHeight;
var screen = {
  availWidth: innerWidth,
  availHeight: innerHeight
};
var ontouchstart = null;
var ontouchmove = null;
var ontouchend = null;

var HTMLElement = function (_Element) {
  inherits(HTMLElement, _Element);

  function HTMLElement() {
    var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    classCallCheck(this, HTMLElement);

    var _this = possibleConstructorReturn(this, (HTMLElement.__proto__ || Object.getPrototypeOf(HTMLElement)).call(this));

    _this.className = '';
    _this.childern = [];
    _this.style = {
      width: innerWidth + 'px',
      height: innerHeight + 'px'
    };
    _this.insertBefore = noop;
    _this.innerHTML = '';

    _this.tagName = tagName.toUpperCase();
    return _this;
  }

  createClass(HTMLElement, [{
    key: 'setAttribute',
    value: function setAttribute(name, value) {
      this[name] = value;
    }
  }, {
    key: 'getAttribute',
    value: function getAttribute(name) {
      return this[name];
    }
  }, {
    key: 'getBoundingClientRect',
    value: function getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: innerWidth,
        height: innerHeight
      };
    }
  }, {
    key: 'focus',
    value: function focus() {}
  }, {
    key: 'clientWidth',
    get: function get$$1() {
      var ret = parseInt(this.style.fontSize, 10) * this.innerHTML.length;

      return Number.isNaN(ret) ? 0 : ret;
    }
  }, {
    key: 'clientHeight',
    get: function get$$1() {
      var ret = parseInt(this.style.fontSize, 10);

      return Number.isNaN(ret) ? 0 : ret;
    }
  }]);
  return HTMLElement;
}(ELement);

var HTMLImageElement = function (_HTMLElement) {
  inherits(HTMLImageElement, _HTMLElement);

  function HTMLImageElement() {
    classCallCheck(this, HTMLImageElement);
    return possibleConstructorReturn(this, (HTMLImageElement.__proto__ || Object.getPrototypeOf(HTMLImageElement)).call(this, 'img'));
  }

  return HTMLImageElement;
}(HTMLElement);

var HTMLCanvasElement = function (_HTMLElement2) {
  inherits(HTMLCanvasElement, _HTMLElement2);

  function HTMLCanvasElement() {
    classCallCheck(this, HTMLCanvasElement);
    return possibleConstructorReturn(this, (HTMLCanvasElement.__proto__ || Object.getPrototypeOf(HTMLCanvasElement)).call(this, 'canvas'));
  }

  return HTMLCanvasElement;
}(HTMLElement);

function Canvas() {
  var canvas = wx.createCanvas();

  canvas.type = 'canvas';

  canvas.__proto__.__proto__ = new HTMLElement('canvas');

  var _getContext = canvas.getContext;

  canvas.getBoundingClientRect = function () {
    var ret = {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };

    return ret;
  };

  return canvas;
}

function Image() {
  var image = wx.createImage();

  return image;
}

var HTMLMediaElement = function (_HTMLElement) {
  inherits(HTMLMediaElement, _HTMLElement);

  function HTMLMediaElement(type) {
    classCallCheck(this, HTMLMediaElement);
    return possibleConstructorReturn(this, (HTMLMediaElement.__proto__ || Object.getPrototypeOf(HTMLMediaElement)).call(this, type));
  }

  createClass(HTMLMediaElement, [{
    key: 'addTextTrack',
    value: function addTextTrack() {}
  }, {
    key: 'captureStream',
    value: function captureStream() {}
  }, {
    key: 'fastSeek',
    value: function fastSeek() {}
  }, {
    key: 'load',
    value: function load() {}
  }, {
    key: 'pause',
    value: function pause() {}
  }, {
    key: 'play',
    value: function play() {}
  }]);
  return HTMLMediaElement;
}(HTMLElement);

var HTMLAudioElement = function (_HTMLMediaElement) {
  inherits(HTMLAudioElement, _HTMLMediaElement);

  function HTMLAudioElement() {
    classCallCheck(this, HTMLAudioElement);
    return possibleConstructorReturn(this, (HTMLAudioElement.__proto__ || Object.getPrototypeOf(HTMLAudioElement)).call(this, 'audio'));
  }

  return HTMLAudioElement;
}(HTMLMediaElement);

var HAVE_NOTHING = 0;
var HAVE_METADATA = 1;
var HAVE_CURRENT_DATA = 2;
var HAVE_FUTURE_DATA = 3;
var HAVE_ENOUGH_DATA = 4;

var _innerAudioContext = new WeakMap();
var _src = new WeakMap();

var Audio = function (_HTMLAudioElement) {
  inherits(Audio, _HTMLAudioElement);

  function Audio(url) {
    classCallCheck(this, Audio);

    var _this = possibleConstructorReturn(this, (Audio.__proto__ || Object.getPrototypeOf(Audio)).call(this));

    _this.HAVE_NOTHING = HAVE_NOTHING;
    _this.HAVE_METADATA = HAVE_METADATA;
    _this.HAVE_CURRENT_DATA = HAVE_CURRENT_DATA;
    _this.HAVE_FUTURE_DATA = HAVE_FUTURE_DATA;
    _this.HAVE_ENOUGH_DATA = HAVE_ENOUGH_DATA;
    _this.readyState = HAVE_NOTHING;


    _src.set(_this, '');

    var innerAudioContext = wx.createInnerAudioContext();

    _innerAudioContext.set(_this, innerAudioContext);

    innerAudioContext.onCanplay(function () {
      _this.dispatchEvent({ type: 'load' });
      _this.dispatchEvent({ type: 'loadend' });
      _this.dispatchEvent({ type: 'canplay' });
      _this.dispatchEvent({ type: 'canplaythrough' });
      _this.dispatchEvent({ type: 'loadedmetadata' });
      _this.readyState = HAVE_CURRENT_DATA;
    });
    innerAudioContext.onPlay(function () {
      _this.dispatchEvent({ type: 'play' });
    });
    innerAudioContext.onPause(function () {
      _this.dispatchEvent({ type: 'pause' });
    });
    innerAudioContext.onEnded(function () {
      _this.dispatchEvent({ type: 'ended' });
      _this.readyState = HAVE_ENOUGH_DATA;
    });
    innerAudioContext.onError(function () {
      _this.dispatchEvent({ type: 'error' });
    });

    if (url) {
      _innerAudioContext.get(_this).src = url;
    }
    return _this;
  }

  createClass(Audio, [{
    key: 'load',
    value: function load() {
      console.warn('HTMLAudioElement.load() is not implemented.');
    }
  }, {
    key: 'play',
    value: function play() {
      _innerAudioContext.get(this).play();
    }
  }, {
    key: 'pause',
    value: function pause() {
      _innerAudioContext.get(this).pause();
    }
  }, {
    key: 'canPlayType',
    value: function canPlayType() {
      var mediaType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (typeof mediaType !== 'string') {
        return '';
      }

      if (mediaType.indexOf('audio/mpeg') > -1 || mediaType.indexOf('audio/mp4')) {
        return 'probably';
      }
      return '';
    }
  }, {
    key: 'cloneNode',
    value: function cloneNode() {
      var newAudio = new Audio();

      newAudio.loop = _innerAudioContext.get(this).loop;
      newAudio.autoplay = _innerAudioContext.get(this).autoplay;
      newAudio.src = this.src;
      return newAudio;
    }
  }, {
    key: 'currentTime',
    get: function get$$1() {
      return _innerAudioContext.get(this).currentTime;
    },
    set: function set$$1(value) {
      _innerAudioContext.get(this).seek(value);
    }
  }, {
    key: 'src',
    get: function get$$1() {
      return _src.get(this);
    },
    set: function set$$1(value) {
      _src.set(this, value);
      _innerAudioContext.get(this).src = value;
    }
  }, {
    key: 'loop',
    get: function get$$1() {
      return _innerAudioContext.get(this).loop;
    },
    set: function set$$1(value) {
      _innerAudioContext.get(this).loop = value;
    }
  }, {
    key: 'autoplay',
    get: function get$$1() {
      return _innerAudioContext.get(this).autoplay;
    },
    set: function set$$1(value) {
      _innerAudioContext.get(this).autoplay = value;
    }
  }, {
    key: 'paused',
    get: function get$$1() {
      return _innerAudioContext.get(this).paused;
    }
  }]);
  return Audio;
}(HTMLAudioElement);

var HTMLVideoElement = function (_HTMLMediaElement) {
  inherits(HTMLVideoElement, _HTMLMediaElement);

  function HTMLVideoElement() {
    classCallCheck(this, HTMLVideoElement);
    return possibleConstructorReturn(this, (HTMLVideoElement.__proto__ || Object.getPrototypeOf(HTMLVideoElement)).call(this, 'video'));
  }

  return HTMLVideoElement;
}(HTMLMediaElement);

var Video = function (_HTMLVideoElement) {
  inherits(Video, _HTMLVideoElement);

  function Video() {
    classCallCheck(this, Video);

    var _this = possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).call(this));

    console.error('HTMLVideoElement is not implemented.');
    return _this;
  }

  createClass(Video, [{
    key: 'load',
    value: function load() {}
  }, {
    key: 'play',
    value: function play() {}
  }, {
    key: 'pause',
    value: function pause() {}
  }]);
  return Video;
}(HTMLVideoElement);

var TouchEvent = function TouchEvent(type) {
  classCallCheck(this, TouchEvent);
  this.target = canvas;
  this.currentTarget = canvas;
  this.touches = [];
  this.targetTouches = [];
  this.changedTouches = [];
  this.preventDefault = noop;
  this.stopPropagation = noop;

  this.type = type;
};

function touchEventHandlerFactory(type) {
  return function (event) {
    var touchEvent = new TouchEvent(type);

    touchEvent.touches = event.touches;
    touchEvent.targetTouches = Array.prototype.slice.call(event.touches);
    touchEvent.changedTouches = event.changedTouches;
    touchEvent.timeStamp = event.timeStamp;
    document$$1.dispatchEvent(touchEvent);
  };
}

wx.onTouchStart(touchEventHandlerFactory('touchstart'));
wx.onTouchMove(touchEventHandlerFactory('touchmove'));
wx.onTouchEnd(touchEventHandlerFactory('touchend'));
wx.onTouchCancel(touchEventHandlerFactory('touchcancel'));

var events = {};

var document$$1 = {
  readyState: 'complete',
  visibilityState: 'visible',
  documentElement: window$1,
  hidden: false,
  style: {},
  location: location,
  ontouchstart: null,
  ontouchmove: null,
  ontouchend: null,

  head: new HTMLElement('head'),
  body: new HTMLElement('body'),

  createElement: function createElement(tagName) {
    var element = null;

    if (tagName === 'canvas') {
      element = new Canvas();
    } else if (tagName === 'audio') {
      element = new Audio();
    } else if (tagName === 'img') {
      element = new Image();
    } else if (tagName === 'video') {
      element = new Video();
    } else {
      element = new HTMLElement(tagName);
    }

    return element;
  },
  getElementById: function getElementById(id) {
    if (id === canvas.id) {
      return canvas;
    }
    return null;
  },
  getElementsByTagName: function getElementsByTagName(tagName) {
    var elements = null;

    if (tagName === 'head') {
      elements = [document$$1.head];
    } else if (tagName === 'body') {
      elements = [document$$1.body];
    } else if (tagName === 'canvas') {
      elements = [canvas];
    } else {
      elements = [];
    }

    return elements;
  },
  getElementsByName: function getElementsByName(tagName) {
    var elements = null;

    if (tagName === 'head') {
      elements = [document$$1.head];
    } else if (tagName === 'body') {
      elements = [document$$1.body];
    } else if (tagName === 'canvas') {
      elements = [canvas];
    } else {
      elements = [];
    }

    return elements;
  },
  querySelector: function querySelector(query) {
    var element = null;

    if (query === 'head') {
      element = document$$1.head;
    } else if (query === 'body') {
      element = document$$1.body;
    } else if (query === 'canvas') {
      element = canvas;
    } else if (query === '#' + canvas.id) {
      element = canvas;
    }
    return element;
  },
  querySelectorAll: function querySelectorAll(query) {
    var elements = null;

    if (query === 'head') {
      elements = [document$$1.head];
    } else if (query === 'body') {
      elements = [document$$1.body];
    } else if (query === 'canvas') {
      elements = [canvas];
    } else {
      elements = [];
    }

    return elements;
  },
  addEventListener: function addEventListener(type, listener) {
    if (!events[type]) {
      events[type] = [];
    }
    events[type].push(listener);
  },
  removeEventListener: function removeEventListener(type, listener) {
    var listeners = events[type];

    if (listeners && listeners.length > 0) {
      for (var i = listeners.length; i--; i > 0) {
        if (listeners[i] === listener) {
          listeners.splice(i, 1);
          break;
        }
      }
    }
  },
  dispatchEvent: function dispatchEvent(event) {
    var listeners = events[event.type];

    if (listeners) {
      for (var i = 0; i < listeners.length; i++) {
        listeners[i](event);
      }
    }
  }
};

var _wx$getSystemInfoSync$2 = wx.getSystemInfoSync(),
    platform$1 = _wx$getSystemInfoSync$2.platform;

var navigator = {
  platform: platform$1,
  isCanvasPlus: true,
  language: 'zh-cn',
  appVersion: '5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN',
  onLine: true,
  geolocation: {
    getCurrentPosition: noop,
    watchPosition: noop,
    clearWatch: noop
  }
};

var _url = new WeakMap();
var _method = new WeakMap();
var _requestHeader = new WeakMap();
var _responseHeader = new WeakMap();
var _requestTask = new WeakMap();

function _triggerEvent(type) {
  if (typeof this['on' + type] === 'function') {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    this['on' + type].apply(this, args);
  }
}

function _changeReadyState(readyState) {
  this.readyState = readyState;
  _triggerEvent.call(this, 'readystatechange');
}

var XMLHttpRequest = function () {
  function XMLHttpRequest() {
    classCallCheck(this, XMLHttpRequest);
    this.onabort = null;
    this.onerror = null;
    this.onload = null;
    this.onloadstart = null;
    this.onprogress = null;
    this.ontimeout = null;
    this.onloadend = null;
    this.onreadystatechange = null;
    this.readyState = 0;
    this.response = null;
    this.responseText = null;
    this.responseType = '';
    this.responseXML = null;
    this.status = 0;
    this.statusText = '';
    this.upload = {};
    this.withCredentials = false;

    _requestHeader.set(this, {
      'content-type': 'application/x-www-form-urlencoded'
    });
    _responseHeader.set(this, {});
  }

  createClass(XMLHttpRequest, [{
    key: 'abort',
    value: function abort() {
      var myRequestTask = _requestTask.get(this);

      if (myRequestTask) {
        myRequestTask.abort();
      }
    }
  }, {
    key: 'getAllResponseHeaders',
    value: function getAllResponseHeaders() {
      var responseHeader = _responseHeader.get(this);

      return Object.keys(responseHeader).map(function (header) {
        return header + ': ' + responseHeader[header];
      }).join('\n');
    }
  }, {
    key: 'getResponseHeader',
    value: function getResponseHeader(header) {
      return _responseHeader.get(this)[header];
    }
  }, {
    key: 'open',
    value: function open(method, url) {
      _method.set(this, method);
      _url.set(this, url);
      _changeReadyState.call(this, XMLHttpRequest.OPENED);
    }
  }, {
    key: 'overrideMimeType',
    value: function overrideMimeType() {}
  }, {
    key: 'send',
    value: function send() {
      var _this = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (this.readyState !== XMLHttpRequest.OPENED) {
        throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.");
      } else {
        wx.request({
          data: data,
          url: _url.get(this),
          method: _method.get(this),
          header: _requestHeader.get(this),
          responseType: this.responseType,
          success: function success(_ref) {
            var data = _ref.data,
                statusCode = _ref.statusCode,
                header = _ref.header;

            if (typeof data !== 'string' && !(data instanceof ArrayBuffer)) {
              try {
                data = JSON.stringify(data);
              } catch (e) {
                data = data;
              }
            }

            _this.status = statusCode;
            _responseHeader.set(_this, header);
            _triggerEvent.call(_this, 'loadstart');
            _changeReadyState.call(_this, XMLHttpRequest.HEADERS_RECEIVED);
            _changeReadyState.call(_this, XMLHttpRequest.LOADING);

            _this.response = data;

            if (data instanceof ArrayBuffer) {
              _this.responseText = '';
              var bytes = new Uint8Array(data);
              var len = bytes.byteLength;

              for (var i = 0; i < len; i++) {
                _this.responseText += String.fromCharCode(bytes[i]);
              }
            } else {
              _this.responseText = data;
            }
            _changeReadyState.call(_this, XMLHttpRequest.DONE);
            _triggerEvent.call(_this, 'load');
            _triggerEvent.call(_this, 'loadend');
          },
          fail: function fail(_ref2) {
            var errMsg = _ref2.errMsg;

            if (errMsg.indexOf('abort') !== -1) {
              _triggerEvent.call(_this, 'abort');
            } else {
              _triggerEvent.call(_this, 'error', errMsg);
            }
            _triggerEvent.call(_this, 'loadend');
          }
        });
      }
    }
  }, {
    key: 'setRequestHeader',
    value: function setRequestHeader(header, value) {
      var myHeader = _requestHeader.get(this);

      myHeader[header] = value;
      _requestHeader.set(this, myHeader);
    }
  }]);
  return XMLHttpRequest;
}();

XMLHttpRequest.UNSEND = 0;
XMLHttpRequest.OPENED = 1;
XMLHttpRequest.HEADERS_RECEIVED = 2;
XMLHttpRequest.LOADING = 3;
XMLHttpRequest.DONE = 4;

var _socketTask = new WeakMap();

var WebSocket = function () {
  function WebSocket(url) {
    var _this = this;

    var protocols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    classCallCheck(this, WebSocket);
    this.binaryType = '';
    this.bufferedAmount = 0;
    this.extensions = '';
    this.onclose = null;
    this.onerror = null;
    this.onmessage = null;
    this.onopen = null;
    this.protocol = '';
    this.readyState = 3;

    if (typeof url !== 'string' || !/(^ws:\/\/)|(^wss:\/\/)/.test(url)) {
      throw new TypeError('Failed to construct \'WebSocket\': The URL \'' + url + '\' is invalid');
    }

    this.url = url;
    this.readyState = WebSocket.CONNECTING;

    var socketTask = wx.connectSocket({
      url: url,
      protocols: Array.isArray(protocols) ? protocols : [protocols]
    });

    _socketTask.set(this, socketTask);

    socketTask.onClose(function (res) {
      _this.readyState = WebSocket.CLOSED;
      if (typeof _this.onclose === 'function') {
        _this.onclose(res);
      }
    });

    socketTask.onMessage(function (res) {
      if (typeof _this.onmessage === 'function') {
        _this.onmessage(res);
      }
    });

    socketTask.onOpen(function () {
      _this.readyState = WebSocket.OPEN;
      if (typeof _this.onopen === 'function') {
        _this.onopen();
      }
    });

    socketTask.onError(function (res) {
      if (typeof _this.onerror === 'function') {
        _this.onerror(new Error(res.errMsg));
      }
    });

    return this;
  }

  createClass(WebSocket, [{
    key: 'close',
    value: function close(code, reason) {
      this.readyState = WebSocket.CLOSING;
      var socketTask = _socketTask.get(this);

      socketTask.close({
        code: code,
        reason: reason
      });
    }
  }, {
    key: 'send',
    value: function send(data) {
      if (typeof data !== 'string' && !(data instanceof ArrayBuffer)) {
        throw new TypeError('Failed to send message: The data ' + data + ' is invalid');
      }

      var socketTask = _socketTask.get(this);

      socketTask.send({
        data: data
      });
    }
  }]);
  return WebSocket;
}();

WebSocket.CONNECTING = 0;
WebSocket.OPEN = 1;
WebSocket.CLOSING = 2;
WebSocket.CLOSED = 3;

var FileReader = function FileReader() {
  classCallCheck(this, FileReader);
};

var localStorage = {
  get length() {
    var _wx$getStorageInfoSyn = wx.getStorageInfoSync(),
        keys = _wx$getStorageInfoSyn.keys;

    return keys.length;
  },

  key: function key(n) {
    var _wx$getStorageInfoSyn2 = wx.getStorageInfoSync(),
        keys = _wx$getStorageInfoSyn2.keys;

    return keys[n];
  },
  getItem: function getItem(key) {
    return wx.getStorageSync(key);
  },
  setItem: function setItem(key, value) {
    return wx.setStorageSync(key, value);
  },
  removeItem: function removeItem(key) {
    wx.removeStorageSync(key);
  },
  clear: function clear() {
    wx.clearStorageSync();
  }
};

var location = {
  href: 'game.js',
  reload: function reload() {}
};

var canvas = new Canvas();

var _window = Object.assign({}, window$1);
var global$1 = GameGlobal;

function inject() {
  _window.addEventListener = function (type, listener) {
    _window.document.addEventListener(type, listener);
  };
  _window.removeEventListener = function (type, listener) {
    _window.document.removeEventListener(type, listener);
  };

  if (_window.canvas) {
    _window.canvas.addEventListener = _window.addEventListener;
    _window.canvas.removeEventListener = _window.removeEventListener;
  }

  var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
      platform = _wx$getSystemInfoSync.platform;

  if (platform === 'devtools') {
    for (var key in _window) {
      var descriptor = Object.getOwnPropertyDescriptor(global$1, key);

      if (!descriptor || descriptor.configurable === true) {
        Object.defineProperty(window, key, {
          value: _window[key]
        });
      }
    }

    for (var _key in _window.document) {
      var _descriptor = Object.getOwnPropertyDescriptor(global$1.document, _key);

      if (!_descriptor || _descriptor.configurable === true) {
        Object.defineProperty(global$1.document, _key, {
          value: _window.document[_key]
        });
      }
    }
    window.parent = window;
  } else {
    for (var _key2 in _window) {
      global$1[_key2] = _window[_key2];
    }
    global$1.window = _window;
    window = global$1;
    window.top = window;
    window.parent = window;
  }
}

if (!GameGlobal.__isAdapterInjected) {
  GameGlobal.__isAdapterInjected = true;
  inject();
}
