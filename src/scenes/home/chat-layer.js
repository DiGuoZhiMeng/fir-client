import MsgLayer from "./msg-layer";
import ChatFormLayer from "./chat-form-layer";

export default class ChatLayer extends cc.Layer {
  wsEvents = {
    CHAT_HOME(body) {
      this.msgLayer.addMsg(body)
    }
  }

  ctor() {
    super.ctor()

    this._init()
  }

  _init() {
    this.msgLayer = new MsgLayer
    this.addChild(this.msgLayer)

    this.chatFormLayer = new ChatFormLayer
    this.addChild(this.chatFormLayer)
  }

  addMsg(content) {
    this.msgLayer.addMsg(content)
  }
}