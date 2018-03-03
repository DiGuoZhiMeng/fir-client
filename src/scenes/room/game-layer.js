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
    console.log(this._board)
    this.addChild(this._board)
  }

  setGame(game) {
    this._game = game
    this._board.setGame(game)
  }
}