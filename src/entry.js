import './resource'
import {ConnectScene} from "./net"

const {game, view, director} = cc

game.entry = async () => {
  view.adjustViewPort(true)

  // Setup the resolution policy and design resolution size
  view.setDesignResolutionSize(960, 550, cc.ResolutionPolicy.SHOW_ALL)

  // The game will be resized when browser size change
  view.resizeWithBrowserSize(true)

  //load resources
  director.runScene(new ConnectScene)
}
