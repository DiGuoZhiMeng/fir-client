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
  async ctor(x, y) {
    super.ctor()

    this.size = 0
    this.msgs = []
    this.cells = []
    await this._init(x, y)
  }

  addMsg(msg) {
    this.msgs.push(msg)
    this.size++
    this.list.reloadData()
    if (this.list.getContentSize().height > 310) {
      this.list.setContentOffset(cc.p(0, 0))
    }
  }

  async _init(x, y) {
    let list = new cc.TableView(this, cc.size(410, 320))
    list.attr({
      x,
      y,
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
