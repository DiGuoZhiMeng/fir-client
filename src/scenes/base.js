import {winSize} from 'cc'

class LoadingLayer extends cc.LayerColor {
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

  show(t) {
    this.setOpacity(0)
    this.icon.setOpacity(0)
    this.setVisible(true)

    return new Promise(resolve => {
      let fadeIn = new cc.FadeTo(t, 255 * .5)
      let next = new cc.CallFunc(() => resolve())
      this.icon.runAction(fadeIn.clone())
      this.runAction(new cc.Sequence([fadeIn, next]))
    })
  }

  hide(t) {
    return new Promise(resolve => {
      let fadeOut = new cc.FadeOut(t)
      let fn = new cc.CallFunc(() => this.setVisible(false))
      let next = new cc.CallFunc(() => resolve())
      this.icon.runAction(fadeOut.clone())
      this.runAction(new cc.Sequence([fadeOut, fn, next]))
    })
  }
}


export default class BaseScene extends cc.Scene {
  ctor() {
    super.ctor()

    this.loading = new LoadingLayer
    this.addChild(this.loading, 999)
  }

  showLoading() {
    return this.loading.show()
  }

  hideLoading() {
    return this.loading.hide()
  }
}