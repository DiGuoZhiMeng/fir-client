import {director} from 'cc'

export default class Ws {
  _ws = null

  connect(uri) {
    return new Promise((resolve, reject) => {
      this._ws = new WebSocket(uri)
      this._ws.onclose = e => this._onClose(e)
      this._ws.onmessage = data => this._onMessage(data)
      this._ws.onopen = e => resolve(this, e)
      this._ws.onerror = e => reject(e)
    })
  }

  _onClose(e) {
    console.log('链接关闭了', e)
    director.popToRootScene()
  }

  _onMessage(data) {
    const {h, b} = JSON.parse(data)

  }

  send(header, body) {
    const data = JSON.stringify({h, b})
    this._ws.send(data)
  }

  close() {
    this._ws.close()
  }
}