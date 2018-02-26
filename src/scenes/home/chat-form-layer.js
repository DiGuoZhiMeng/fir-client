import EditBox from "../../common/edit-box"
import {director} from 'cc'
import {$loading, $send} from "../../common/director";

const CHAT_HOME = 'CHAT_HOME'

export default class ChatFormLayer extends cc.Layer {
  ctor() {
    super.ctor()

    this._init()
  }

  _init() {
    this._initInput()
    this._initSend()
  }

  _initInput() {
    // 635 460
    let editBox = new EditBox(cc.size(345, 50))
    editBox.setFontColor(cc.color(255, 255, 255))
    editBox.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE)
    editBox.setInputFlag(cc.EDITBOX_INPUT_FLAG_SENSITIVE)
    editBox.setMaxLength(40)
    editBox.setPlaceHolder("请输入内容")
    editBox.attr({
      x: 620,
      y: 110,
    })
    this.addChild(editBox)
    this.ipt = editBox
  }

  _initSend() {
    // 830 460
    let btn = new ccui.Button(director.$res.home.SEND, director.$res.home.SEND_ON)
    btn.attr({
      x: 830,
      y: 112,
    })
    btn.addClickEventListener(async () => {
      $send(CHAT_HOME, this.ipt.getString())
      this.ipt.setString("")
    })
    this.addChild(btn)
  }
}