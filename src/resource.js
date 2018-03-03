import {director} from 'cc'

const res = {
  BG: 'res/background.jpg',
  BOARD: 'res/board.jpg',
  BLACK: 'res/black.png',
  WHITE: 'res/red.png',
  LOGIN: 'res/login.png',
  LOGIN_ON: 'res/login_on.png',
  REGISTER: `res/register.png`,
  REGISTER_ON: 'res/register_on.png',
  CANCEL: 'res/cancel.png',
  CANCEL_ON: 'res/cancel_on.png',
  CONFIRM: 'res/confirm.png',
  CONFIRM_ON: 'res/confirm_on.png',
  BOX: 'res/box.png',
  BIG_BOX: 'res/big_box.png',
  LOADING: 'res/loading.jpg',
  LOADING2: `res/loading.png`,
  INPUT: 'res/input.png',
  home: {
    CREATE: 'res/home/create.png',
    CREATE_ON: 'res/home/create_on.png',
    SEND: 'res/home/send.png',
    SEND_ON: 'res/home/send_on.png',
    JOIN: 'res/home/join.png',
    JOIN_ON: 'res/home/join_on.png',
    START: 'res/home/start.png',
    START_ON: 'res/home/start_on.png',
    CHAT_BG: 'res/home/chat_bg.png',
  },
  EXIT: 'res/exit.png',
}

director.$res = res
