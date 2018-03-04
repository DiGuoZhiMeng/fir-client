import LoadingLayer from './loading-layer'
import ConfirmLayer from "./confirm-layer"
import AlertLayer from "./alert-layer"
import PromptLayer from "./prompt-layer"
import conn from '../../net'

const ERROR = 'ERROR'
const ALERT = 'ALERT'
const OTHER_LOGIN = 'OTHER_LOGIN'
const EVAL_ECHO = 'EVAL_ECHO'
const EVAL_ERROR = 'EVAL_ERROR'

const wsEvents = {
  [ALERT](body) {
    this.$unloading()
    if (typeof body === 'string')
      this.$alert('提示', body)
    else
      this.$alert(body.title, body.content)
  },
  [OTHER_LOGIN](body) {
    alert('你被踢下线')
    window.location.reload()
  },
  [ERROR](msg) {
    alert('发生错误，服务端拒绝访问:' + msg)
    window.location.reload()
  },
  [EVAL_ECHO](body) {
    console.log(body)
  },
  [EVAL_ERROR](error) {
    console.error(error)
  },
}

export default class BaseScene extends cc.Scene {

  ctor() {
    super.ctor()

    this.events(wsEvents)
    this._init()
  }

  events(wsEvents) {
    if (this.wsEvents) {
      wsEvents = {
        ...this.wsEvents,
        ...wsEvents,
      }
    }
    this.wsEvents = wsEvents
  }

  _init() {
    this._initLoading()
    this._initMessageBox()
  }

  _initLoading() {
    this.loading = new LoadingLayer
    this.addChild(this.loading, 999)
  }

  _initMessageBox() {
    this.confirm = new ConfirmLayer
    this.addChild(this.confirm, 998)

    this.alert = new AlertLayer
    this.addChild(this.alert, 997)

    this.prompt = new PromptLayer
    this.addChild(this.prompt, 996)
  }

  $loading() {
    return this.loading.show()
  }

  $unloading() {
    return this.loading.hide()
  }

  $confirm(title, text) {
    return this.confirm.confirm(title, text)
  }

  $alert(title, text) {
    return this.alert.alert(title, text)
  }

  $prompt(title, text, defaultVal = '', placeholder = '请输入内容') {
    return this.prompt.prompt(title, text, defaultVal, placeholder)
  }

  $delay(t) {
    return new Promise(resolve => {
      this.scheduleOnce(() => resolve(t), t)
    })
  }

  $send(header, body) {
    conn.send(header, body)
  }

  $close() {
    conn.close()
  }

  onExit() {
    super.onExit()

    this.$unloading()
    this.alert._hide(0.01)
    this.confirm._hide(.01)
    this.prompt._hide(.01)
  }
}