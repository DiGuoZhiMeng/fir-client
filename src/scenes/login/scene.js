import Layer from './layer'

export default class LoginScene extends cc.Scene {
  ctor() {
    super.ctor()
    this.addChild(new Layer())
  }
}