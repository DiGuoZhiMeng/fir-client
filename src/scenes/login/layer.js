import {winSize} from 'cc'
import BgLayer from "./bg-layer"
import FormLayer from "./form-layer"
import {$loading, $registry} from "../../common/director"

const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export default class Layer extends cc.Layer {
  wsEvents = {
    [LOGIN_SUCCESS]({next, user}) {
      console.log('登录成功', next, user)
      $registry('user', user)
      $loading(false)
      switch (next) {
        case 'home':
          break
        case 'game':
          break
      }
    },
  }

  ctor() {
    super.ctor()
    this._init()
  }

  _init() {
    this._initBg()
    this._initForm()
  }

  _initBg() {
    this.addChild(new BgLayer)
  }

  _initForm() {
    this.addChild(new FormLayer)
  }
}
