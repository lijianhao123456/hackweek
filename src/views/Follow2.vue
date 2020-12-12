<template>
  <div>
    <van-nav-bar left-arrow title="关注" @click-left="onClickLeft" />
    <div>
      <van-cell
        icon="https://b.yzcdn.cn/vant/icon-demo-1126.png"
        title="李健豪"
        is-link
        label="李健豪好菜"
      >
        <template #right-icon>
          <div class="button">
            <span class="btn" @click="sorry">取关</span>
          </div>
        </template>
      </van-cell>
      <van-cell
        icon="https://b.yzcdn.cn/vant/icon-demo-1126.png"
        title="刘珞芊"
        is-link
        label="刘珞芊好强"
      >
        <template #right-icon>
          <div class="button">
            <span class="btn" @click="sorry">取关</span>
          </div>
        </template>
      </van-cell>
      <van-cell
        icon="https://b.yzcdn.cn/vant/icon-demo-1126.png"
        title="郭芳泉"
        is-link
        label="郭芳泉好强"
      >
        <template #right-icon>
          <div class="button">
            <span class="btn" @click="sorry">取关</span>
          </div>
        </template>
      </van-cell>
      <van-cell
        icon="https://b.yzcdn.cn/vant/icon-demo-1126.png"
        title="龙伟"
        is-link
        label="龙伟好强"
      >
        <template #right-icon>
          <div class="button">
            <span class="btn" @click="sorry">取关</span>
          </div>
        </template>
      </van-cell>
      <van-cell
        icon="https://b.yzcdn.cn/vant/icon-demo-1126.png"
        title="赵晨婧"
        is-link
        label="赵晨婧好强"
      >
        <template #right-icon>
          <div class="button">
            <span class="btn" @click="sorry">取关</span>
          </div>
        </template>
      </van-cell>
      <van-cell
        icon="https://b.yzcdn.cn/vant/icon-demo-1126.png"
        title="胡昱琦"
        is-link
        label="胡昱琦好强"
      >
        <template #right-icon>
          <div class="button">
            <span class="btn" @click="sorry">取关</span>
          </div>
        </template>
      </van-cell>
      <van-cell
        icon="https://b.yzcdn.cn/vant/icon-demo-1126.png"
        title="郭晶瑛"
        is-link
        label="郭晶瑛好强"
      >
        <template #right-icon>
          <div class="button">
            <span class="btn" @click="sorry">取关</span>
          </div>
        </template>
      </van-cell>
      <van-cell
        icon="https://b.yzcdn.cn/vant/icon-demo-1126.png"
        title="徐思璠"
        is-link
        label="徐思璠好强"
      >
        <template #right-icon>
          <div class="button">
            <span class="btn" @click="sorry">取关</span>
          </div>
        </template>
      </van-cell>
      <van-cell
        icon="https://b.yzcdn.cn/vant/icon-demo-1126.png"
        title="张晗"
        is-link
        label="张晗好强"
      >
        <template #right-icon>
          <div class="button">
            <span class="btn" @click="sorry">取关</span>
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

Vue.use(NavBar);
Vue.use(Toast);
Vue.use(Cell);
Vue.use(CellGroup);
export default {
  components: {},
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
  font-size: 0.3rem;
  color: #ff9e9a;
  letter-spacing: 0.1rem;
  text-align: center;
  line-height: 0.48rem;
  box-shadow: 0 2px 1px 1px rgba(0, 0, 0, 0.15);
}
.btn {
  margin-left: 0.1rem;
}
</style>
