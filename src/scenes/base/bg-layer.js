import {director, winSize} from 'cc'

export default class BgLayer extends cc.Layer {
  ctor() {
    super.ctor()

    this._bg = new cc.Sprite(director.$res.BG)
    this._bg.attr({
      x: winSize.width / 2,
      y: winSize.height / 2,
    })
    this.addChild(this._bg)
  }
}