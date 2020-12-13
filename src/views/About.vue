<template>
  <div class="Body">
    <div class="arrow">
      <van-icon name="arrow-left" @click="onClickLeft" size="30px" color="#FF9E9A" />
    </div>
    <div class="box">
      <div class="title">
        <p style="font-size: 20px; color: white">关 于 我 们</p>
      </div>
      <div class="content_box">
        <div class="content">
          南窗是由十天极限挑战队共同打造的一款校内店铺资源展示平台，
          现已开放各类商品橱窗，欢迎加入我们，一起来探索发现吧！
          <br />
          <br />噔！这儿是我们的小伙伴： <br />---------前端：李健豪 刘珞芊----
          <br />---------后端：郭芳泉 龙伟------ <br />---------行政：胡昱琦 张晗 -----
          <br />---------产品：赵晨婧 ---------- <br />---------设计：郭晶瑛-----------
          <br />---------运营：徐思璠-----------
          <div class="qq">有什么意见和建议欢迎反馈哦！ <br />QQ群：572350356 <br /></div>
          <br />
          <div class="date">十天极限存活挑战队 <br />2020年12月12日</div>
        </div>
      </div>
      <div class="version">
        <p style="color: #ff9e9a; font-size: 15px">南窗1.0</p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);

export default {
  name: "About",
  components: {},
  methods: {
    onClickLeft() {
      this.$router.push("me");
    },
  },
};
</script>

<style scoped>
.Body {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  background-image: url("../assets/about.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.arrow {
  position: absolute;
  top: -0.1rem;
  left: 0.2rem;
  z-index: 3;
}
.box {
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  margin-top: 60px;
  background-color: #ff9e9a;
  width: 3.9rem;
  height: 0.86rem;
  border-radius: 13px 13px 0 0;
  box-shadow: 2px 2px 5px 2px #dbdada;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content_box {
  width: 275px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 2px 2px 5px 2px #dbdada;
}
.content {
  width: 88%;
  margin: auto;
  padding: 0.5rem 0;
  font-size: 16px;
  color: #8d8b8b;
  line-height: 25px;
  text-indent: 1em;
}
.version {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.qq {
  margin: 0.5rem auto 0;
  font-size: 16px;
  text-align: center;
}
.date {
  text-align: right;
}
</style>
