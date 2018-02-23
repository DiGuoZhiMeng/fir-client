import ConnectScene from './scene'
import Ws from './ws'

export {
  ConnectScene,
}

let ws = new Ws

window.ws = ws

export default ws