import { version } from "./components/Changelog.js";
import Data from './components/Data.js'
export * from './apps/index.js'

let index = await Data.importModule('/plugins/refer-plugin/adapter', 'index.js')
export const refer = index.refer || {}

Bot.logger.info(`---------^_^---------`);
Bot.logger.info(`refer插件${version}初始化~`);

setTimeout(async function () {
  let msgStr = await redis.get("refer:restart-msg");
  if (msgStr) {
    let msg = JSON.parse(msgStr);
    await relpyPrivate(msg.qq, msg.msg);
    await redis.del("refer:restart-msg");
    let msgs = [`当前refer版本: ${version}`, `您可使用 #refer版本 命令查看更新信息`];
    await relpyPrivate(msg.qq, msgs.join("\n"));
  }
}, 1000);