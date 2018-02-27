import BaseScene from "../base"
import BgLayer from "./bg-layer"
import ChatLayer from "./chat-layer"
import BtnLayer from "./btn-layer"
import RoomScene from "../room/scene"
import {director} from 'cc'

const ENTER_ROOM = 'ENTER_ROOM'

export default class HomeScene extends BaseScene {
  wsEvents = {
    [ENTER_ROOM](room) {
      // 进入房间
      director.pushScene(new RoomScene(room))
    }
  }

  ctor() {
    super.ctor()
    this.addChild(new BgLayer)
    this.addChild(new ChatLayer)
    this.addChild(new BtnLayer)
  }

}