import {director} from 'cc'

export default class Layer extends cc.Layer {
  ctor() {
    super.ctor()
    const size = cc.winSize

    this.sprite = new cc.Sprite(director.$res.BG)
    this.sprite.attr({
      x: size.width / 2,
      y: size.height / 2,
    })
    this.addChild(this.sprite)

    const title = new cc.LabelTTF("五子棋", "fonts/font.ttf", 38)
    title.color = cc.color('#ffffff')
    title.x = size.width / 2
    title.y = size.height / 2 + 200
    this.addChild(title)

    const uLabel = new cc.LabelTTF('用户名', 20)
    uLabel.anchorX = 0
    uLabel.x = size.width / 2 - 100
    uLabel.y = size.height / 2 + 50
    this.addChild(uLabel)

    const username = new cc.EditBox(cc.size(100, 50))
    username.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE)
    username.setPlaceHolder("请输入用户名")
    username.setFont("fonts/font.ttf", 20)
    username.setDelegate(this)
    username.x = size.width / 2
    username.y = size.height / 2 + 50
    this.addChild(username)

    const pLabel = new cc.LabelTTF('密码', 20)
    pLabel.anchorX = 0
    pLabel.x = size.width / 2 - 100
    pLabel.y = size.height / 2
    this.addChild(pLabel)

    const password = new cc.EditBox(cc.size(100, 50))
    password.setInputFlag(cc.EDITBOX_INPUT_FLAG_PASSWORD)
    password.setInputMode(cc.EDITBOX_INPUT_MODE_SINGLELINE)
    password.setFont("fonts/font.ttf", 20)
    password.setPlaceHolder("请输入密码")
    password.setDelegate(this)
    password.x = size.width / 2
    password.y = size.height / 2
    this.addChild(password)

    const loginBtn = new ccui.Button(director.$res.LOGIN, director.$res.LOGIN_ON)
    loginBtn.x = size.width / 2
    loginBtn.y = size.height / 2 - 100
    loginBtn.addClickEventListener(async () => {
      console.log(username.getString(), password.getString())
    })
    this.addChild(loginBtn)
  }
}