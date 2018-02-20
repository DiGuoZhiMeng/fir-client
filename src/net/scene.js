import Ws from "./ws"
import {director} from 'cc'
import LoginScene from "../scenes/login/scene"
import BaseScene from "../scenes/base"

class ConnectingLayer extends cc.LayerColor {
  ctor() {
    super.ctor(cc.color(0, 0, 0))

    this.rotate = new cc.RepeatForever(new cc.RotateBy(1, 360))
    this.icon = new cc.Sprite(cc.director.$res.LOADING)
    let winSize = cc.winSize

    this.icon.attr({
      x: winSize.width / 2,
      y: winSize.height / 2,
    })
    this.icon.runAction(this.rotate)
    this.addChild(this.icon)

    this.label = new cc.LabelTTF('连接中')
    this.label.attr({
      x: winSize.width / 2,
      y: winSize.height / 2 - 150,
    })
    this.addChild(this.label)

    cc.eventManager.addListener({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: () => this.visible
    }, this)

    this.setVisible(false)
  }

  show(t = .33) {
    this.setOpacity(0)
    this.icon.setOpacity(0)
    this.label.setOpacity(0)
    this.setVisible(true)

    return new Promise(resolve => {
      let fadeIn = new cc.FadeIn(t)
      let next = new cc.CallFunc(() => resolve())
      this.icon.runAction(fadeIn.clone())
      this.label.runAction(fadeIn.clone())
      this.runAction(new cc.Sequence([fadeIn, next]))
    })
  }

  hide(t = .33) {
    return new Promise(resolve => {
      let fadeOut = new cc.FadeOut(t)
      let fn = new cc.CallFunc(() => this.setVisible(false))
      let next = new cc.CallFunc(() => resolve())
      this.icon.runAction(fadeOut.clone())
      this.label.runAction(fadeOut.clone())
      this.runAction(new cc.Sequence([fadeOut, fn, next]))
    })
  }

  setText(text) {
    this.label.setString(text)
  }

  stopRotate() {
    this.icon.stopAction(this.rotate)
  }
}

export default class ConnectScene extends BaseScene {
  ctor() {
    super.ctor()

    this.layer = new ConnectingLayer
    this.addChild(this.layer)
    this.ws = director.ws = new Ws()
  }

  async onEnter() {
    super.onEnter()

    try {
      let res = await this.ws.connect('ws://127.0.0.1:8485')
      director.pushScene(new LoginScene)
    } catch (e) {
      console.log('链接错误', e)
      this.layer.setText('连接出错')
      this.layer.stopRotate()
      this.layer.show(.1)
    }
  }
}