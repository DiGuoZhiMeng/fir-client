import {$delay} from "../../common/director";

class MsgCell extends cc.TableViewCell {
  ctor(content) {
    super.ctor()

    this.content = content
    this._init()
  }

  _init() {
    let text = new ccui.Text
    text.setString(this.content)
    text.ignoreContentAdaptWithSize(true)
    text.setTextAreaSize(cc.size(410, 0))
    text.attr({
      anchorX: 0,
      anchorY: 0,
      x: 0,
      y: 0,
    })
    text.setColor(cc.color('#000000'))
    this.addChild(text)
    this.text = text
  }
}

export default class MsgLayer extends cc.Layer {

  async ctor() {
    super.ctor()

    this.size = 0
    this.msgs = []
    this.cells = []
    await this._init()
  }

  addMsg(msg) {
    this.msgs.push(msg)
    this.size++
    this.list.reloadData()
    if (this.list.getContentSize().height > 310) {
      this.list.setContentOffset(cc.p(0, 0))
    }
  }

  async _init() {
    let list = new cc.TableView(this, cc.size(410, 320))
    list.attr({
      x: 450,
      y: 150,
    })
    list.setVerticalFillOrder(cc.TABLEVIEW_FILL_TOPDOWN) // 从上往下填充
    this.list = list
    this.addChild(list)
  }

  numberOfCellsInTableView(ctx) {
    return this.size
  }

  tableCellSizeForIndex(ctx, idx) {
    return this.tableCellAtIndex(ctx, idx).text.getContentSize()
  }

  tableCellAtIndex(ctx, idx) {
    if (this.cells[idx]) {
      return this.cells[idx]
    }

    let cell = new MsgCell(this.msgs[idx])
    this.cells[idx] = cell
    return cell
  }
}

//
// list.reloadData()
// {
//   numberOfCellsInTableView(s){
//   console.log('numberOfCellsInTableView', arguments)
//   return 0
// },
//   tableCellSizeForIndex(){
//   console.log('tableCellSizeForIndex', arguments)
//   return cc.size(0, 0)
// },
//   tableCellAtIndex(){
//   console.log('tableCellAtIndex', arguments)
//   return null
// },
// }
//
// _initMessage() {
//   let text = new ccui.Text
//   text._labelRenderer.setLineHeight(20)
//   text.setString(`
// 啊(username) 19:17:30
// 1就是了开发及福利卡fasfaffsaf
//
// 啊(username) 19:17:30
// 2阿里附近af
//
// 啊(username) 19:17:30
// 3啊顺丰卡飞机上来看
//
// 啊(username) 19:17:30
// 4拉对方就爱上了咖啡拉对方就爱上了咖啡拉对方就爱上了咖啡拉对方就爱上了咖啡拉对方就爱上了咖啡拉对方就爱上了咖啡拉对方就爱上了咖啡拉对方就爱上了咖啡
//
// 啊(username) 19:17:30
// 4拉对方就爱上了咖啡拉对方就爱上了咖啡拉对方就爱上了咖啡拉对方就爱上了咖啡拉对方就爱上了咖啡拉对方就爱上了咖啡拉对方就爱上了咖啡拉对方就爱上了咖啡
//
// 啊(username) 19:17:30
// 4拉对方就爱上了咖啡拉对方就爱上了咖啡拉对方就爱上了咖啡拉对方就爱上了咖啡拉对方就爱上了咖啡拉对方就爱上了咖啡拉对方就爱上了咖啡拉对方就爱上了咖啡
//
// 啊(username) 19:17:30
// 4拉对方就爱上了咖啡拉对方就爱上了咖啡拉对方就爱上了咖啡拉对方就爱上了咖啡拉对方就爱上了咖啡拉对方就爱上了咖啡拉对方就爱上了咖啡拉对方就爱上了咖啡
//
// 啊(username) 19:17:30
// 4拉对方就爱上了咖啡拉对方就爱上了咖啡拉对方就爱上了咖啡拉对方就爱上了咖啡拉对方就爱上了咖啡拉对方就爱上了咖啡拉对方就爱上了咖啡拉对方就爱上了咖啡
//     `)
//   text.attr({
//     x: 650,
//     y: 340,
//   })
//   text.setColor(cc.color('#000000'))
//   text.ignoreContentAdaptWithSize(false)
//   text.setSize(cc.size(410, 320))
//   this.addChild(text)
//   // 655 260
// }