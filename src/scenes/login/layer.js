import {director, winSize} from 'cc'
import EditBox from "../../common/edit-box"

export default class Layer extends cc.Layer {
  _wsEvents = {
    REGISTER_SUCCESS(body) {
      this.parent.$alert("注册", "注册成功")
    },
    REGISTER_FAILURE(body) {
      this.parent.$alert("注册", `注册失败:${body}`)
    },
  }

  ctor() {
    super.ctor()

    this.sprite = new cc.Sprite(director.$res.BG)
    this.sprite.attr({
      x: winSize.width / 2,
      y: winSize.height / 2,
    })
    this.addChild(this.sprite)

    const title = new cc.LabelTTF("五子棋", "fonts/font.ttf", 38)
    title.color = cc.color('#ffffff')
    title.x = winSize.width / 2
    title.y = winSize.height / 2 + 200
    this.addChild(title)

    const uLabel = new cc.LabelTTF('用户名', 20)
    uLabel.anchorX = 0
    uLabel.x = winSize.width / 2 - 100
    uLabel.y = winSize.height / 2 + 50
    this.addChild(uLabel)

    let iptBg1 = new cc.Sprite(director.$res.INPUT)
    iptBg1.setScaleX(1.5)
    const username = new EditBox(cc.size(300, 50), iptBg1)
    username.setFontColor(cc.color(0, 0, 0))
    username.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE)
    username.setMaxLength(16)
    username.setPlaceHolder("请输入用户名")
    username.setFont("fonts/font.ttf", 20)
    username.setDelegate(this)
    username.x = winSize.width / 2 + 100
    username.y = winSize.height / 2 + 50
    this.addChild(username)

    const pLabel = new cc.LabelTTF('密码', 20)
    pLabel.anchorX = 0
    pLabel.x = winSize.width / 2 - 100
    pLabel.y = winSize.height / 2 - 20
    this.addChild(pLabel)

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
    password.x = winSize.width / 2 + 100
    password.y = winSize.height / 2 - 20
    this.addChild(password)

    const loginBtn = new ccui.Button(director.$res.LOGIN, director.$res.LOGIN_ON)
    loginBtn.x = winSize.width / 2 + 100
    loginBtn.y = winSize.height / 2 - 100
    loginBtn.addClickEventListener(async () => {
      console.log('登录')
    })
    this.addChild(loginBtn)

    const registerBtn = new ccui.Button(director.$res.REGISTER, director.$res.REGISTER_ON)
    registerBtn.x = winSize.width / 2 - 100
    registerBtn.y = winSize.height / 2 - 100
    registerBtn.addClickEventListener(async () => {
      let nickname = await this.parent.$prompt("注册", "请输入昵称")
      this.parent.$send('REGISTER', {
        username: username.getString(),
        password: password.getString(),
        nickname,
      })
    })
    this.addChild(registerBtn)
  }
}