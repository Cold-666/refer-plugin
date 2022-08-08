import { versionInfo, refer_Artifacts_Desc } from "./help.js";
import { version } from "../components/Changelog.js";
import { refer_Artifacts } from "./refer_Artifacts.js";
import { yield_Curve } from "./yield_Curve.js";
import { updateReferPlugin } from "./admin.js";
export {
  refer_Artifacts,
  yield_Curve,
  versionInfo,
  updateReferPlugin,
  refer_Artifacts_Desc,
};


let rule = {
  refer_Artifacts: {
    reg: "^#*[^-~]+参考面板+$",
    describe: "参考面板",
  },
  yield_Curve: {
    reg: "^#*[^-~]+收益曲线+$",
    describe: "收益曲线",
  },
  versionInfo: {
    reg: "^#?refer版本$",
    describe: "版本",
  },
  updateReferPlugin: {
    hashMark: true,
    reg: "^#refer(强制)?更新",
    describe: "【#管理】refer更新",
  },
  refer_Artifacts_Desc: {
    reg: "^#?参考面板说明$",
    priority: 100,
    describe: "参考面板说明",
  }

};

export { rule };
