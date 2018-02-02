import {HelloScene} from './hello'

function preload(resources) {
  return new Promise(resolve => {
    cc.LoaderScene.preload(resources, () => resolve(), this)
  })
}

export {
  HelloScene,
  preload,
}
