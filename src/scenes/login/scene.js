import Layer from './layer'
import BaseScene from "../base";

export default class LoginScene extends BaseScene {
  ctor() {
    super.ctor()
    this.addChild(new Layer)
  }
}