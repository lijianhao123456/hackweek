<template>
  <div>
    <NavBar />
    <div>
      <van-cell icon="chat-o" title="粉丝" is-link label="李健豪 关注了您 1天前">
        <template #right-icon>
          <div class="button">
            <span class="btn" @click="sorry">关注</span>
          </div>
        </template>
      </van-cell>
      <van-cell icon="chat-o" title="粉丝" is-link label="刘珞芊 关注了您 1天前">
        <template #right-icon>
          <div class="button">
            <span class="btn" @click="sorry">关注</span>
          </div>
        </template>
      </van-cell>
      <van-cell icon="chat-o" title="粉丝" is-link label="郭芳泉 关注了您 1天前">
        <template #right-icon>
          <div class="button">
            <span class="btn" @click="sorry">关注</span>
          </div>
        </template>
      </van-cell>
      <van-cell icon="chat-o" title="粉丝" is-link label="龙伟 关注了您 1天前">
        <template #right-icon>
          <div class="button">
            <span class="btn" @click="sorry">关注</span>
          </div>
        </template>
      </van-cell>
      <van-cell icon="chat-o" title="粉丝" is-link label="赵晨婧 关注了您 1天前">
        <template #right-icon>
          <div class="button">
            <span class="btn" @click="sorry">关注</span>
          </div>
        </template>
      </van-cell>
      <van-cell icon="chat-o" title="粉丝" is-link label="胡昱琦 关注了您 1天前">
        <template #right-icon>
          <div class="button">
            <span class="btn" @click="sorry">关注</span>
          </div>
        </template>
      </van-cell>
      <van-cell icon="chat-o" title="粉丝" is-link label="郭晶瑛 关注了您 1天前">
        <template #right-icon>
          <div class="button">
            <span class="btn" @click="sorry">关注</span>
          </div>
        </template>
      </van-cell>
            <van-cell icon="chat-o" title="粉丝" is-link label="徐思璠 关注了您 1天前">
        <template #right-icon>
          <div class="button">
            <span class="btn" @click="sorry">关注</span>
          </div>
        </template>
      </van-cell>
            <van-cell icon="chat-o" title="粉丝" is-link label="张晗 关注了您 1天前">
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
import { Toast } from 'vant';

Vue.use(Toast);
Vue.use(Cell);
Vue.use(CellGroup);
export default {
  components: { NavBar },
  methods:{
    sorry(){
      Toast({
        message: "不许关注！",
        icon: "smile",
      });
    }
  }
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
}
.btn {
  margin-left: 0.1rem;
}
</style>
