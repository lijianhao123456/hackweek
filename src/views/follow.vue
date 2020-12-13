<template>
  <div>
    <Search />
    <Head />
    <div class="container">
      <div v-for="value in info" class="card" @click="goToDetail">
        <van-image class="image" radius="5" src="https://img.yzcdn.cn/vant/cat.jpeg">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
        </van-image>
        <div class="brief">
          <div class="owner">
            <van-image
              round
              width="0.4rem"
              height="0.4rem"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <span class="ownerName">
              {{ value.owner }}
            </span>
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
    <navigation />
  </div>
</template>

<script>
import Head from "../components/Head.vue";
import Search from "../components/Search.vue";
import Navigation from "../components/navigation";

export default {
  name: "Home",
  components: {
    Head,
    Search,
    Navigation,
  },
  data() {
    return {
      info: [
        { owner: "李健豪", info: "好菜", likes: "555" },
        { owner: "刘珞芊", info: "好强", likes: "666" },
        { owner: "郭芳泉", info: "好强", likes: "666" },
        { owner: "龙伟", info: "好强", likes: "666" },
      ],
    };
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
  margin: 0.1rem auto;
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
  display: flex;
  align-items: center;
  position: absolute;
  left: 0.1rem;
  bottom: 0.1rem;
  font-size: 0.2rem;
}
.ownerName {
  margin-left: 0.08rem;
  color: #ff9e9a;
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
</style>
