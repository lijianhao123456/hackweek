<template>
    <transition>
        <router-view/>
    </transition>
</template>

<script>
export default {
 name:Transition,
  data() {
    return {
      transitionName: "",
    };
  },
  watch: {
    $route(to, from) {
      //实现路由跳转动画
      if (to.meta.index > from.meta.index) this.transitionName = "slide-left";
      if (to.meta.index < from.meta.index) this.transitionName = "slide-right";
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

  transform: translate(-100%);
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