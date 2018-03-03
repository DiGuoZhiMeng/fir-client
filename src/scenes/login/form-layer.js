import {director, winSize} from 'cc'
import EditBox from "../../common/edit-box"
import {$send, $alert, $prompt, $loading} from "../../common/director";

const HEADER_REGISTER = 'REGISTER'
const HEADER_LOGIN = 'LOGIN'

export default class FormLayer extends cc.Layer {
  ctor() {
    super.ctor()
    this._init()
  }

  _init() {
    this._initInput()
    this._initBtn()
  }

  // todo 默认登录
  onEnter(){
    super.onEnter()

    $send(HEADER_LOGIN, {
      username: window.location.search.slice(1),
      password: window.location.search.slice(1),
    })
  }

  _initInput() {
    this._initUsernameInput()
    this._initPasswordInput()
  }

  _initUsernameInput() {
    let iptBg1 = new cc.Sprite(director.$res.INPUT)
    iptBg1.setScaleX(1.5)
    const username = new EditBox(cc.size(300, 50), iptBg1)
    username.setFontColor(cc.color(0, 0, 0))
    username.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE)
    username.setInputFlag(cc.EDITBOX_INPUT_FLAG_SENSITIVE)
    username.setMaxLength(16)
    username.setPlaceHolder("请输入用户名")
    username.setFont("fonts/font.ttf", 20)
    username.setDelegate(this)
    username.x = winSize.width / 2 + 70
    username.y = winSize.height / 2 + 50
    this.addChild(username)
    this.username = username
  }

  _initPasswordInput() {
    let iptBg2 = new cc.Sprite(director.$res.INPUT)
    iptBg2.setScaleX(1.5)
    const password = new EditBox(cc.size(300, 50), iptBg2)
    password.setMaxLength(16)
    password.setFontColor(cc.color(0, 0, 0))
    password.setInputFlag(cc.EDITBOX_INPUT_FLAG_PASSWORD)
    password.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE)
    password.setFont("fonts/font.ttf", 20)
    password.setPlaceHolder("请输入密码")
    password.setDelegate(this)
    password.x = winSize.width / 2 + 70
    password.y = winSize.height / 2 - 20
    this.addChild(password)
    this.password = password
  }


  _initBtn() {
    this._initLoginBtn()
    this._initRegisterBtn()
  }

  _initLoginBtn() {
    const loginBtn = new ccui.Button(director.$res.LOGIN, director.$res.LOGIN_ON)
    loginBtn.x = winSize.width / 2 + 160
    loginBtn.y = winSize.height / 2 - 100
    loginBtn.addClickEventListener(async () => {
      let form = this._validForm()
      if (form === null) {
        return
      }
      $send(HEADER_LOGIN, form)
      $loading()
    })
    this.addChild(loginBtn)
  }

  _initRegisterBtn() {
    const registerBtn = new ccui.Button(director.$res.REGISTER, director.$res.REGISTER_ON)
    registerBtn.x = winSize.width / 2 - 40
    registerBtn.y = winSize.height / 2 - 100
    registerBtn.addClickEventListener(async () => {
      let form = this._validForm()
      if (form === null) {
        return
      }
      let nickname = await $prompt("注册", "请输入昵称", form.username)
      if (nickname !== null) {
        if (nickname === '') {
          $alert('错误', '昵称不能为空')
          return
        }
        form.nickname = nickname
        $send(HEADER_REGISTER, form)
        $loading()
      }
    })
    this.addChild(registerBtn)
  }

  _validForm() {
    let form = {
      username: this.username.getString(),
      password: this.password.getString(),
    }
    if (form.username === '' || form.password === '') {
      $alert('错误', '账号或者密码不能为空')
      return null
    }

    return form
  }
}