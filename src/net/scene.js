import {director, TransitionPageTurn} from 'cc'
import LoginScene from "../scenes/login/scene"
import BaseScene from "../scenes/base"
import ConnectingLayer from "./connecting-layer"
import conn from './index'

export default class ConnectScene extends BaseScene {
  retry = false

  async ctor() {
    super.ctor()

    this.layer = new ConnectingLayer
    this.layer.show(.1)
    this.addChild(this.layer)

    await this.connect()
  }

  async connect() {
    this.retry = false
    this.layer.setText('连接中...')
    this.layer.startRotate()
    try {
      await conn.connect('ws://127.0.0.1:8485')
      // await this.$delay(.333)
      // director.pushScene(new TransitionPageTurn(1.5, new LoginScene))
      director.pushScene(new LoginScene)
    } catch (e) {
      this.onError(e)
    }
  }

  onError(e) {
    console.log('链接错误', e)
    this.layer.setText('连接出错， 刷新页面重新连接')
    this.layer.stopRotate()
    this.retry = true
  }
}