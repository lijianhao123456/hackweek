<template>
  <!-- <v-app> -->
  <keep-alive>
    <transition :name="transitionName">
      <router-view />
    </transition>
  </keep-alive>
  <!-- </v-app> -->
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: "",
    };
  },
  watch: {
    $route(to, from) {
      //实现路由跳转动画
      // if (to.meta.index = from.meta.index) this.transitionName = "";
      if (to.meta.index == 4 && from.meta.index == 4) {
        this.transitionName = "";
      } else if (to.meta.index < from.meta.index) {
        this.transitionName = "slide-right";
      } else if (to.meta.index > from.meta.index) {
        this.transitionName = "slide-left";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 500ms;
}

.slide-right-enter {
  transform: translateX(-100%);
}

.slide-right-leave-active {
  transform: translateX(100%);
}

.slide-left-enter {
  transform: translateX(100%);
}

.slide-left-leave-active {
  transform: translateX(-100%);
}
</style>
