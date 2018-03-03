import {director, winSize} from 'cc'
import {$alert, $confirm, $loading, $prompt, $send} from "../../common/director";

const CREATE_ROOM = 'CREATE_ROOM'
const JOIN_ROOM = 'JOIN_ROOM'

const NEED_PASSWORD = 'NEED_PASSWORD' // 需要密码
// const JOIN_PASSWORD = 'JOIN_PASSWORD' // 加入房间需要密码
// const JOIN_GAME = 'JOIN_GAME' // 加入房间 ： 切换场景到房间的场景

export default class BtnLayer extends cc.Layer {
  wsEvents = {
    async NEED_PASSWORD(body) {
      await $loading(false)
      let {roomId, password} = body
      if (password !== '') {
        await $alert('加入房间', '你输入的密码有误')
        return
      }
      await this.join(roomId, true)
    }
  }

  ctor() {
    super.ctor()

    this._init()
  }

  _init() {
    this._initCreateRoom()
    this._initJoinRoom()
    this._initQuickStart()
  }

  _initCreateRoom() {
    let btn = this._makeBtn(director.$res.home.CREATE, director.$res.home.CREATE_ON, 220, 130)
    btn.addClickEventListener(async () => {
      let password = ''
      let c = await $confirm('创建房间', '是否需要密码？')
      if (c) {
        password = await $prompt('创建房间', '请输入密码')
        if (password === null) {
          console.log('取消')
          return
        }
        if (password === '') {
          await $alert('创建房间', '请输入密码')
          return
        }
      }
      console.log('创建房间', password)
      $loading()
      $send(CREATE_ROOM, {
        password,
      })
    })
    this.addChild(btn)
  }

  _initJoinRoom() {
    let btn = this._makeBtn(director.$res.home.JOIN, director.$res.home.JOIN_ON, 220, 280)
    btn.addClickEventListener(async () => {
      let roomId = await $prompt('加入房间', '请输入房间号码？', '', '请输入房间号码？')
      if (roomId === null) {
        return
      }
      console.log('加入房间', roomId)
      await this.join(roomId)
    })
    this.addChild(btn)
  }

  _initQuickStart() {
    let btn = this._makeBtn(director.$res.home.START, director.$res.home.START_ON, 220, 430)
    btn.addClickEventListener(() => {
      console.log('快速开始')
    })
    this.addChild(btn)
  }

  _makeBtn(bg, bg_on, x, y) {
    let btn = new ccui.Button(bg, bg_on)
    btn.attr({x, y})
    return btn
  }

  async join(roomId, needPassword = false) {
    let password = ''
    if (needPassword) {
      password = await $prompt('加入房间', '房间需要密码', '', '请输入密码')
    }

    if (needPassword && password === '') {
      await $alert('加入房间', '请输入密码')
      return
    }
    console.log('加入房间', {roomId, password})
    $loading()
    $send(JOIN_ROOM, {
      roomId,
      password,
    })
  }
}