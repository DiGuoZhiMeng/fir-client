import {LoginScene} from './login'

function preload(resources) {
  return new Promise(resolve => {
    cc.LoaderScene.preload(resources, () => resolve(), this)
  })
}

export {
  LoginScene,
}
