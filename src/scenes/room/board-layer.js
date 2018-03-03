import {director} from 'cc'
import {$alert, $registry, $send} from "../../common/director";


export default class BoardLayer extends cc.Layer {
  wsEvents = {
    SET_PIECE(body) {
      let {x, y, type} = body

      console.log('下了一个子', type, x, y)
      this.addPiece(type, x, y)
    },
    INTURN(body) {
      let {user, clock} = body
      clock--

      this.setInturn(user, clock)
    },
  }

  setInturn(user, clock) {
    this._inturn = user
    this._clock = clock
    this.clearClock()

    console.log(this.parent, this.parent.parent, 1)
    let userLayer = this.parent.parent.user
    if (userLayer._black.id === user.id) {
      // 轮到黑色
      userLayer.setWhiteSubTitle('已准备')
      this.startClock(clock, () => userLayer.setBlackSubTitle(`剩余${this._clock}秒`))
    } else {
      userLayer.setBlackSubTitle('已准备')
      this.startClock(clock, () => userLayer.setWhiteSubTitle(`剩余${this._clock}秒`))
    }
  }

  clearClock() {
    if (this._clockEv) {
      clearInterval(this._clockEv)
      this._clockEv = null
    }
  }

  startClock(clock, fn) {
    this.clearClock()

    this._clockEv = setInterval(() => {
      this._clock--
      fn(this._clock)
    }, 1000)

  }

  ctor() {
    super.ctor()

    this._initBg()
    this._data = []
    this._pieces = []
    this._inturn = null
    this._start = false
    this._clockEv = null
    this._clock = null
  }

  _initBg() {
    this._bg = new cc.Sprite(director.$res.BOARD)
    this._bg.attr({
      x: 270,
      y: 270,
    })
    this.addChild(this._bg)
    cc.eventManager.addListener({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: (touch, event) => {
        let pos = touch.getLocation(), target = event.getCurrentTarget()
        if (!cc.rectContainsPoint(target.getBoundingBox(), pos)) return false

        let x = parseInt((pos.x - 38 + 16.5) / 33),
          y = parseInt((pos.y - 40 + 16.5) / 33)

        this.setPiece(x, y)
      }
    }, this._bg)

    this._label = new cc.LabelTTF('游戏还没开始')
    this._label.attr({
      x: 270,
      y: 270,
    })
    this._label.setFontSize(30)
    this._label.setFontFillColor(cc.color('#000000'))
    this.addChild(this._label)
  }

  setPiece(x, y) {
    if (!this._start) {
      this.parent.parent.addMsg('[系统消息]游戏还没开始')
      return
    }

    if (this._inturn.id !== $registry('user').id) {
      this.parent.parent.addMsg('[系统消息]还没轮到你')
      return
    }

    if (this._data[y * 15 + x] !== undefined && this._data[y * 15 + x] !== null) {
      console.error('已经有子了', this._data)
      this.parent.parent.addMsg('[系统消息]这个位置已经有子了')
      return
    }

    $send('SET_PIECE', {
      x, y
    })
  }

  addPiece(type, x, y) {
    if (x < 0 || x > 14 || y < 0 || y > 14) {
      console.error('下子索引有错')
      return
    }
    let img = type === 0 ? director.$res.BLACK : director.$res.WHITE
    let piece = new cc.Sprite(img)
    piece.setScale(.14, .14)
    piece.attr({
      x: 38 + 33 * x,
      y: 40 + 33 * y,
    })

    this.addChild(piece)
    this._pieces.push(piece)
  }

  clearPieces() {
    this._pieces.forEach(p => this.removeChild(p))
    this._pieces = []
  }

  drawPieces() {
    for (let i = 0; i < 15 ** 2; ++i) {
      let x = i % 15, y = parseInt(i / 15)

      if (this._data[i] !== undefined && this._data[i] !== null) {
        this.addPiece(this._data[i], x, y)
      }
    }
  }

  clearData() {
    this._data = []
  }

  setGame(game) {
    console.log(game)
    if (game) {
      if (game.finished) {
        this.finish()
        return
      }
      this._start = true
      this._game = game
      this._data = game.data
      this._inturn = game.inturn

      this.clearPieces()
      this.drawPieces()
      this._label.setVisible(false)

      if (!this._clockEv) {
        let now = parseInt((new Date).getTime() / 1000)

        let resClock = game.clockStart + game.clock - now
        if (resClock > 0) {
          this.setInturn(this._inturn, resClock)
        }
      }
    }
  }

  finish() {
    this._start = false

    this._game = null
    this._data = []
    this._inturn = null
    this._start = false
    this.clearClock()
    this._clock = null
    this._label.setVisible(true)
  }
}