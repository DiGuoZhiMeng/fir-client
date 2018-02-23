export default class EditBox extends cc.EditBox {
  runAction(action) {
    this.children.forEach(v => v.runAction(action.clone()))
    super.runAction(action)
  }
}