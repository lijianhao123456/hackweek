<template>
  <div class="home">
    <!-- <input v-model="loginForm.username" />
    <input v-model="loginForm.password" /> -->
    <button @click="goToAbout">adasds</button>
    <button @click="register">register</button>
    <navigation />
  </div>
</template>

<script>
// @ is an alias to /src
import navigation from "@/components/navigation.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    navigation,
  },
  methods: {
    goToAbout: function () {
      this.$router.push("/About");
    },
    register: function () {
      console.log(this.registerForm);
      this.$store.dispatch("register", {
        registerForm: this.registerForm,
        router: this.$router,
      });
    },
  },
  data() {
    return {
      registerForm: {
        username: "lijianhao", //接上数据
        password: "laji",
      },
    };
  },
};
</script>
<style scoped></style>
