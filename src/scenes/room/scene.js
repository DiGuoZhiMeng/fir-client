import BaseScene from "../base"

const LEAVE_ROOM = 'LEAVE_ROOM'
const PLAYER_ENTER = 'PLAYER_ENTER'
const NEW_MASTER = 'NEW_MASTER'
const READY_CHANGE = 'READY_CHANGE'

export default class RoomScene extends BaseScene {
  wsEvents = {
    [LEAVE_ROOM](msg) {
      // 离开房间
      console.log('离开房间', msg)
      // msg.id  msg.nickname
    },
    [PLAYER_ENTER](msg) {
      // 玩家进入
      console.log('玩家进入', msg)
      // id nickname
    },
    [NEW_MASTER](msg) {
      // 新房主
      console.log('成为新房主', msg)
      // id nickname
    },
    [READY_CHANGE](msg) {
      // 准备改变
      console.log('准备状态改变', msg)
      // id ready
    }
  }

  ctor(room) { // id isMaster isReady
    super.ctor()

    this._room = room
  }
}
