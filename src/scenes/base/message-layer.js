import {winSize, director} from 'cc'

export default class MessageLayer extends cc.Layer {
  ctor() {
    super.ctor()
    this._init()
  }

  _init() {
    this._initBg()
    this._initTitle()
    this._initText()
    this._initButton()
    this._initMask()
    this.setVisible(false)
  }

  _initMask() {
    cc.eventManager.addListener({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: () => this.visible
    }, this)
  }

  _initBg() {
    this.bg = new cc.Sprite(director.$res.BOX)
    this.bg.attr({
      x: winSize.width / 2,
      y: winSize.height / 2,
    })
    this.addChild(this.bg)
  }

  _initTitle() {
    this.title = new ccui.Text
    this.title.setFontSize(30)
    this.title.setString("标题")
    this.title.attr({
      x: winSize.width / 2,
      y: winSize.height / 2 + 110,
    })
    this.addChild(this.title)
  }

  _initText() {
    this.text = new ccui.Text
    this.text.setFontSize(25)
    this.text.setString("")
    this.text.ignoreContentAdaptWithSize(false)
    this.text.setSize(cc.size(450, 200))
    this.text.attr({
      x: winSize.width / 2 - 450 / 2,
      y: winSize.height / 2 + 268 / 2 - 50,
    })
    this.text.setAnchorPoint(0, 1)
    this.addChild(this.text)
  }

  _initButton() {
    this._buttons = {}
  }

  _show(t = .33) {
    this.setOpacity(0)
    this.children.forEach(v => v.setOpacity(0))
    this.setVisible(true)

    return new Promise(resolve => {
      let fadeIn = new cc.FadeIn(t)
      let next = new cc.CallFunc(() => resolve())
      this.children.forEach(v => v.runAction(fadeIn.clone()))
      this.runAction(new cc.Sequence([fadeIn, next]))
    })
  }

  _hide(t = .33) {
    return new Promise(resolve => {
      let fadeOut = new cc.FadeOut(t)
      let fn = new cc.CallFunc(() => this.setVisible(false))
      let next = new cc.CallFunc(() => resolve())
      this.children.forEach(v => v.runAction(fadeOut.clone()))
      this.runAction(new cc.Sequence([fadeOut, fn, next]))
    })
  }
}