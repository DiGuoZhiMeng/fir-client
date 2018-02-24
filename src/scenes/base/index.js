import LoadingLayer from './loading-layer'
import ConfirmLayer from "./confirm-layer"
import AlertLayer from "./alert-layer"
import PromptLayer from "./prompt-layer"
import conn from '../../net'

const ALERT = 'ALERT'
const OTHER_LOGIN = 'OTHER_LOGIN'

export default class BaseScene extends cc.Scene {
  wsEvents = {
    [ALERT](body) {
      this.$unloading()
      this.$alert(body.title, body.content)
    },
    [OTHER_LOGIN](body) {
      alert('你被踢下线')
    }
  }

  ctor() {
    super.ctor()
    this._init()
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

  $prompt(title, text, defaultVal = '') {
    return this.prompt.prompt(title, text, defaultVal)
  }

  $delay(t) {
    return new Promise(resolve => {
      this.scheduleOnce(() => resolve(), t)
    })
  }

  $send(header, body) {
    conn.send(header, body)
  }

  $close() {
    conn.close()
  }
}