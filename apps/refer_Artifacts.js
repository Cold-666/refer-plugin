import { segment } from "oicq";
import fs from "fs";
import gsCfg from '../model/gsCfg.js'

//项目路径
const _path = process.cwd ();

export async function refer_Artifacts (e) {
    let msg = e.msg.replace(/#|＃|参考面板|/g, "");
    console.log (msg);
    let id = gsCfg.roleNameToID(msg);
    let name;
    if (["10000005", "10000007", "20000000"].includes(id)) {
        if (!["风主", "岩主", "雷主"].includes(msg)) {
            e.reply("请输入风主/岩主/雷主参考面板~");
            return true;
        }
        name = msg;
    } else {
        name = gsCfg.roleIdToName(id, true);
        if (!name) return true;
    }
    let path = `${_path}/plugins/refer-plugin/resources/refer_Artifacts/${name}.png`;
    console.log (path);
    if (fs.existsSync (path)) {
        //最后回复消息
        let msg = [
            segment.image (path),
            '[来源:nga @bluemushoom]',
        ];
        //发送消息
        e.reply (msg);
    } else {
        e.reply ("打咩，查无此角色参考面板~>_<");
    }
    return true;//返回true 阻挡消息不再往下
}
