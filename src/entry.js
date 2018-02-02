import g_resources, {res} from './resource'
import {HelloScene, preload} from "./scenes"

const {game, view, director} = cc

game.entry = async () => {
  view.adjustViewPort(true)

  // Setup the resolution policy and design resolution size
  view.setDesignResolutionSize(960, 640, cc.ResolutionPolicy.SHOW_ALL)

  // The game will be resized when browser size change
  view.resizeWithBrowserSize(true)

  //load resources
  await preload(g_resources)
  director.runScene(new HelloScene())
}
