import plugin from '../../../lib/plugins/plugin.js'
import * as Refer from '../apps/index.js'
import { render } from './render.js'

export class refer extends plugin {
  constructor () {
    super({
      name: 'refer-plugin',
      desc: '参考面板插件',
      event: 'message',
      priority: 50,
      rule: [{
        reg: '.+',
        fnc: 'dispatch'
      }]
    })
  }

  async dispatch (e) {
    let msg = e.raw_message

    msg = '#' + msg.replace(/#|＃/, '').trim()
    for (let fn in Refer.rule) {
      let cfg = Refer.rule[fn]
      if (Refer[fn] && new RegExp(cfg.reg).test(msg)) {
        let ret = await Refer[fn](e, {
          render
        })
        if (ret === true) {
          return true
        }
      }
    }

    return false
  }
}
