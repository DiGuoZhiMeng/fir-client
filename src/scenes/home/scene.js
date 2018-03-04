import BaseScene from "../base"
import BtnLayer from "./btn-layer"
import RoomScene from "../room/scene"
import {director} from 'cc'
import ChatLayer from "../base/chat-layer";
import BgLayer from "../base/bg-layer";
import {$delay, $loading} from "../../common/director";

const ENTER_ROOM = 'ENTER_ROOM'

const wsEvents = {
  [ENTER_ROOM](room) {
    // 进入房间
    director.pushScene(new RoomScene(room))
  }
}

export default class HomeScene extends BaseScene {
  ctor() {
    super.ctor()

    this.events(wsEvents)
    this.addChild(new BgLayer)
    this.addChild(new ChatLayer('CHAT_HOME', 'CHAT_HOME', 650, 280))
    this.addChild(new BtnLayer)
  }
}