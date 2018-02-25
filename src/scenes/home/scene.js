import BaseScene from "../base"
import BgLayer from "./bg-layer"
import ChatLayer from "./chat-layer";

export default class HomeScene extends BaseScene {
  ctor(){
    super.ctor()
    this.addChild(new BgLayer)
    this.addChild(new ChatLayer)
  }

}