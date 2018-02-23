import {winSize, director} from 'cc'

export default class LoadingLayer extends cc.LayerColor {
  ctor() {
    super.ctor(cc.color(0, 0, 0, 255 * .5))

    this.rotate = new cc.RepeatForever(new cc.RotateBy(1, 360))
    this.icon = new cc.Sprite(cc.director.$res.LOADING2)

    this.icon.attr({
      x: winSize.width / 2,
      y: winSize.height / 2,
    })
    this.icon.runAction(this.rotate)
    this.addChild(this.icon)

    cc.eventManager.addListener({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: () => this.visible
    }, this)

    this.setVisible(false)
  }

  show(t = .33) {
    this.setOpacity(0)
    this.children.forEach(v => v.setOpacity(0))
    this.setVisible(true)

    return new Promise(resolve => {
      let fadeIn = new cc.FadeTo(t, 255 * .5)
      let next = new cc.CallFunc(() => resolve())
      this.children.forEach(v => v.runAction(fadeIn.clone()))
      this.runAction(new cc.Sequence([fadeIn, next]))
    })
  }

  hide(t = .33) {
    return new Promise(resolve => {
      let fadeOut = new cc.FadeOut(t)
      let fn = new cc.CallFunc(() => this.setVisible(false))
      let next = new cc.CallFunc(() => resolve())
      this.icon.runAction(fadeOut.clone())
      this.runAction(new cc.Sequence([fadeOut, fn, next]))
    })
  }
}