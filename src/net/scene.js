import Ws from "./ws"
import {director} from 'cc'
import LoginScene from "../scenes/login/scene"
import LoadingLayer from './loading-layer'

export default class ConnectScene extends cc.Scene {
  ctor() {
    super.ctor()

    this.layer = new LoadingLayer
    this.addChild(this.layer)
    this.ws = director.ws = new Ws()
  }

  async onEnter() {
    super.onEnter()

    try {
      let res = await this.ws.connect('ws://0.0.0.0:8485')
      director.pushScene(new LoginScene)
    } catch (e) {
      console.log('链接错误', e)
      this.layer.setText('连接出错')
      this.layer.stopRotate()
    }
  }
}