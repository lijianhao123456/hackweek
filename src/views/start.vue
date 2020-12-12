<template>
  <div class="visible"></div>
</template>
<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push("login");
    }, 3000);
  },
};
</script>
<style scoped>
.visible {
  width: 100vw;
  height: 100vh;
  background-image: url(../assets/start.jpg);
  background-size: cover;
}
</style>
