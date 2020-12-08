<template>
    <div class="about" @click="back">
    <div class="top">关于我们</div>
    <div class="content">
      致各位亲爱的小可爱们：
      <br />咳咳…（说正事专用配图.jpg）
      <br />我们是来自南昌大学家园工作室的一群小伙伴们，共同组成了2019Hackweek大赛的第一组:
      <br />艾瑞巴蒂保护研发头发对不队。
      <br />
      <br />我们共同创造了这个产品，希望能给你们带来快乐（嘿嘿嘿）我们分别是：
      <br />------行政：何荞妤------------
      <br />------产品：张再盼------------
      <br />------设计：连海鸿------------
      <br />------前端：彭浩文------------
      <br />------后端：舒文炜、陈雨欣---
      <br />------运营：姚弘丽------------
      <br />
      <br />有什么意见和建议欢迎反馈哦！
      <br />QQ群：577953100
      <br />
      <br />瑞巴蒂保护研发头发对不队
      <br />2019年11月24日
    </div>
    <div class="span">南大拾光 v0.1.0 （点击任意处返回）</div>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";

Vue.use(Toast);
export default {
  methods: {
    back: function() {
      let _this = this;
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
        duration: 200,
        onClose() {
          _this.$router.back();
        }
      });
    }
  }
};
</script>

<style scoped>
.about {
  text-align: center;
}
.span {
  color: rgb(83, 83, 83);
  font-size: 0.3rem;
  margin-top: 2.8rem;
  display: block;
  line-height: 0.6rem;
}
.btn {
  margin-top: 1rem;
  margin: 16px 20px;
  width: 200px;
  box-shadow: 0 0 0.3rem rgba(192, 192, 192, 0.2);
}
.logo {
  margin-top: 1rem;
}
.top {
  padding: 2px 30px;
  display: inline-block;
  line-height: 40px;
  width: 140px;
  font-size: 0.38rem;
  margin: 16px 0;
  border-radius: 33px;
  color: #686868;
  background-color: #f4e077;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.16);
}
.span {
  padding: 2px 30px;
  display: inline-block;
  line-height: 40px;
  width: 340px;
  font-size: 18px;
  margin: 16px 0;
  color: #686868;
}
.content {
  padding: 25px;
  line-height: 24px;
  display: inline-block;
  height: 530px;
  width: 280px;
  font-size: 18px;
  border-radius: 10px;
  text-align: left;
  color: #686868;
  background-color: #ffffff;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.16);
}
</style>
