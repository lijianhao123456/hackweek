<template>
  <div>
    <van-nav-bar left-arrow title="关注" @click-left="onClickLeft" />
    <div>
      <van-cell
        :icon="ljh"
        title="李健豪"
        is-link
        label="李健豪好菜"
      >
        <template #right-icon>
          <div class="button">
            <span class="btn" @click="sorry">已关注</span>
          </div>
        </template>
      </van-cell>
      <van-cell
        :icon="llq"
        title="刘珞芊"
        is-link
        label="刘珞芊好强"
      >
        <template #right-icon>
          <div class="button">
            <span class="btn" @click="sorry">已关注</span>
          </div>
        </template>
      </van-cell>
      <van-cell
        :icon="gfq"
        title="郭芳泉"
        is-link
        label="郭芳泉好强"
      >
        <template #right-icon>
          <div class="button">
            <span class="btn" @click="sorry">已关注</span>
          </div>
        </template>
      </van-cell>
      <van-cell
        :icon="lw"
        title="龙伟"
        is-link
        label="龙伟好强"
      >
        <template #right-icon>
          <div class="button">
            <span class="btn" @click="sorry">已关注</span>
          </div>
        </template>
      </van-cell>
      <van-cell
        :icon="zcj"
        title="赵晨婧"
        is-link
        label="赵晨婧好强"
      >
        <template #right-icon>
          <div class="button">
            <span class="btn" @click="sorry">已关注</span>
          </div>
        </template>
      </van-cell>
      <van-cell
        :icon="hyq"
        title="胡昱琦"
        is-link
        label="胡昱琦好强"
      >
        <template #right-icon>
          <div class="button">
            <span class="btn" @click="sorry">已关注</span>
          </div>
        </template>
      </van-cell>
      <van-cell
        :icon="gjy"
        title="郭晶瑛"
        is-link
        label="郭晶瑛好强"
      >
        <template #right-icon>
          <div class="button">
            <span class="btn" @click="sorry">已关注</span>
          </div>
        </template>
      </van-cell>
      <van-cell
        :icon="xsf"
        title="徐思璠"
        is-link
        label="徐思璠好强"
      >
        <template #right-icon>
          <div class="button">
            <span class="btn" @click="sorry">已关注</span>
          </div>
        </template>
      </van-cell>
      <van-cell
        :icon="zh"
        title="张晗"
        is-link
        label="张晗好强"
      >
        <template #right-icon>
          <div class="button">
            <span class="btn" @click="sorry">已关注</span>
          </div>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Cell, CellGroup } from "vant";
import { Toast } from "vant";
import { NavBar } from 'vant';
import gfq from "@/assets/image/gfq.jpg";
import llq from "@/assets/image/llq.jpg";
import lw from "@/assets/image/lw.jpg";
import ljh from "@/assets/image/ljh.jpg";
import xsf from "@/assets/image/xsf.jpg";
import gjy from "@/assets/image/gjy.jpg";
import zh from "@/assets/image/zh.jpg";
import hyq from "@/assets/image/hyq.jpg";
import zcj from "@/assets/image/zcj.jpg";
Vue.use(NavBar);
Vue.use(Toast);
Vue.use(Cell);
Vue.use(CellGroup);
export default {
  components: {},
  data(){
    return{
      ljh,
      llq,
      gfq,
      lw,
      zcj,
      hyq,
      gjy,
      xsf,
      zh,
    }
  },
  methods: {
    sorry() {
      Toast({
        message: "  不许取关   世上没有后悔药",
        icon: "smile",
      });
    },
    onClickLeft() {
      this.$router.push("me");
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
