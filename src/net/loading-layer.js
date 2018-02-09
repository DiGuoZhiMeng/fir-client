import {director} from 'cc'

export default class LoadingLayer extends cc.Layer {
  ctor() {
    super.ctor()

    const size = cc.winSize

    this.rotate = new cc.RepeatForever(new cc.RotateBy(1, 360))
    this.icon = new cc.Sprite(director.$res.LOADING)
    this.icon.attr({
      x: size.width / 2,
      y: size.height / 2,
    })

    this.icon.runAction(this.rotate)
    this.addChild(this.icon)

    this.label = new cc.LabelTTF('连接中')
    this.label.attr({
      x: size.width / 2,
      y: size.height / 2 - 150,
    })
    this.addChild(this.label)
  }

  setText(text) {
    this.label.setString(text)
  }

  stopRotate() {
    this.icon.stopAction(this.rotate)
  }
}