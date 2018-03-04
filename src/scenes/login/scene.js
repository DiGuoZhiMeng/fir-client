import Layer from './layer'
import BaseScene from "../base";
import {$delay, $loading} from "../../common/director";

export default class LoginScene extends BaseScene {
  ctor() {
    super.ctor()
    this.addChild(new Layer)
  }
}