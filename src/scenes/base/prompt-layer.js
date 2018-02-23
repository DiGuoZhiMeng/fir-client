import {winSize, director} from 'cc'
import ConfirmLayer from "./confirm-layer"
import EditBox from "../../common/edit-box"

export default class PromptLayer extends ConfirmLayer {
  _rejectVal = null

  _resolveVal = function () {
    return this.input.getString()
  }

  _init() {
    super._init()
    this._initInput()
  }

  _initInput() {
    let iptBg1 = new cc.Sprite(director.$res.INPUT)
    iptBg1.setScaleX(2)
    let input = new EditBox(cc.size(400, 50), iptBg1)
    input.setFontColor(cc.color(0, 0, 0))
    input.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE)
    input.setPlaceHolder("请输入内容")
    input.setFont("fonts/font.ttf", 20)
    input.setDelegate(this)
    input.attr({
      x: winSize.width / 2,
      y: winSize.height / 2 - 40,
    })
    this.input = input
    this.addChild(this.input)
  }

  prompt(title, text, defaultVal = '', t = .33) {
    return new Promise(resolve => {
      this._resolve = resolve
      this._t = t
      this.input.setString(defaultVal)
      this.text.setString(text)
      this.title.setString(title)
      this._show(t)
    })
  }
}