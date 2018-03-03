import EditBox from "../../common/edit-box"
import {director} from 'cc'
import {$send} from "../../common/director"

export default class ChatFormLayer extends cc.Layer {
  ctor(header, x, y) {
    super.ctor()

    this.header = header
    this._init(x, y)
  }

  _init(x, y) {
    this._initInput(x, y)
    this._initSend(x, y)
  }

  _initInput(x, y) {
    let editBox = new EditBox(cc.size(345, 50))
    editBox.setFontColor(cc.color(255, 255, 255))
    editBox.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE)
    editBox.setInputFlag(cc.EDITBOX_INPUT_FLAG_SENSITIVE)
    editBox.setMaxLength(40)
    editBox.setDelegate({
      editBoxReturn: () => {
        this.send()
      }
    })
    editBox.setPlaceHolder("请输入内容")
    editBox.attr({ // 620, 110
      x: x - 100,
      y,
    })
    this.addChild(editBox)
    this.ipt = editBox
  }

  _initSend(x, y) {
    this.btn = new ccui.Button(director.$res.home.SEND, director.$res.home.SEND_ON)
    this.btn.attr({
      x: x + 110,
      y: y + 5,
    })
    this.btn.addClickEventListener(() => this.send())
    this.addChild(this.btn)
  }

  send() {
    $send(this.header, this.ipt.getString())
    this.ipt.setString("")
  }
}