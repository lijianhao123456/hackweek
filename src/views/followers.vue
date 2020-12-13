<template>
  <div>
    <NavBar />
    <div>
      <van-cell :icon="ljh" title="粉丝" is-link label="李健豪 关注了您 1天前">
        <template #right-icon>
          <div class="button">
            <span class="btn" @click="sorry">关注</span>
          </div>
        </template>
      </van-cell>
      <van-cell :icon="llq" title="粉丝" is-link label="刘珞芊 关注了您 1天前">
        <template #right-icon>
          <div class="button">
            <span class="btn" @click="sorry">关注</span>
          </div>
        </template>
      </van-cell>
      <van-cell :icon="gfq" title="粉丝" is-link label="郭芳泉 关注了您 1天前">
        <template #right-icon>
          <div class="button">
            <span class="btn" @click="sorry">关注</span>
          </div>
        </template>
      </van-cell>
      <van-cell :icon="lw" title="粉丝" is-link label="龙伟 关注了您 1天前">
        <template #right-icon>
          <div class="button">
            <span class="btn" @click="sorry">关注</span>
          </div>
        </template>
      </van-cell>
      <van-cell :icon="zcj" title="粉丝" is-link label="赵晨婧 关注了您 1天前">
        <template #right-icon>
          <div class="button">
            <span class="btn" @click="sorry">关注</span>
          </div>
        </template>
      </van-cell>
      <van-cell :icon="hyq" title="粉丝" is-link label="胡昱琦 关注了您 1天前">
        <template #right-icon>
          <div class="button">
            <span class="btn" @click="sorry">关注</span>
          </div>
        </template>
      </van-cell>
      <van-cell :icon="gjy" title="粉丝" is-link label="郭晶瑛 关注了您 1天前">
        <template #right-icon>
          <div class="button">
            <span class="btn" @click="sorry">关注</span>
          </div>
        </template>
      </van-cell>
      <van-cell :icon="xsf" title="粉丝" is-link label="徐思璠 关注了您 1天前">
        <template #right-icon>
          <div class="button">
            <span @click="sorry">关注</span>
          </div>
        </template>
      </van-cell>
      <van-cell :icon="zh" title="粉丝" is-link label="张晗 关注了您 1天前">
        <template #right-icon>
          <div class="button">
            <span class="btn" @click="sorry">关注</span>
          </div>
        </template>
      </van-cell>
    </div>
  </div>
</template>
<script>
import NavBar from "../components/NavBar.vue";
import Vue from "vue";
import { Cell, CellGroup } from "vant";
import { Toast } from "vant";
import gfq from "@/assets/image/gfq.jpg";
import llq from "@/assets/image/llq.jpg";
import lw from "@/assets/image/lw.jpg";
import ljh from "@/assets/image/ljh.jpg";
import xsf from "@/assets/image/xsf.jpg";
import gjy from "@/assets/image/gjy.jpg";
import zh from "@/assets/image/zh.jpg";
import hyq from "@/assets/image/hyq.jpg";
import zcj from "@/assets/image/zcj.jpg";

Vue.use(Toast);
Vue.use(Cell);
Vue.use(CellGroup);
export default {
  components: { NavBar },
  data() {
    return {
      ljh,
      llq,
      gfq,
      lw,
      zcj,
      hyq,
      gjy,
      xsf,
      zh,
    };
  },
  methods: {
    sorry() {
      Toast({
        message: "不许关注！",
        icon: "smile",
      });
    },
  },
};
</script>
<style scoped>
.button {
  width: 1.2rem;
  height: 0.48rem;
  background-color: #ffe7e7;
  border-radius: 0.24rem;
  margin: auto;
  font-size: 0.2rem;
  color: #ff9e9a;
  text-align: center;
  line-height: 0.48rem;
}
</style>
