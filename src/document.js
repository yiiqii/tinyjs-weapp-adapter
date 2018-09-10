import * as window from './window'
import HTMLElement from './HTMLElement'
import Image from './Image'
import Audio from './Audio'
import Video from './Video'
import Canvas from './Canvas'
import './EventIniter/'

const events = {}

const document = {
  readyState: 'complete',
  visibilityState: 'visible',
  documentElement: window,
  hidden: false,
  style: {},
  location: window.location,
  ontouchstart: null,
  ontouchmove: null,
  ontouchend: null,

  head: new HTMLElement('head'),
  body: new HTMLElement('body'),

  createElement(tagName) {
    let element = null

    if (tagName === 'canvas') {
      element = new Canvas()
    } else if (tagName === 'audio') {
      element = new Audio()
    } else if (tagName === 'img') {
      element = new Image()
    } else if (tagName === 'video') {
      element = new Video()
    } else {
      element = new HTMLElement(tagName)
    }

    return element
  },

  getElementById(id) {
    if (id === window.canvas.id) {
      return window.canvas
    }
    return null
  },

  getElementsByTagName(tagName) {
    let elements = null

    if (tagName === 'head') {
      elements = [document.head]
    } else if (tagName === 'body') {
      elements = [document.body]
    } else if (tagName === 'canvas') {
      elements = [window.canvas]
    } else {
      elements = []
    }

    return elements
  },

  getElementsByName(tagName) {
    let elements = null

    if (tagName === 'head') {
      elements = [document.head]
    } else if (tagName === 'body') {
      elements = [document.body]
    } else if (tagName === 'canvas') {
      elements = [window.canvas]
    } else {
      elements = []
    }

    return elements
  },

  querySelector(query) {
    let element = null

    if (query === 'head') {
      element = document.head
    } else if (query === 'body') {
      element = document.body
    } else if (query === 'canvas') {
      element = window.canvas
    } else if (query === `#${window.canvas.id}`) {
      element = window.canvas
    } else {
      // Placeholder for eslint
    }
    return element
  },

  querySelectorAll(query) {
    let elements = null

    if (query === 'head') {
      elements = [document.head]
    } else if (query === 'body') {
      elements = [document.body]
    } else if (query === 'canvas') {
      elements = [window.canvas]
    } else {
      elements = []
    }

    return elements
  },

  addEventListener(type, listener) {
    if (!events[type]) {
      events[type] = []
    }
    events[type].push(listener)
  },

  removeEventListener(type, listener) {
    const listeners = events[type]

    if (listeners && listeners.length > 0) {
      for (let i = listeners.length; i--; i > 0) {
        if (listeners[i] === listener) {
          listeners.splice(i, 1)
          break
        }
      }
    }
  },

  dispatchEvent(event) {
    const listeners = events[event.type]

    if (listeners) {
      for (let i = 0; i < listeners.length; i++) {
        listeners[i](event)
      }
    }
  },
}

export default document
