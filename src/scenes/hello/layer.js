import {res} from "../../resource";

export default class HelloLayer extends cc.Layer {
  ctor() {
    super.ctor()
    const size = cc.winSize

    const helloLabel = new cc.LabelTTF("Hello World323", "Arial", 38)
    helloLabel.x = size.width / 2
    helloLabel.y = size.height / 2 + 200
    this.addChild(helloLabel, 5)

    this.sprite = new cc.Sprite(res.HelloWorld_png)
    this.sprite.attr({
      x: size.width / 2,
      y: size.height / 2,
    })
    this.addChild(this.sprite, 0)

    return true
  }
}