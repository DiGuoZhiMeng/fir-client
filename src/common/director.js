import {director} from 'cc'

/**
 * 加载层
 * @param show
 */
export function $loading(show = true) {
  if (show) {
    return director.getRunningScene().$loading()
  } else {
    return director.getRunningScene().$unloading()
  }
}

/**
 * 提示框
 * @param title
 * @param content
 */
export function $alert(title, content) {
  return director.getRunningScene().$alert(title, content)
}

/**
 * 确认框
 * @param title
 * @param content
 */
export function $confirm(title, content) {
  return director.getRunningScene().$confirm(title, content)
}

/**
 * 一个可以输入文字的确认框
 * @param title
 * @param text
 * @param defaultVal
 */
export function $prompt(title, text, defaultVal = '', placeholder = '请输入内容') {
  return director.getRunningScene().$prompt(title, text, defaultVal, placeholder)
}

/**
 * 延迟几秒，t支持小数
 * @param t
 * @returns {*}
 */
export function $delay(t) {
  return director.getRunningScene().$delay(t)
}

/**
 * 发送数据
 * @param header
 * @param body
 */
export function $send(header, body) {
  return director.getRunningScene().$send(header, body)
}

/**
 * 关闭链接
 * @param header
 * @param body
 */
export function $close(header, body) {
  return director.getRunningScene().$close(header, body)
}

/**
 * 类似于全局变量，哪里都可以访问到
 * @param key
 * @param val 当不传这个参数为取值，否则为设置值
 * @returns {*}
 */
export function $registry(key, val) {
  if (val === undefined) {
    return director.registry[key]
  } else {
    director.registry[key] = val
  }
}