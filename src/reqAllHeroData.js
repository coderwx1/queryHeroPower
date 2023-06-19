import { reqHeroData } from "@/api";
import { Notify } from "vant";
import { store } from "@/store/store.js";

export function reqAllHeroData() {
  function toNotify() {
    Notify({
      type: "danger",
      message: "数据请求失败,请重新尝试 !",
    });
  }
  const getHeroData = async () => {
    try {
      const data = await reqHeroData();
      store.setHeroData(data);
    } catch (err) {
      // 数据请求失败 显示错误提示
      console.log(err);
      toNotify();
    }
  };
  getHeroData();
}