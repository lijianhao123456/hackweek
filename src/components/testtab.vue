<template>
  <van-tabs
    @click="onClick"
    @change="changeName"
    background="white"
    animated
    swipeable
    lazy-render
    line-width="0.54rem"
    line-height="0.1rem"
    color="#F5E0E0"
    title-active-color="#F4A9A9"
    title-inactive-color="#F4A9A9"
  >
    <van-tab title="时装">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="container">
          <div v-for="value in information0" class="card" @click="goToDetail">
            <van-image class="image" radius="5" src="https://img.yzcdn.cn/vant/cat.jpeg">
              <template v-slot:loading>
                <van-loading type="spinner" size="20" />
              </template>
            </van-image>
            <div class="brief">
              <div class="owner">
                <van-icon name="like-o" />
                {{ value.owner }}
              </div>
              <div class="info">{{ value.info }}</div>
              <div class="likes">
                <van-icon
                  class="like"
                  size="0.3rem"
                  name="http://hellosun.net.cn/hackweek/good.svg"
                />
                <div>{{ value.likes }}</div>
              </div>
            </div>
          </div>
        </div>
      </van-pull-refresh>
    </van-tab>
    <van-tab title="正装">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="container">
          <div v-for="value in information1" class="card" @click="goToDetail">
            <van-image class="image" radius="5" src="https://img.yzcdn.cn/vant/cat.jpeg">
              <template v-slot:loading>
                <van-loading type="spinner" size="20" />
              </template>
            </van-image>
            <div class="brief">
              <div class="owner">
                <van-icon name="like-o" />
                {{ value.owner }}
              </div>
              <div class="info">{{ value.info }}</div>
              <div class="likes">
                <van-icon
                  class="like"
                  size="0.3rem"
                  name="http://hellosun.net.cn/hackweek/good.svg"
                />
                <div>{{ value.likes }}</div>
              </div>
            </div>
          </div>
        </div>
      </van-pull-refresh>
    </van-tab>
    <van-tab title="理发">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="container">
          <div v-for="value in information2" class="card" @click="goToDetail">
            <van-image class="image" radius="5" src="https://img.yzcdn.cn/vant/cat.jpeg">
              <template v-slot:loading>
                <van-loading type="spinner" size="20" />
              </template>
            </van-image>
            <div class="brief">
              <div class="owner">
                <van-icon name="like-o" />
                {{ value.owner }}
              </div>
              <div class="info">{{ value.info }}</div>
              <div class="likes">
                <van-icon
                  class="like"
                  size="0.3rem"
                  name="http://hellosun.net.cn/hackweek/good.svg"
                />
                <div>{{ value.likes }}</div>
              </div>
            </div>
          </div>
        </div>
      </van-pull-refresh>
    </van-tab>
    <van-tab title="美甲">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="container">
          <div v-for="value in information3" class="card" @click="goToDetail">
            <van-image class="image" radius="5" src="https://img.yzcdn.cn/vant/cat.jpeg">
              <template v-slot:loading>
                <van-loading type="spinner" size="20" />
              </template>
            </van-image>
            <div class="brief">
              <div class="owner">
                <van-icon name="like-o" />
                {{ value.owner }}
              </div>
              <div class="info">{{ value.info }}</div>
              <div class="likes">
                <van-icon
                  class="like"
                  size="0.3rem"
                  name="http://hellosun.net.cn/hackweek/good.svg"
                />
                <div>{{ value.likes }}</div>
              </div>
            </div>
          </div>
        </div>
      </van-pull-refresh>
    </van-tab>
    <van-tab title="修眉">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <div class="container">
          <div v-for="value in information4" class="card" @click="goToDetail">
            <van-image class="image" radius="5" src="https://img.yzcdn.cn/vant/cat.jpeg">
              <template v-slot:loading>
                <van-loading type="spinner" size="20" />
              </template>
            </van-image>
            <div class="brief">
              <div class="owner">
                <van-icon name="like-o" />
                {{ value.owner }}
              </div>
              <div class="info">{{ value.info }}</div>
              <div class="likes">
                <van-icon
                  class="like"
                  size="0.3rem"
                  name="http://hellosun.net.cn/hackweek/good.svg"
                />
                <div>{{ value.likes }}</div>
              </div>
            </div>
          </div>
        </div>
      </van-pull-refresh>
    </van-tab>
  </van-tabs>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
import { Icon } from "vant";
import { PullRefresh } from "vant";
import { Toast } from "vant";
import { Image as VanImage } from "vant";
import { Loading } from "vant";

Vue.use(Loading);
Vue.use(VanImage);
Vue.use(PullRefresh);
Vue.use(Icon);
Vue.use(Toast);
Vue.use(Tab);
Vue.use(Tabs);

export default {
  name: "Testtab",
  data() {
    return {
      isLoading: false,
      current: "0",
    };
  },
  computed: {
    information0() {
      // 获取store里的数据，放在computed中可以实时更新
      return this.$store.state.information0;
    },
    information1() {
      return this.$store.state.information1;
    },
    information2() {
      return this.$store.state.information2;
    },
    information3() {
      return this.$store.state.information3;
    },
    information4() {
      return this.$store.state.information4;
    },
  },

  methods: {
    onRefresh() {
      this.$store.dispatch("getInfo", this.current);
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
    onClick(name, title) {
      this.$store.dispatch("getInfo", name);
    },
    changeName(name) {
      console.log(name);
      this.current = name;
    },
    goToDetail() {
      this.$router.push("detail");
    },
  },
};
</script>
<style scoped>
.card {
  width: 3.5rem;
  height: 5.2rem;
  background-color: #f5e0e0;
  margin: 0 0.05rem 0.2rem;
  border-radius: 5px;
}
.container {
  margin: 0 auto;
  width: 7.2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.image {
  width: 3.5rem;
  height: 3.9rem;
}
.brief {
  background-color: #f5e0e0;
  color: #f3a4a5;
  font-weight: bold;
  width: 3.5rem;
  height: 1.4rem;
  z-index: 2;
  position: relative;
  font-size: 0.2rem;
  top: -0.2rem;
  border-radius: 0.1rem;
}
.owner {
  position: absolute;
  left: 0.1rem;
  bottom: 0.1rem;
}
.info {
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
}
.likes {
  position: absolute;
  right: 0.1rem;
  bottom: 0.1rem;
}
/* .shadow{
    box-shadow: 0px 0px 5px 10px rgba(0, 0, 0, 1);
} */
</style>
