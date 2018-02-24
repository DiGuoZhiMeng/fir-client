import {director, winSize} from 'cc'

export default class BgLayer extends cc.Layer {
  ctor() {
    super.ctor()
    this._init()
  }

  _init() {
    this._initBg()
    this._initTitle()
    this._initLabel()
  }

  _initBg() {
    this.sprite = new cc.Sprite(director.$res.BG)
    this.sprite.attr({
      x: winSize.width / 2,
      y: winSize.height / 2,
    })
    this.addChild(this.sprite)
  }

  _initTitle() {
    const title = new cc.LabelTTF("五子棋", "fonts/font.ttf", 38)
    title.color = cc.color('#ffffff')
    title.x = winSize.width / 2
    title.y = winSize.height / 2 + 200
    this.addChild(title)
  }

  _initLabel() {
    const uLabel = new cc.LabelTTF('用户名', 20)
    uLabel.anchorX = 0
    uLabel.x = winSize.width / 2 - 150
    uLabel.y = winSize.height / 2 + 50
    this.addChild(uLabel)

    const pLabel = new cc.LabelTTF('密码', 20)
    pLabel.anchorX = 0
    pLabel.x = winSize.width / 2 - 150
    pLabel.y = winSize.height / 2 - 20
    this.addChild(pLabel)
  }
}