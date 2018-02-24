import BaseScene from "../base"
import BgLayer from "./bg-layer";

export default class HomeScene extends BaseScene {
  ctor(){
    super.ctor()
    this._init()
  }

  _init(){
    this._initBg()
  }

  _initBg(){
    let layer = new BgLayer

  }

}