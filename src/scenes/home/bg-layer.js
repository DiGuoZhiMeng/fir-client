import {director, winSize} from 'cc'

export default class BgLayer extends cc.Layer {
  ctor() {
    super.ctor()

    this._init()
  }

  _init() {
    this._initBg()
    this._initChatBg()
  }

  _initBg() {
    let bg = new cc.Sprite(director.$res.BG)
    bg.attr({
      x: winSize.width / 2,
      y: winSize.height / 2,
    })
    this.addChild(bg)
  }

  _initChatBg(){
    let bg = new cc.Sprite(director.$res.home.CHAT_BG)
    bg.attr({
      x: 655,
      y: 285,
    })
    this.addChild(bg)
  }
}