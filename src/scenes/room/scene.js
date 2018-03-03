import BaseScene from "../base"
import ChatLayer from "../base/chat-layer";
import BgLayer from "../base/bg-layer";
import UserLayer from "./user-layer";
import GameLayer from "./game-layer";


export default class RoomScene extends BaseScene {

  ctor(room) { // id isMaster isReady
    super.ctor()
    this._room = room

    this.addChild(new BgLayer)
    this.chat = new ChatLayer('CHAT_ROOM', 'CHAT_ROOM', 780, 210)
    this.chat.setScale(0.8, 1)
    this.addChild(this.chat)

    this.user = new UserLayer(room)
    this.addChild(this.user)

    this.game = new GameLayer(room.game)
    this.addChild(this.game)
    this.game.setGame(room.game)

    this._initRoomLabel()

    this.addMsg('[系统消息]你加入房间，点击头像切换准备状态')
  }

  _initRoomLabel() {
    this.label = new cc.LabelTTF(``)
    this.updateLabel()
    this.label.attr({
      anchorX: 0,
      anchorY: 0,
      x: 0,
      y: 530,
    })
    this.addChild(this.label)
  }

  addMsg(msg) {
    this.chat.addMsg(msg)
  }

  setMaster() {
    this._room.isMaster = 1
  }

  updateLabel() {
    let room = this._room
    let pass = room.password ? (room.isMaster ? `(密码:${room.password})` : '(有密码)') : ''
    this.label.setString(`房间号码:${room.id} ${pass}`)
  }
}
