import HelloLayer from './layer'

export default class HelloScene extends cc.Scene {
  onEnter() {
    super.onEnter()
    this.addChild(new HelloLayer())
  }
}