import {winSize, director} from 'cc'
import BgLayer from "./bg-layer"
import FormLayer from "./form-layer"
import {$loading, $registry} from "../../common/director"
import HomeScene from "../home/scene";
import RoomScene from "../room/scene";

const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export default class Layer extends cc.Layer {
  wsEvents = {
    [LOGIN_SUCCESS]({room, user}) {
      console.log('登录成功', room, user)
      $registry('user', user)
      $loading(false)
      if (room) {
        // 在房间
        director.pushScene(new RoomScene(room))
      } else {
        director.pushScene(new HomeScene)
      }
    },
  }

  ctor() {
    super.ctor()
    this._init()
  }

  _init() {
    this._initBg()
    this._initForm()
  }

  _initBg() {
    this.addChild(new BgLayer)
  }

  _initForm() {
    this.addChild(new FormLayer)
  }
}
