import {winSize, director} from 'cc'
import MessageLayer from "./message-layer"

export default class AlertLayer extends MessageLayer {
  _resolve = null
  _resolveVal = true
  _t = null

  _initButton() {
    super._initButton()
    let confirm = new ccui.Button(director.$res.CONFIRM, director.$res.CONFIRM_ON)
    confirm.attr({
      x: winSize.width / 2,
      y: winSize.height / 2 - 100,
    })
    confirm.addClickEventListener(() => {
      if (this._resolve) {
        let resolveVal = this._resolveVal instanceof Function ? this._resolveVal() : this._resolveVal
        this._resolve(resolveVal)
        this._hide(this._t)
        this._resolve = null
      }
    })
    this.addChild(confirm)
    this._buttons.confirm = confirm
  }

  alert(title = '', text = '', t = .33) {
    return new Promise(resolve => {
      this._resolve = resolve
      this._t = t
      this.text.setString(text)
      this.title.setString(title)
      this._show(t)
    })
  }
}