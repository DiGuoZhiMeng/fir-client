import {director} from 'cc'
import MsgLayer from "./msg-layer"
import ChatFormLayer from "./chat-form-layer"

export default class ChatLayer extends cc.Layer {
  ctor(send, recv, x, y) {
    super.ctor()

    this.header = send

    this.wsEvents = {
      [recv](msg) {
        this.addMsg(msg)
      }
    }
    this._initBg(x, y)
    this._initMsg(x, y)
    this._initForm(x, y)
  }

  addMsg(msg) {
    this._msg.addMsg(msg)
  }

  _initBg(x, y) {
    this._bg = new cc.Sprite(director.$res.home.CHAT_BG)
    this._bg.attr({
      x,
      y,
    })
    this.addChild(this._bg)
  }

  _initMsg(x, y) {
    this._msg = new MsgLayer(x - 200, y - 130)
    this.addChild(this._msg)
  }

  _initForm(x, y) {
    this._form = new ChatFormLayer(this.header, x + 60, y - 175)
    this.addChild(this._form)
  }
}



