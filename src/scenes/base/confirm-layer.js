import {winSize, director} from 'cc'
import AlertLayer from "./alert-layer"

export default class ConfirmLayer extends AlertLayer {
  _rejectVal = false

  _initButton() {
    super._initButton()
    this._buttons.confirm.setPositionX(winSize.width / 2 - 100)

    let cancel = new ccui.Button(director.$res.CANCEL, director.$res.CANCEL_ON)
    cancel.attr({
      x: winSize.width / 2 + 100,
      y: winSize.height / 2 - 100,
    })
    cancel.addClickEventListener(() => {
      if (this._resolve) {
        let rejectVal = this._rejectVal instanceof Function ? this._rejectVal() : this._rejectVal
        this._resolve(rejectVal)
        this._hide(this._t)
        this._resolve = null
      }
    })
    this.addChild(cancel)
    this._buttons.cancel = cancel
  }

  confirm(title = '', text = '', t = .33) {
    return new Promise(resolve => {
      this._resolve = resolve
      this._t = t
      this.text.setString(text)
      this.title.setString(title)
      this._show(t)
    })
  }
}