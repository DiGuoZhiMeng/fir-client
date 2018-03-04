import {director} from 'cc'
import {$loading, $send} from "../../common/director";
import BoardLayer from "./board-layer";

const EXIT_ROOM = 'EXIT_ROOM'

export default class GameLayer extends cc.Layer {
  wsEvents = {
    GAME_START(game) {
      this.parent.addMsg('[系统消息]游戏开始了')

      // 游戏开始了
      this.setGame(game)
    },
    GAME_END(result) {
      let {reason, winner} = result
      this._game = null
      this._board.finish()
      this.parent.addMsg(reason)

      let userLayer = this.parent.user
      userLayer.setWhiteSubTitle('未准备')
      userLayer.setBlackSubTitle('未准备')

      if (winner.id === userLayer._black.id) {
        userLayer._black.win++
        userLayer._white.lose++
      } else {
        userLayer._white.win++
        userLayer._black.lose++
      }
      userLayer.setBlackInfo(userLayer._black)
      userLayer.setWhiteInfo(userLayer._white)

      userLayer._blackReady = false
      userLayer._whiteReady = false
    }
  }

  ctor(game) {
    super.ctor()

    this._initBoard()
    this._initExitBtn()
  }

  _initExitBtn() {
    this.exitBtn = new ccui.Button(director.$res.EXIT)
    this.exitBtn.attr({
      x: 880,
      y: 500,
    })
    this.addChild(this.exitBtn)
    this.exitBtn.addClickEventListener(() => {
      if (this._game) {
        this.parent.addMsg('[系统消息]正在游戏中不能退出游戏，你强制退出系统将托管')
        return
      }

      $loading()
      $send(EXIT_ROOM, {})
    })
  }

  _initBoard() {
    this._board = new BoardLayer
    this.addChild(this._board)
  }

  setGame(game) {
    this._game = game
    this._board.setGame(game)
  }
}