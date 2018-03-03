import {$loading, $registry, $send} from "../../common/director";
import {director} from 'cc'

const LEAVE_ROOM = 'LEAVE_ROOM'
const PLAYER_ENTER = 'PLAYER_ENTER'
const NEW_MASTER = 'NEW_MASTER'
const READY_CHANGE = 'READY_CHANGE'
const SWITCH_READY = 'SWITCH_READY'

export default class UserLayer extends cc.Layer {
  wsEvents = {
    [LEAVE_ROOM](msg) {
      $loading(false)
      // 离开房间
      console.log('离开房间', msg)
      // isMaster
      this.parent.addMsg(`[系统消息]玩家${msg.user.nickname}离开房间`)
      if (this.isMaster) {
        this.setBlack(null)
      } else {
        this.setWhite(null)
      }

      if ($registry('user').id === msg.user.id) {
        // 你离开了
        director.popScene()
      }
    },
    [PLAYER_ENTER](msg) {
      // 玩家进入
      console.log('玩家进入', msg)
      // user isReady isMaster
      this.parent.addMsg(`[系统消息]玩家${msg.user.nickname}进入房间`)
      if (msg.isMaster) {
        this.setBlack(msg.user, msg.isReady)
      } else {
        this.setWhite(msg.user, msg.isReady)
      }
    },
    [READY_CHANGE](msg) {
      // 准备改变
      console.log('准备状态改变', msg)
      // id ready
      $loading(false)
      this.parent.addMsg('[系统消息]玩家准备状态改变')
      if (this._black && this._black.id === msg.id) {
        this.setBlack(this._black, msg.ready)
      } else if (this._white && this._white.id === msg.id) {
        this.setWhite(this._white, msg.ready)
      } else {
        console.error('你不在房间里')
      }
    },
    [NEW_MASTER](msg) {
      // 新房主
      console.log('成为新房主', msg)
      this.parent.addMsg('[系统消息]房主离开，你成为新房主')
      this.parent.setMaster()
      this.parent.updateLabel()
      // id nickname

      this.setBlack(msg.user, msg.isReady)
      this.setWhite(null)
    },
  }

  ctor(roomInfo) {
    super.ctor()
    this._initUserAvatar()
    let user = $registry('user')

    this.setBlack(roomInfo.black, roomInfo.blackReady)
    this.setWhite(roomInfo.white, roomInfo.whiteReady)
  }

  _initUserAvatar() {
    this._black = null
    this._blackReady = null
    this._blackAvatar = new cc.Sprite(director.$res.BLACK)
    this._blackAvatar.setScale(.5, .5)
    this._blackAvatar.attr({
      x: 600,
      y: 500,
    })
    cc.eventManager.addListener({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: (touch, event) => {
        let pos = touch.getLocation(), target = event.getCurrentTarget()
        if (!cc.rectContainsPoint(target.getBoundingBox(), pos)) return false

        this.switchReady(this._black, !this._blackReady)
      }
    }, this._blackAvatar)
    this._blackLabel = new cc.LabelTTF('未加入')
    this._blackLabel.attr({
      x: 600,
      y: 435,
    })
    this.addChild(this._blackAvatar)
    this.addChild(this._blackLabel)

    this._white = null
    this._whiteReady = null
    this._whiteAvatar = new cc.Sprite(director.$res.WHITE)
    this._whiteAvatar.setScale(.5, .5)
    this._whiteAvatar.attr({
      x: 750,
      y: 500,
    })
    cc.eventManager.addListener({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: (touch, event) => {
        let pos = touch.getLocation(), target = event.getCurrentTarget()
        if (!cc.rectContainsPoint(target.getBoundingBox(), pos)) return false

        this.switchReady(this._white, !this._whiteReady)
      }
    }, this._whiteAvatar)
    this._whiteLabel = new cc.LabelTTF('未加入')
    this._whiteLabel.attr({
      x: 750,
      y: 435,
    })
    this.addChild(this._whiteAvatar)
    this.addChild(this._whiteLabel)
  }

  setBlack(user, ready) {
    if (user) {
      this._black = user
      this._blackReady = ready
      this.setBlackSubTitle(ready ? '已准备' : '未准备')
    } else {
      this._black = null
      this._blackReady = null
      this._blackLabel.setString(`未加入`)
    }
  }

  setWhite(user, ready) {
    if (user) {
      this._white = user
      this._whiteReady = ready
      this.setWhiteSubTitle(ready ? '已准备' : '未准备')
    } else {
      this._white = null
      this._whiteReady = null
      this._whiteLabel.setString(`未加入`)
    }
  }

  setBlackSubTitle(text) {
    this._blackLabel.setString(`${this._black.nickname}(${text})`)
  }

  setWhiteSubTitle(text) {
    this._whiteLabel.setString(`${this._white.nickname}(${text})`)
  }

  switchReady(user, ready) {
    if (user && user.id === $registry('user').id) {
      $loading()
      $send(SWITCH_READY, {ready})
    } else {
      console.log('reg', $registry('user'))
      console.log('user', user)
      console.log('ready', ready)
    }
  }
}

