import {director} from 'cc'

function broadcast(node, data) {
  let {header, body} = data
  let next = true
  if (typeof node.wsEvents === 'object') {
    if (node.wsEvents[header] instanceof Function) {
      next = node.wsEvents[header].call(node, body)
    }
  }
  if (next !== false && node.children instanceof Array) {
    node.children.forEach(v => broadcast(v, data))
  }
}

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
    director.popToRootScene()
    director._scenesStack[0].onError(e)
  }

  _onMessage(messageEvent) {
    console.log('response', messageEvent.data)
    try {
      let data = JSON.parse(messageEvent.data)
      broadcast(director.getRunningScene(), data)
    } catch (e) {
      console.error('解析message失败', e, messageEvent)
      return
    }
  }

  send(header, body) {
    const data = JSON.stringify({header: header.toUpperCase(), body})
    this._ws.send(data)
  }

  close() {
    this._ws.close()
  }
}