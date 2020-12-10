<template>
  <div class="home">
    <!-- <input v-model="loginForm.username" />
    <input v-model="loginForm.password" /> -->
    <div style="position: relative;z-index:2">
      <div class="arrow">
        <van-icon name="arrow-left" @click="onClickLeft" size="0.6rem" color="#FF9E9A" />
      </div>
      <test />
    </div>
    <div>
      <div>
        <van-image
          round
          fit="fill"
          width="2rem"
          height="2rem"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
    </div>
    <navigation />
  </div>
</template>

<script>
// @ is an alias to /src
import navigation from "@/components/navigation.vue";
import Test from "../components/test.vue";
import Vue from "vue";
import { NavBar } from "vant";
import { Image as VanImage } from "vant";

Vue.use(VanImage);
Vue.use(NavBar);

export default {
  name: "Home",
  components: {
    navigation,
    Test,
  },
  methods: {
    onClickLeft() {
      this.$router.push("Home");
    },
  },
  data() {
    return {};
  },
};
</script>
<style scope>
.arrow{
  position:absolute;
  top: -0.1rem;
  left: 0.2rem;
  z-index: 3;
}
</style>
