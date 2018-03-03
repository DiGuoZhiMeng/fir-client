import {director, winSize} from 'cc'

export default class ChatBgLayer extends cc.Layer {
  ctor(x, y) {
    super.ctor()

    this._bg = new cc.Sprite(director.$res.home.CHAT_BG)
    this._bg.attr({
      x, y,
    })
    this.addChild(this._bg)
  }
}