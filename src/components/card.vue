<template>
  <div class="card">
    <div class="box">
      <div class="title">{{image}}</div>
      <div class="content">{{info}}</div>
      <div class="location">
        <van-icon class="loacte" name="location-o" />
        <div class="place">{{owner}}</div>
        <van-icon class="like" name="like-o" />
        <div class="likes">{{likes}}</div>
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
import Vue from "vue";
import { Icon } from "vant";

Vue.use(Icon);

export default {
  name: "card",
  props: ["image","info", "owner", "likes"]
};
</script>

<style>
.card {
  text-align: left;
  padding: 0.4rem;
  margin: 0.2rem 0.3rem;
  height: 3.4rem;
  width: 280px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.16);
  opacity: 0.9;
}
.content {
  color: #707070;
  flex: 1;
  line-height: 22px;
  font-size: 16px;
}
.location {
  display: flex;
}
.place {
  display: inline;
  color: rgb(59, 59, 59);
  margin-left: 2px;
}
.title {
  height: 30px;
  font-weight: bold;
  font-size: 20px;
}
.box {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.like {
  margin-left: 12px;
}
.likes {
  margin-left: 2px;
}
.date {
  margin-left: 10px;
}
</style>